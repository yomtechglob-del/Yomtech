import { useEffect, useRef } from 'react';

/**
 * useReveal — attaches a single IntersectionObserver to a container ref.
 * When the element enters the viewport it gets the "visible" class,
 * triggering the pure-CSS reveal transition defined in index.css.
 *
 * @param {number} threshold  0–1, how much of the element must be visible (default 0.15)
 * @param {string} rootMargin optional root margin string (default '0px')
 */
export function useReveal(threshold = 0.15, rootMargin = '0px') {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el); // fire once — no re-animation on scroll back up
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
