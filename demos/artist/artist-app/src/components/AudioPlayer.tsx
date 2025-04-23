import { useRef, useState } from 'react';
import '../styles/audio.css';
import audio from '../assets/audio.mp3';

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="audio-player" onClick={togglePlay} title="Toggle Music">
      <audio ref={audioRef} loop>
        <source src={audio} type="audio/mpeg" />
      </audio>
      <div className={`music-icon ${isPlaying ? 'playing' : ''}`}>
        <span>🎵</span>
      </div>
    </div>
  );
}
