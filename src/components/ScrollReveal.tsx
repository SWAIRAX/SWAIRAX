import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * ScrollReveal - A wrapper component for scroll-based reveal animations
 *
 * Usage:
 * <ScrollReveal>
 *   <YourContent />
 * </ScrollReveal>
 *
 * With delay:
 * <ScrollReveal delay={100}>
 *   <YourContent />
 * </ScrollReveal>
 *
 * With custom className:
 * <ScrollReveal className="my-custom-class">
 *   <YourContent />
 * </ScrollReveal>
 */
interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds (0, 100, 200, 300, etc.)
}

export function ScrollReveal({
  children,
  className,
  delay = 0
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Disable scroll reveal for BlogDetail and Privacy pages
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const isDisabledPage = currentPath.includes('/blog/') || currentPath.includes('/privacy');

  useEffect(() => {
    // Skip scroll reveal logic for disabled pages
    if (isDisabledPage) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    // Respect reduced motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isDisabledPage]);

  return (
    <div
      ref={ref}
      className={cn(
        // Skip scroll-reveal classes for disabled pages
        !isDisabledPage && 'scroll-reveal',
        !isDisabledPage && isVisible && 'scroll-reveal-visible',
        className
      )}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
