import './App.css';
import { useRef, useEffect, useState } from 'react';
import Landing from './pages/Landing';
import About from './pages/About';
import Compositions from './pages/Compositions';
import TourDates from './pages/TourDates';
import Merch from './pages/Merch';
import Booking from './pages/Booking';
import Navbar from './components/Navbar';
import AudioPlayer from './components/AudioPlayer';

const pages = [<Landing />, <About />, <Compositions />, <TourDates />, <Merch />, <Booking />];

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();
    if (isScrolling) return;

    setIsScrolling(true);

    if (event.deltaY > 0) {
      setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1));
    } else {
      setCurrentPage((prev) => Math.max(prev - 1, 0));
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
    };
  }, [isScrolling]);

  useEffect(() => {
    if (scrollRef.current) {
      const targetPage = scrollRef.current.children[currentPage] as HTMLElement;
      targetPage.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  return (
    <div className="app-container">
      {/* Show Navbar on pages other than Landing */}
      {currentPage !== 0 && <Navbar setCurrentPage={setCurrentPage} />}
      <AudioPlayer/>

      <div className="scroll-container" ref={scrollRef}>
        {pages.map((page, index) => (
          <div className="page" key={index}>
            {page}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
