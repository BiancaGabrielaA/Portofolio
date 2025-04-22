import { useRef, useState, useEffect } from 'react';

export function useHorizontalScroll() {
  const elRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const container = elRef.current;
    if (!container) return;

    // Width of one page (100% of the viewport)
    const panelWidth = container.offsetWidth;
    const scrollDelay = 500; // Time for scroll transition (in ms)

    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return; // Prevent multiple scrolls at once
      e.preventDefault(); // Prevent default scroll behavior

      const direction = e.deltaY > 0 ? 1 : -1; // Scroll down or up (right or left)
      const currentScroll = container.scrollLeft;
      let nextScroll = currentScroll + direction * panelWidth; // Scroll by one page width

      // Boundaries: Prevent scrolling past the first or last page
      nextScroll = Math.max(0, Math.min(nextScroll, container.scrollWidth - container.offsetWidth));

      container.scrollTo({
        left: nextScroll,
        behavior: 'smooth', // Smooth scroll transition
      });

      setIsScrolling(true);

      // After the scroll finishes, unlock further scrolling
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false); // Unlock scroll after delay
      }, scrollDelay);
    };

    // Add wheel event listener for horizontal scroll
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [isScrolling]);

  return elRef;
}
