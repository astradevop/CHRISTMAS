import { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        // Check if audio file exists
        const audio = audioRef.current;
        if (audio) {
            audio.addEventListener('loadeddata', () => {
                setIsLoaded(true);
                setError(false);
            });
            audio.addEventListener('error', () => {
                setError(true);
                setIsLoaded(false);
            });
        }
    }, []);

    const toggleMusic = () => {
        if (audioRef.current && isLoaded) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play()
                    .then(() => setIsPlaying(true))
                    .catch((err) => {
                        console.error('Audio play failed:', err);
                        setError(true);
                    });
            }
        }
    };

    return (
        <div className="music-player">
            <button
                className={`music-button ${isPlaying ? 'playing' : ''} ${error ? 'error' : ''}`}
                onClick={toggleMusic}
                title={
                    error
                        ? 'Music file not found'
                        : isPlaying
                            ? 'Pause Christmas Music 🎵'
                            : 'Play Christmas Music 🎵'
                }
                disabled={error}
            >
                {error ? '❌' : isPlaying ? '🔊' : '🔇'}
            </button>

            {/* Christmas music audio */}
            <audio
                ref={audioRef}
                loop
                preload="auto"
            >
                <source src="/christmas-music.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            {/* Helpful tooltip */}
            {!isLoaded && !error && (
                <div className="music-tooltip">
                    Add christmas-music.mp3 to public folder
                </div>
            )}
        </div>
    );
};

export default MusicPlayer;
