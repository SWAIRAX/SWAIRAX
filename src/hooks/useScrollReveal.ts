import { useEffect, useRef, useState } from 'react';

const DEFAULT_THRESHOLD = 0.2;
const DEFAULT_ROOT_MARGIN = '0px 0px -10% 0px';
const DEFAULT_REVEAL_SELECTOR =
  '[data-scroll-reveal], section, article, .feature-card, .solution-card, .partner-card, .metric-card, .card';

type ScrollObserverOptions = {
  threshold?: number;
  rootMargin?: string;
};

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
  options: ScrollObserverOptions = {}
) {
  const { threshold = DEFAULT_THRESHOLD, rootMargin = DEFAULT_ROOT_MARGIN } = options;
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
export function initScrollReveal(options: ScrollObserverOptions & { selector?: string; autoAttach?: boolean } = {}) {
  if (typeof window === 'undefined') return;

  // Skip scroll reveal for BlogDetail and Privacy pages
  const currentPath = window.location.pathname;
  const isDisabledPage = currentPath.includes('/blog/') || currentPath.includes('/privacy');
  if (isDisabledPage) return;

  const {
    threshold = DEFAULT_THRESHOLD,
    rootMargin = DEFAULT_ROOT_MARGIN,
    selector = DEFAULT_REVEAL_SELECTOR,
    autoAttach = false,
  } = options;

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
    { threshold, rootMargin }
  );

  const elements = Array.from(
    document.querySelectorAll(autoAttach ? selector : '[data-scroll-reveal]')
  ).filter((el): el is HTMLElement => el instanceof HTMLElement && !el.dataset.noScrollReveal);

  elements.forEach((el) => {
    if (autoAttach) {
      if (!el.hasAttribute('data-scroll-reveal')) {
        el.setAttribute('data-scroll-reveal', '');
      }
      if (!el.classList.contains('scroll-reveal')) {
        el.classList.add('scroll-reveal');
      }
    }

    if (prefersReducedMotion) {
      el.classList.add('scroll-reveal-visible');
      return;
    }

    observer.observe(el);
  });

  return () => observer.disconnect();
}

export default useScrollReveal;
