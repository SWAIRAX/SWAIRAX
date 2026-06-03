import { useEffect, useRef } from "react";

/**
 * Lightweight, shared multi-layer parallax engine.
 *
 * All registered elements are driven by a SINGLE passive scroll listener and a
 * SINGLE requestAnimationFrame loop, so adding parallax to many layers across
 * many sections stays cheap. Each frame we (1) read every element's rect, then
 * (2) write its transform — reads and writes are batched in separate passes to
 * avoid layout thrashing. Off-screen layers are skipped.
 *
 * `speed` is the fraction of the element's distance from the viewport centre
 * that it is shifted by: positive = moves down (slower than scroll), negative =
 * moves up (faster). Keep it small (0.04–0.25) for a subtle, premium feel.
 */
type Axis = "x" | "y";

interface ParallaxItem {
  el: HTMLElement;
  speed: number;
  axis: Axis;
  clamp: number;
  /** last transform we applied — subtracted from the rect so the offset is
   *  computed from the element's UNTRANSFORMED position (no feedback loop). */
  last: number;
}

const items = new Set<ParallaxItem>();
let rafId = 0;
let listening = false;

function update() {
  rafId = 0;
  const vh = window.innerHeight;
  const margin = 240;

  // Pass 1 — read all rects (no writes interleaved). Subtract the transform we
  // applied last frame so we measure the element's natural (untransformed) spot.
  const writes: Array<[ParallaxItem, number]> = [];
  items.forEach((it) => {
    const rect = it.el.getBoundingClientRect();
    const baseTop = (it.axis === "y" ? rect.top : rect.left) - it.last;
    const baseFar = it.axis === "y" ? rect.bottom - it.last : rect.right - it.last;
    if (baseFar < -margin || baseTop > vh + margin) return; // off-screen
    const size = it.axis === "y" ? rect.height : rect.width;
    const center = baseTop + size / 2;
    let offset = (center - vh / 2) * it.speed;
    if (it.clamp) offset = Math.max(-it.clamp, Math.min(it.clamp, offset));
    writes.push([it, offset]);
  });

  // Pass 2 — apply transforms.
  for (const [it, offset] of writes) {
    it.last = offset;
    it.el.style.transform =
      it.axis === "y"
        ? `translate3d(0, ${offset.toFixed(2)}px, 0)`
        : `translate3d(${offset.toFixed(2)}px, 0, 0)`;
  }
}

function onScroll() {
  if (!rafId) rafId = requestAnimationFrame(update);
}

function ensureListening() {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
}

export function useParallax<T extends HTMLElement = HTMLDivElement>(
  speed = 0.12,
  axis: Axis = "y",
  clamp = 0,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const item: ParallaxItem = { el, speed, axis, clamp, last: 0 };
    items.add(item);
    ensureListening();
    el.style.willChange = "transform";
    el.style.backfaceVisibility = "hidden";
    update();
    return () => {
      items.delete(item);
      el.style.transform = "";
      el.style.willChange = "";
    };
  }, [speed, axis, clamp]);

  return ref;
}
