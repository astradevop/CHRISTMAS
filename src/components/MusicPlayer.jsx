import { useRef, useEffect } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        // Auto-play music when component mounts
        const audio = audioRef.current;
        if (audio) {
            // Attempt to play with user interaction workaround
            const playMusic = () => {
                audio.play().catch((err) => {
                    console.log('Auto-play prevented, will play on first user interaction:', err);
                    // Add event listener for first user interaction
                    document.addEventListener('click', () => {
                        audio.play().catch(e => console.log('Play failed:', e));
                    }, { once: true });
                });
            };

            // Small delay to ensure page is loaded
            setTimeout(playMusic, 500);
        }
    }, []);

    return (
        <audio
            ref={audioRef}
            loop
            preload="auto"
        >
            <source src="/christmas-music.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    );
};

export default MusicPlayer;
