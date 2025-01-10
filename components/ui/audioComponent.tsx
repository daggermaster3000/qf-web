import { useState, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
    Title: string;
  src: string; // Path to the audio file
  defaultVolume?: number; // Default volume (0 to 1)
  playbackRate?: number; // Playback speed
}

export default function AudioPlayer({
  Title,
  src,
  defaultVolume = 1,
  playbackRate = 1,
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(defaultVolume);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      audioRef.current.volume = defaultVolume;
      audioRef.current.playbackRate = playbackRate;
    }
  };

  const handleVolumeChange = (value: number) => {
    setVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="p-4 border rounded-lg bg-slate-900 text-white flex flex-col items-center space-y-4">
      <h3>{Title}</h3>
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      <div className="flex items-center space-x-4">
        <button
          onClick={() => audioRef.current && (audioRef.current.currentTime -= 10)}
          aria-label="Rewind 10 seconds"
        >
          <SkipBack size={12} />
        </button>
        <button onClick={togglePlayPause} aria-label={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <button
          onClick={() => audioRef.current && (audioRef.current.currentTime += 10)}
          aria-label="Forward 10 seconds"
        >
          <SkipForward size={12} />
        </button>
      </div>
      <div className="w-full flex items-center space-x-2">
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={(e) => {
            const newTime = Number(e.target.value);
            if (audioRef.current) {
              audioRef.current.currentTime = newTime;
            }
            setCurrentTime(newTime);
          }}
          className="w-full"
        />
        <span>{formatTime(duration)}</span>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => handleVolumeChange(volume === 0 ? 1 : 0)}
          aria-label={volume === 0 ? 'Unmute' : 'Mute'}
        >
          {volume === 0 ? <VolumeX size={12} /> : <Volume2 size={12} />}
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => handleVolumeChange(Number(e.target.value))}
          className="w-24"
        />
      </div>
    </div>
  );
}
