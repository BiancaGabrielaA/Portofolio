import './App.css';
import { useHorizontalScroll } from './hooks/useHorizontalScroll';

function App() {
  const scrollRef = useHorizontalScroll();

  return (
    <div className="scroll-container" ref={scrollRef}>
      <div className="scroll-content">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="panel">Panel {i + 1}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
