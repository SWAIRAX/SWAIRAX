"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement | any>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if we're on desktop (screen width > 768px)
    const checkIsDesktop = () => {
      if (typeof window !== 'undefined') {
        setIsDesktop(window.innerWidth > 768);
      }
    };

    // Initial check
    checkIsDesktop();

    // Add resize listener
    window.addEventListener('resize', checkIsDesktop);

    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  useEffect(() => {
    if (cardRef.current && isDesktop) {
      const { left, width: localWidth } =
        cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }
  }, [isDesktop]);

  function mouseMoveHandler(event: any) {
    if (!isDesktop) return;
    event.preventDefault();

    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    if (!isDesktop) return;
    setIsMouseOver(false);
    setWidthPercentage(0);
  }
  function mouseEnterHandler() {
    if (!isDesktop) return;
    setIsMouseOver(true);
  }
  function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
    if (!isDesktop) return;
    event.preventDefault();
    const clientX = event.touches[0]!.clientX;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  // Smoothly clamp the cursor position to 0–100 so the gradient reveal
  // never spills past the text edges.
  const clampedPct = Math.max(0, Math.min(100, widthPercentage));

  return (
    <div
      onMouseEnter={isDesktop ? mouseEnterHandler : undefined}
      onMouseLeave={isDesktop ? mouseLeaveHandler : undefined}
      onMouseMove={isDesktop ? mouseMoveHandler : undefined}
      onTouchStart={isDesktop ? mouseEnterHandler : undefined}
      onTouchEnd={isDesktop ? mouseLeaveHandler : undefined}
      onTouchMove={isDesktop ? touchMoveHandler : undefined}
      ref={cardRef}
      className={cn("relative", className)}
    >
      {children}

      {/*
        Two stacked text layers:
          1) BASE — the everyday text, always visible in the page's
             foreground colour. Reads cleanly on any theme.
          2) REVEAL — the alternate text in the brand primary colour,
             revealed left-to-right by a clip-path that tracks the cursor.
        A thin gradient bar follows the cursor as a subtle "pen tip".
      */}
      <div className="relative inline-block w-full">
        {/* BASE text — hidden by clipPath from the LEFT in lockstep with
            the reveal text, so the two never appear at the same character
            position. At rest, no clipping → fully visible. */}
        {isDesktop ? (
          <motion.p
            animate={{
              clipPath: `inset(0 0 0 ${isMouseOver ? clampedPct : 0}%)`,
            }}
            transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-black leading-tight text-foreground"
            style={{ willChange: "clip-path" }}
          >
            {text}
          </motion.p>
        ) : (
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-black leading-tight text-foreground">
            {text}
          </p>
        )}

        {/* REVEAL text — overlaid, clipped from the RIGHT by cursor pct.
            The two clips meet at the cursor X, swapping the base text out
            for the brand-coloured reveal text wherever the cursor has
            already passed. */}
        {isDesktop && (
          <motion.p
            aria-hidden="true"
            animate={{
              clipPath: `inset(0 ${100 - clampedPct}% 0 0)`,
              opacity: isMouseOver && clampedPct > 0 ? 1 : 0,
            }}
            transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
            className={cn(
              "absolute inset-0 text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-black leading-tight",
              "bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent",
            )}
            style={{ willChange: "clip-path" }}
          >
            {revealText}
          </motion.p>
        )}

        {/* Cursor "pen tip" — a slim vertical gradient bar that rides
            along with the reveal edge. Sits on top of both layers. */}
        {isDesktop && (
          <motion.div
            aria-hidden="true"
            animate={{
              left: `${clampedPct}%`,
              opacity: isMouseOver && clampedPct > 0 ? 1 : 0,
            }}
            transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
            className="pointer-events-none absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent"
          />
        )}
      </div>
    </div>
  );
};

export const TextRevealCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={twMerge("text-white text-lg mb-2", className)}>
      {children}
    </h2>
  );
};

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={twMerge("text-[#a9a9a9] text-sm", className)}>{children}</p>
  );
};

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0 hidden md:block">
      {[...Array(80)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: "#d62e0a", // brand red
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block"
        ></motion.span>
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);
