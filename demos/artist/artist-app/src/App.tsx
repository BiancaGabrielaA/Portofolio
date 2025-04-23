import './App.css';
import { useRef, useEffect, useState } from 'react';
import Landing from './pages/Landing';
import About from './pages/About';
import Compositions from './pages/Compositions';
import TourDates from './pages/TourDates';
import Merch from './pages/Merch';
import Booking from './pages/Booking';

const pages = [<Landing />, <About />, <Compositions />, <TourDates />, <Merch />, <Booking />];

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleWheel = (event: WheelEvent) => {
    // Prevent the default wheel event (vertical scroll)
    event.preventDefault();

    if (isScrolling) return;

    setIsScrolling(true);

    if (event.deltaY > 0) {
      // Scroll down: move right
      setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1)); // Don't scroll past the last page
    } else {
      // Scroll up: move left
      setCurrentPage((prev) => Math.max(prev - 1, 0)); // Don't scroll past the first page
    }

    // Throttle the scroll action to allow smooth navigation
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000); // 1-second throttle (adjust timing as necessary)
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      // Listen to wheel scroll event on the container
      scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        if (scrollContainer) {
          scrollContainer.removeEventListener('wheel', handleWheel);
        }
      };
    }
  }, [isScrolling]);

  useEffect(() => {
    if (scrollRef.current) {
      // Move the scroll to the correct page
      const targetPage = scrollRef.current.children[currentPage];
      targetPage.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  return (
    <div className="scroll-container" ref={scrollRef}>
      {pages.map((page, index) => (
        <div className="page" key={index}>
          {page}
        </div>
      ))}
    </div>
  );
}

export default App;
