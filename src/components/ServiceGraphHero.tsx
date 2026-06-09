import React, { useEffect, useMemo, useRef } from "react";

export interface GraphNode {
  id: string;
  src: string;
  alt: string;
  /** Short caption shown beneath the tile (scale.com pattern). */
  label?: string;
  /** Final position in the graph viewport, in percent (0-100). */
  x: number;
  y: number;
  /** Optional pixel size (default 96px). */
  size?: number;
  /** Optional rotation in degrees. */
  rotation?: number;
  /** Starting offset for the entrance, in pixels. */
  xStartOffset?: number;
  yStartOffset?: number;
  /** Indices of other nodes this one connects to. */
  connections?: number[];
  /** Internal route the tile should navigate to when tapped. When set, the
   *  tile renders as a clickable link with the "card opens" hover affordance
   *  (scale.com tiles work this way). */
  href?: string;
}

export interface ServiceGraphHeroProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  cta?: React.ReactNode;
  nodes: GraphNode[];
  /** Optional legacy edges; ignored if a node has `connections`. */
  edges?: Array<[number, number]>;
  className?: string;
  /** Invoked when a tile is tapped — receives the node so the parent can
   *  decide what "open" means (navigate, open modal, etc.). */
  onNodeClick?: (node: GraphNode, index: number) => void;
}

// Scale.com-style "graph network" hero.
//
// All animation parameters lifted from scale.com/enterprise's bundle:
//
//   1. ENTRANCE — tile starts at (xStartOffset, yStartOffset), opacity 0.4.
//      Tweens back to (0, 0) over 2 s with `power4.inOut`, opacity → 1.
//   2. LINES DRAW IN — each connecting line starts with
//      `strokeDasharray: 1000, strokeDashoffset: 1000`. After a
//      `1.1 + 0.05·idx` second delay, `strokeDashoffset` animates to 0 over
//      1.2 s with `power2.out`, "tracing" the line from one node to the
//      other. This is the visible "lines move the images across the page"
//      effect.
//   3. SMOOTH-OUT GATE — 1.7 s after entrance starts, multiplies the
//      continuous effects (idle drift + scale wobble + mouse parallax) by a
//      0 → 1 ramp over 4 s with `sine.out` ease.
//   4. IDLE DRIFT — sine waves per tile, exact formulas:
//        dx = sin(0.4·t + 1e4·i) · (10 + 5·i) · mobileFactor · smoothOut
//        dy = cos(0.5·t + 1e4·i) · (10 + 5·i) · mobileFactor · smoothOut
//        scale = 1 + 0.05·cos(0.3·t + 1e4·i) · smoothOut
//   5. MOUSE PARALLAX — `20 * !mobile` px max offset, scaled by depth
//      (1 + 0.4·i) and smoothOut. Lerped at 0.08 per frame.
//   6. CONNECTING LINES — endpoints re-anchored to the live `(x + idleX,
//      y + idleY)` of each node every frame; the path string is rewritten
//      via setAttribute("x1/y1/x2/y2"), so the network deforms continuously.

const easePower4InOut = (t: number) =>
  t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
const easeSineOut = (t: number) => Math.sin((t * Math.PI) / 2);
const easePower2Out = (t: number) => 1 - (1 - t) * (1 - t);

const ENTRANCE_MS = 2000;
const SMOOTH_OUT_START_MS = 1700;
const SMOOTH_OUT_DURATION_MS = 4000;
const LINE_DRAW_DELAY_MS = 1100;
const LINE_DRAW_DURATION_MS = 1200;
const LINE_DASH = 1000;

// Slow continuous bottom-to-top drift. Each tile follows a sinusoid that
// swings between +FLOW_AMP_PX (below target) and -FLOW_AMP_PX (above
// target) over FLOW_CYCLE_SEC seconds, with a per-tile phase so the network
// never moves in unison. No wrap, no fade — the motion just rhythmically
// pulls each tile from bottom to top and back.
const FLOW_AMP_PX = 40;
const FLOW_CYCLE_SEC = 10;

const ServiceGraphHero = ({
  title,
  subtitle,
  cta,
  nodes,
  edges,
  className = "",
  onNodeClick,
}: ServiceGraphHeroProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const nodeElRefs = useRef<Array<HTMLDivElement | null>>([]);
  // Per-edge refs to the wrapping <g>, the faint base line, and the
  // bright travelling-bead line. Direct refs (instead of querySelector)
  // so the RAF can update each one reliably regardless of how the SVG
  // class selectors behave across browsers.
  const lineGroupRefs = useRef<Array<SVGGElement | null>>([]);
  const baseLineRefs = useRef<Array<SVGLineElement | null>>([]);
  const brightLineRefs = useRef<Array<SVGLineElement | null>>([]);

  // Flatten declared `connections` per node into ordered [a, b] edge pairs,
  // de-duped so we don't draw the same line twice.
  const computedEdges = useMemo<Array<[number, number]>>(() => {
    const fromConnections: Array<[number, number]> = [];
    const seen = new Set<string>();
    nodes.forEach((n, i) => {
      (n.connections ?? []).forEach((j) => {
        if (j === i || j < 0 || j >= nodes.length) return;
        const a = Math.min(i, j);
        const b = Math.max(i, j);
        const key = `${a}-${b}`;
        if (seen.has(key)) return;
        seen.add(key);
        fromConnections.push([a, b]);
      });
    });
    if (fromConnections.length > 0) return fromConnections;
    return edges ?? [];
  }, [nodes, edges]);

  const nodesRef = useRef(nodes);
  const edgesRef = useRef(computedEdges);
  nodesRef.current = nodes;
  edgesRef.current = computedEdges;

  const motion = useMemo(
    () =>
      nodes.map((n, i) => {
        const angle = (i / Math.max(1, nodes.length)) * Math.PI * 2 + 0.6;
        const defaultStartX = Math.cos(angle) * 140;
        const defaultStartY = Math.sin(angle) * 110;
        return {
          parallaxDepth: 1 + 0.4 * i,
          xStartOffset: n.xStartOffset ?? defaultStartX,
          yStartOffset: n.yStartOffset ?? defaultStartY,
          stagger: i * 80,
          idxForPhase: i + 1,
          ampPx: 10 + 5 * i,
        };
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [nodes.length],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Mouse target (-1..1, normalised from section centre) and lerped current.
    let mouseTargetX = 0;
    let mouseTargetY = 0;
    let mouseX = 0;
    let mouseY = 0;
    // Scroll progress.
    let rawScroll = 0;
    let smoothedScroll = 0;

    const onPointerMove = (e: PointerEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseTargetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseTargetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const onPointerLeave = () => {
      mouseTargetX = 0;
      mouseTargetY = 0;
    };
    const updateScrollTarget = () => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      rawScroll = Math.max(0, -rect.top / Math.max(1, window.innerHeight));
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave, { passive: true });
    window.addEventListener("scroll", updateScrollTarget, { passive: true });
    window.addEventListener("resize", updateScrollTarget, { passive: true });
    updateScrollTarget();

    let raf = 0;
    const start = performance.now();
    const isDesktopMQ = window.matchMedia("(min-width: 768px)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const tick = (now: number) => {
      const elapsedMs = now - start;
      const t = elapsedMs / 1000;

      smoothedScroll += (rawScroll - smoothedScroll) * 0.08;
      mouseX += (mouseTargetX - mouseX) * 0.08;
      mouseY += (mouseTargetY - mouseY) * 0.08;

      const isDesktop = isDesktopMQ.matches;
      const parallaxFactor = (isDesktop ? 0.2 : 0.06) * (reduceMotion ? 0.4 : 1);
      const fadeProgress = Math.min(1, smoothedScroll * 1.2);
      const heroOpacity = 1 - fadeProgress;
      const mobileFactor = (isDesktop ? 1 : 0.3) * (reduceMotion ? 0.3 : 1);
      const mouseAmpPx = 20 * (isDesktop ? 1 : 0); // scale.com: `20 * !mobile`
      // Shrink tiles on mobile so 7 of them fit a phone viewport. Apply via
      // a CSS variable that the inline `width` style reads (set below).
      const tileScale = isDesktop ? 1 : 0.55;
      if (containerRef.current) {
        containerRef.current.style.setProperty("--tile-scale", String(tileScale));
      }

      const currentNodes = nodesRef.current;
      const currentEdges = edgesRef.current;
      const rect = containerRef.current?.getBoundingClientRect();
      const w = rect?.width ?? 0;
      const h = rect?.height ?? 0;

      const positions: Array<{ x: number; y: number }> = [];
      for (let i = 0; i < currentNodes.length; i++) {
        const n = currentNodes[i];
        const m = motion[i] ?? {
          parallaxDepth: 1, xStartOffset: 0, yStartOffset: 0,
          stagger: 0, idxForPhase: 1, ampPx: 10,
        };

        // (1) ENTRANCE.
        const entranceElapsed = Math.max(0, elapsedMs - m.stagger);
        const entranceT = Math.min(1, entranceElapsed / ENTRANCE_MS);
        const entranceEased = easePower4InOut(entranceT);
        const entranceRemaining = 1 - entranceEased;
        const entranceX = entranceRemaining * m.xStartOffset;
        const entranceY = entranceRemaining * m.yStartOffset;
        const entranceOpacity = 0.4 + 0.6 * entranceEased;

        // (3) SMOOTH-OUT gate.
        const smoothElapsed = Math.max(0, elapsedMs - m.stagger - SMOOTH_OUT_START_MS);
        const smoothT = Math.min(1, smoothElapsed / SMOOTH_OUT_DURATION_MS);
        const smoothOut = easeSineOut(smoothT);

        // (4) IDLE DRIFT.
        const phase = 1e4 * m.idxForPhase;
        const idleX = Math.sin(0.4 * t + phase) * m.ampPx * mobileFactor * smoothOut;
        const idleY = Math.cos(0.5 * t + phase) * m.ampPx * mobileFactor * smoothOut;
        const scaleWobble = 1 + 0.05 * Math.cos(0.3 * t + phase) * smoothOut;

        // (5) MOUSE PARALLAX — inverse cursor offset · depth · smoothOut.
        const mouseDX = -mouseX * mouseAmpPx * m.parallaxDepth * smoothOut;
        const mouseDY = -mouseY * mouseAmpPx * m.parallaxDepth * smoothOut;

        // SCROLL PARALLAX (vertical, in % of container height).
        const parallaxYPct = smoothedScroll * m.parallaxDepth * parallaxFactor * 100;

        // (7) BOTTOM-TO-TOP DRIFT — sinusoidal vertical flow per tile.
        // Each tile sweeps from +FLOW_AMP_PX (below resting) to
        // -FLOW_AMP_PX (above resting) over FLOW_CYCLE_SEC seconds, with a
        // unique phase so the whole network doesn't move in unison.
        const flowPhase = (m.idxForPhase / Math.max(1, currentNodes.length)) * Math.PI * 2;
        const flowY = -Math.sin((2 * Math.PI * t) / FLOW_CYCLE_SEC + flowPhase) * FLOW_AMP_PX * smoothOut;

        const dxPx = entranceX + idleX + mouseDX;
        const dyPx = entranceY + idleY + mouseDY + (parallaxYPct / 100) * h + flowY;
        const dxPct = w > 0 ? (dxPx / w) * 100 : 0;
        const dyPct = h > 0 ? (dyPx / h) * 100 : 0;
        positions.push({ x: n.x + dxPct, y: n.y + dyPct });

        const el = nodeElRefs.current[i];
        if (el && w > 0 && h > 0) {
          const rot = n.rotation ?? 0;
          el.style.transform =
            `translate(calc(-50% + ${dxPx.toFixed(2)}px), calc(-50% + ${dyPx.toFixed(2)}px)) ` +
            `rotate(${rot}deg) scale(${scaleWobble.toFixed(3)})`;
          el.style.opacity = String(entranceOpacity * heroOpacity);
        }
      }

      // (6) Re-anchor SVG edges and run the line-draw entrance.
      for (let i = 0; i < currentEdges.length; i++) {
        const [a, b] = currentEdges[i];
        const group = lineGroupRefs.current[i];
        const pa = positions[a];
        const pb = positions[b];
        if (!group || !pa || !pb) continue;

        // Line-draw entrance: strokeDashoffset 1000 → 0 over LINE_DRAW_DURATION.
        const drawDelay = LINE_DRAW_DELAY_MS + i * 50;
        const drawT = Math.min(1, Math.max(0, (elapsedMs - drawDelay) / LINE_DRAW_DURATION_MS));
        const drawEased = easePower2Out(drawT);
        const dashOffset = LINE_DASH * (1 - drawEased);

        const baseLine = baseLineRefs.current[i];
        const brightLine = brightLineRefs.current[i];
        const x1 = String(pa.x);
        const y1 = String(pa.y);
        const x2 = String(pb.x);
        const y2 = String(pb.y);
        for (const ln of [baseLine, brightLine]) {
          if (!ln) continue;
          ln.setAttribute("x1", x1);
          ln.setAttribute("y1", y1);
          ln.setAttribute("x2", x2);
          ln.setAttribute("y2", y2);
        }
        // Base line: entrance draw-in (dashoffset 1000 → 0 over LINE_DRAW_DURATION).
        if (baseLine) {
          baseLine.setAttribute("stroke-dashoffset", String(dashOffset));
        }
        // Bright bead: pure JS-driven, no CSS animation in the mix.
        //   - Phase has a 10% hold at each end, then 40% travel in each
        //     direction. So the bead slides from tile A to tile B, PAUSES
        //     briefly at B, slides back to A, PAUSES, repeats.
        //   - Per-edge stagger so the 9 edges aren't in unison.
        //   - Travel distance = real line length minus the bead so the bead
        //     hugs each tile at the endpoints instead of sailing off.
        if (brightLine) {
          const BEAD_LEN = 30;          // matches strokeDasharray="30 200"
          const cycleMs = 4000;         // full A→B→A loop
          const edgePhaseMs = (i * cycleMs * 0.17) % cycleMs;
          const phase = ((elapsedMs + edgePhaseMs) % cycleMs) / cycleMs;
          let triProgress: number;
          if (phase < 0.4) {
            triProgress = phase / 0.4; // forward 0 → 1 (40% of cycle)
          } else if (phase < 0.5) {
            triProgress = 1;           // hold at far tile (10%)
          } else if (phase < 0.9) {
            triProgress = 1 - (phase - 0.5) / 0.4; // backward 1 → 0 (40%)
          } else {
            triProgress = 0;           // hold at start tile (10%)
          }
          const dx = pb.x - pa.x;
          const dy = pb.y - pa.y;
          const lineLen = Math.sqrt(dx * dx + dy * dy);
          const travel = Math.max(0, lineLen - BEAD_LEN);
          brightLine.setAttribute("stroke-dashoffset", String(-triProgress * travel));
        }
        group.style.opacity = String(heroOpacity);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("scroll", updateScrollTarget);
      window.removeEventListener("resize", updateScrollTarget);
    };
  }, [motion]);

  return (
    <section
      ref={sectionRef}
      className={`EnterpriseHero relative isolate h-[100dvh] min-h-[640px] overflow-hidden bg-background text-foreground ${className}`}
    >
      <div ref={containerRef} className="absolute inset-0">
        {/* Exact class string from scale.com/enterprise so the SVG layer
            positions identically — centred via translate(-50%,-50%). */}
        <svg
          className="edges absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* CSS for the bright travelling segment lives in src/index.css
              under the `.graph-edge-string` selector — putting it in the
              global stylesheet guarantees the keyframe rules load, instead
              of relying on an SVG-embedded <style> block. */}
          {computedEdges.map(([a, b], i) => {
            const na = nodes[a];
            const nb = nodes[b];
            if (!na || !nb) return null;
            // Stagger each line's pulse so they don't all swing in unison.
            // (Pulse motion is JS-driven from the RAF loop — see the
            // `brightLine.setAttribute("stroke-dashoffset", …)` block.)
            return (
              <g
                key={`${a}-${b}`}
                ref={(g) => {
                  lineGroupRefs.current[i] = g;
                }}
              >
                {/* Base line — draws in once via strokeDashoffset, then stays
                    visible as the static "string" between two tiles. */}
                <line
                  ref={(ln) => {
                    baseLineRefs.current[i] = ln;
                  }}
                  x1={na.x}
                  y1={na.y}
                  x2={nb.x}
                  y2={nb.y}
                  stroke="currentColor"
                  strokeOpacity={0.3}
                  strokeWidth={0.2}
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray={LINE_DASH}
                  strokeDashoffset={LINE_DASH}
                />
                {/* Bright travelling bead — JS drives stroke-dashoffset
                    every frame (see RAF loop). The bead slides forward
                    along the base line from one image to the other, then
                    slides back. */}
                <line
                  ref={(ln) => {
                    brightLineRefs.current[i] = ln;
                  }}
                  data-edge={i}
                  x1={na.x}
                  y1={na.y}
                  x2={nb.x}
                  y2={nb.y}
                  stroke="#dc2626"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="30 200"
                  strokeDashoffset={0}
                />
              </g>
            );
          })}
        </svg>

        {nodes.map((n, i) => {
          const basePx = n.size ?? 96;
          // Width references the --tile-scale CSS var set every frame, so
          // the tile shrinks on mobile breakpoints without a re-render.
          const widthExpr = `calc(${basePx}px * var(--tile-scale, 1))`;
          const clickable = Boolean(n.href || onNodeClick);
          const handleActivate = () => {
            if (onNodeClick) {
              onNodeClick(n, i);
            } else if (n.href) {
              window.location.assign(n.href);
            }
          };
          // Wrapper for the clickable affordance — sits OUTSIDE the inner
          // clip-path div so the inner div keeps scale.com's exact class
          // signature (`relative w-full h-full shrink-0`) on every tile.
          const ShellTag = clickable ? "button" : "div";
          const shellProps = clickable
            ? {
                type: "button" as const,
                onClick: handleActivate,
                "aria-label": n.alt,
              }
            : {};
          return (
            <div
              key={n.id}
              ref={(el) => {
                nodeElRefs.current[i] = el;
              }}
              className="node-inner absolute will-change-transform"
              style={{
                left: `${n.x}%`,
                top: `${n.y}%`,
                width: widthExpr,
                height: "auto",
                transform: "translate(-50%, -50%)",
                // Start visible so the hero renders even if the RAF entrance
                // animation can't run (HMR cache, JS error, prefers-reduced-
                // motion lockdown, etc.). The RAF will overwrite this with
                // entranceOpacity * heroOpacity on the very first tick.
                opacity: 1,
              }}
            >
              <div className="flex flex-col items-center gap-2">
                <ShellTag
                  {...shellProps}
                  className={[
                    "group relative aspect-square w-full overflow-hidden",
                    "transition-all duration-500 ease-out",
                    clickable
                      ? "cursor-pointer hover:scale-[1.12] hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(15,23,42,0.45)] hover:ring-2 hover:ring-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 active:scale-[1.04]"
                      : "hover:scale-110",
                  ].join(" ")}
                >
                  {/* Inner clip-path layer — IDENTICAL across every tile,
                      matching the exact class string scale.com uses on
                      their EnterpriseHeroNode root: `relative w-full
                      h-full shrink-0` with inline clip-path. */}
                  <div
                    className="relative w-full h-full shrink-0"
                    style={{ clipPath: "inset(0px round 10%)" }}
                  >
                    <img
                      src={n.src}
                      alt={n.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  {clickable && (
                    <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 translate-y-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      Open →
                    </div>
                  )}
                </ShellTag>
                {n.label && (
                  <div
                    aria-hidden="true"
                    className="text-center text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 transition-colors duration-300 group-hover:text-slate-700"
                    style={{ marginBottom: "-0.12em", paddingBottom: "0.12em" }}
                  >
                    {n.label}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 text-center text-foreground">
        {title}
        {subtitle && (
          <div className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            {subtitle}
          </div>
        )}
        {cta && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">{cta}</div>
        )}
      </div>
    </section>
  );
};

export default ServiceGraphHero;
