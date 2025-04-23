import { useState } from 'react';
import '../styles/compositions.css';

const works = [
        {
          name: "Requiem in D Minor",
          description: "Mozart’s final, hauntingly powerful choral masterpiece.",
          link: "https://www.youtube.com/watch?v=sPlhKP0nZII"
        },
        {
          name: "Eine kleine Nachtmusik",
          description: "A joyful and iconic serenade — one of Mozart’s best-known pieces.",
          link: "https://www.youtube.com/watch?v=oy2zDJPIgwc"
        },
        {
          name: "The Magic Flute",
          description: "A fantastical opera blending mystery, romance, and Enlightenment ideals.",
          link: "https://www.youtube.com/watch?v=YZRzp2bF5yM"
        },
        {
          name: "Symphony No. 40",
          description: "Expressive and stormy, a glimpse into Mozart’s deeper emotions.",
          link: "https://www.youtube.com/watch?v=JTc1mDieQI8"
        },
        {
          name: "Don Giovanni",
          description: "A darkly comic opera — elegant, tragic, and unforgettable.",
          link: "https://www.youtube.com/watch?v=3f6QZrG5bTg"
        },
        {
          name: "Piano Concerto No. 21",
          description: "A stunning blend of grace and complexity. (a.k.a. Elvira Madigan)",
          link: "https://www.youtube.com/watch?v=df-eLzao63I"
        },
        {
          name: "Clarinet Concerto in A Major",
          description: "Lyrical and serene — Mozart's love letter to the clarinet.",
          link: "https://www.youtube.com/watch?v=YT_63UntRJE"
        },
        {
          name: "The Marriage of Figaro",
          description: "Witty and revolutionary, a favorite opera of many critics and fans.",
          link: "https://www.youtube.com/watch?v=etpLYoaO3uQ"
        }
];

export default function Compositions() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + works.length) % works.length);
  };

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length);
  };

  const getPositionClass = (index: number) => {
    const diff = index - currentIndex;
    if (diff === 0) return 'card center';
    if (diff === -1 || diff === works.length - 1) return 'card left';
    if (diff === 1 || diff === -(works.length - 1)) return 'card right';
    return 'card hidden';
  };

  return (
    <div className="carousel-container">
      <button onClick={prevCard} className="arrow left">◀</button>
      <div className="carousel">
        {works.map((work, index) => (
          <div key={index} className={getPositionClass(index)}>
            <p className='fs-2'>{work.name}</p>
            <p className='fs-4'>{work.description}</p>
            <a href={work.link} target="_blank" rel="noopener noreferrer">
                <button className='fs-3'>🎧 Listen</button>
            </a>
          </div>
        ))}
      </div>
      <button onClick={nextCard} className="arrow right">▶</button>
    </div>
  );
}
