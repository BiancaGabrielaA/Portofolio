import { useRef, useState } from 'react';
import '../styles/audio.css';
import audio from '../assets/audio.mp3';

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);

  const playMusic = async () => {
    const audio = audioRef.current;
    if (audio) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Playback failed:", err);
      }
      setShowPrompt(false);
    }
  };

  const handleDeny = () => {
    setShowPrompt(false);
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play().then(() => setIsPlaying(true));
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={audio} type="audio/mpeg" />
      </audio>

      {showPrompt && (
        <div className="music-popup">
          <p>🎶 Play music while browsing?</p>
          <div className="popup-actions">
            <button onClick={playMusic}>Yes</button>
            <button onClick={handleDeny}>No</button>
          </div>
        </div>
      )}

      <div
        className={`audio-player ${showPrompt ? 'hidden' : ''}`}
        onClick={togglePlay}
        title="Toggle Music"
      >
        <div className={`music-icon ${isPlaying ? 'playing' : ''}`}>
          <span>🎵</span>
        </div>
      </div>
    </>
  );
}
