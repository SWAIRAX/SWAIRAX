"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Button } from "./button";
import { ExternalLink } from "lucide-react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  onLearnMore,
  cardType = "service",
  showImages = false,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    keyFeatures?: string[];
    tags?: string[];
    imageUrl?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  cardType?: "service" | "blog" | "simple";
  showImages?: boolean;
  onLearnMore?: (item: { quote: string; name: string; title: string; keyFeatures?: string[]; tags?: string[]; imageUrl?: string }) => void;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--scroll-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--scroll-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--scroll-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--scroll-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--scroll-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-1 py-2 animate-scroll xs:gap-1.5 sm:gap-2 md:gap-3",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className={`relative w-[240px] max-w-full shrink-0 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-card hover:-translate-y-1 px-2 py-2 xs:w-[260px] xs:px-3 xs:py-3 sm:w-[300px] sm:px-4 sm:py-4 md:w-[340px] lg:w-[380px] xl:w-[400px] group ${
              cardType === 'simple'
                ? 'bg-card border border-border hover:shadow-card cursor-pointer hover-scale'
                : 'bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-black border border-red-500/20 hover:border-red-400/50 hover:shadow-[0_25px_80px_-40px_rgba(255,0,0,0.6)] hover:-translate-y-2'
            } ${cardType === 'blog' ? 'blog-card' : cardType === 'service' ? 'service-card' : ''}`}
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>

              {showImages && item.imageUrl && (
                <div className="w-full aspect-video overflow-hidden mb-4">
                  <img
                    src={`/uploads/${item.imageUrl.replace(/^\/+/,'')}`}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Title at the top */}
              <div className="relative z-20 mb-4">
                <h3 className={
                  cardType === 'simple'
                    ? 'text-xl font-bold mb-3 leading-snug'
                    : 'text-base md:text-lg font-bold text-red-300 group-hover:text-red-200 transition-colors'
                }>
                  {item.name}
                </h3>
              </div>

              <span className={`relative z-20 text-sm leading-relaxed font-normal ${
                cardType === 'simple' ? 'text-muted-foreground' : 'text-white'
              }`}>
                {item.quote}
              </span>

              {item.keyFeatures && item.keyFeatures.length > 0 && (
                <div className="relative z-20 mt-4">
                  <h4 className="font-semibold text-red-300 mb-1 text-xs">Key Features:</h4>
                  <ul className="space-y-0.5">
                    {item.keyFeatures.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-1.5 text-xs">
                        <div className="w-1 h-1 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-gray-200 leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.tags && item.tags.length > 0 && (
                <div className="relative z-20 mt-3">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-block px-1.5 py-0.5 text-xs bg-red-500/20 text-red-200 border border-red-500/30 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {cardType === 'simple' && (
                <div className="relative z-20 mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span>{item.title}</span>
                  </div>
                </div>
              )}

              {cardType !== 'simple' && (
                <div className="relative z-20 mt-4 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className="text-sm leading-[1.6] font-normal text-gray-400">
                      {item.title}
                    </span>
                  </span>
                </div>
              )}
              {onLearnMore && (
                <div className="relative z-20 mt-4">
                  <Button
                    variant={cardType === 'simple' ? 'ghost' : 'outline'}
                    onClick={() => onLearnMore(item)}
                    className={
                      cardType === 'simple'
                        ? 'group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-transparent text-primary hover:text-primary hover:border-primary/50 hover:bg-transparent active:bg-transparent transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                        : 'w-full text-xs border-white/20 text-white hover:bg-red-600 hover:text-white transition-all group/btn'
                    }
                  >
                    <ExternalLink className="w-3 h-3 mr-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    Learn More
                  </Button>
                </div>
              )}
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
