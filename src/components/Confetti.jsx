import { useEffect, useState } from 'react';
import './Confetti.css';

const Confetti = () => {
    const [pieces, setPieces] = useState([]);

    useEffect(() => {
        const colors = ['#f48ba8', '#c41e3a', '#d4af37', '#fce4ec', '#ffffff'];
        const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            animationDelay: Math.random() * 0.5,
            animationDuration: 3 + Math.random() * 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
        }));
        setPieces(confettiPieces);
    }, []);

    return (
        <div className="confetti-container">
            {pieces.map((piece) => (
                <div
                    key={piece.id}
                    className="confetti-piece"
                    style={{
                        left: `${piece.left}%`,
                        animationDelay: `${piece.animationDelay}s`,
                        animationDuration: `${piece.animationDuration}s`,
                        backgroundColor: piece.color,
                        transform: `rotate(${piece.rotation}deg)`,
                    }}
                />
            ))}
        </div>
    );
};

export default Confetti;
