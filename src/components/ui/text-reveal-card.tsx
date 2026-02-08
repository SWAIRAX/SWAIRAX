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

  const rotateDeg = (widthPercentage - 50) * 0.1;
  return (
    <div
      onMouseEnter={isDesktop ? mouseEnterHandler : undefined}
      onMouseLeave={isDesktop ? mouseLeaveHandler : undefined}
      onMouseMove={isDesktop ? mouseMoveHandler : undefined}
      onTouchStart={isDesktop ? mouseEnterHandler : undefined}
      onTouchEnd={isDesktop ? mouseLeaveHandler : undefined}
      onTouchMove={isDesktop ? touchMoveHandler : undefined}
      ref={cardRef}
      className={cn(
        "bg-black/80 border border-red-500/20 rounded-lg p-4 md:p-6 relative overflow-hidden backdrop-blur-sm",
        className
      )}
    >
      {children}

      <div className="relative flex items-center overflow-visible py-2">
        {isDesktop && (
          <motion.div
            style={{
              width: "100%",
            }}
            animate={
              isMouseOver
                ? {
                    opacity: widthPercentage > 0 ? 1 : 0,
                    clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                  }
                : {
                    clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                  }
            }
            transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
            className="absolute bg-black/95 z-20 will-change-transform"
          >
            <p
              style={{
                textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
              }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-relaxed bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent py-1"
            >
              {revealText}
            </p>
          </motion.div>
        )}
        {isDesktop && (
          <motion.div
            animate={{
              left: `${widthPercentage}%`,
              rotate: `${rotateDeg}deg`,
              opacity: widthPercentage > 0 ? 1 : 0,
            }}
            transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
            className="hidden md:block h-20 w-[8px] bg-gradient-to-b from-transparent via-red-500 to-transparent absolute z-50 will-change-transform"
          ></motion.div>
        )}

        <div className="overflow-visible">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-relaxed bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent py-1">
            {text}
          </p>
          {isDesktop && <MemoizedStars />}
        </div>
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
            backgroundColor: "rgb(239 68 68)", // red-500
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
