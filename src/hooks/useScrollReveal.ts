import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal - A hook for scroll-based reveal animations
 * 
 * Usage:
 * const { ref, isVisible } = useScrollReveal();
 * <div ref={ref} className={isVisible ? 'scroll-reveal-visible' : 'scroll-reveal'}>
 * 
 * Or use the utility classes directly with data-scroll-reveal attribute:
 * <div data-scroll-reveal className="scroll-reveal">Content</div>
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: {
    threshold?: number;
    rootMargin?: string;
  } = {}
) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
          observer.unobserve(element); // Only trigger once
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}

/**
 * initScrollReveal - Initialize scroll reveal for elements with data-scroll-reveal attribute
 * Call this once in your app (e.g., in a useEffect in App.tsx or a layout component)
 */
export function initScrollReveal() {
  if (typeof window === 'undefined') return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  const elements = document.querySelectorAll('[data-scroll-reveal]');
  elements.forEach((el) => {
    if (prefersReducedMotion) {
      el.classList.add('scroll-reveal-visible');
    } else {
      observer.observe(el);
    }
  });

  return () => observer.disconnect();
}

export default useScrollReveal;
