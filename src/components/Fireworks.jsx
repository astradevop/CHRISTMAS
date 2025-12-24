import { useState, useEffect } from 'react';
import './Fireworks.css';

const Fireworks = () => {
    const [fireworks, setFireworks] = useState([]);

    useEffect(() => {
        const createFirework = () => {
            const id = Date.now();
            const newFirework = {
                id,
                left: 20 + Math.random() * 60,
                top: 20 + Math.random() * 40,
                color: ['#ff4444', '#44ff44', '#4444ff', '#ffff44', '#ff44ff'][Math.floor(Math.random() * 5)],
            };

            setFireworks(prev => [...prev, newFirework]);

            // Remove after animation completes
            setTimeout(() => {
                setFireworks(prev => prev.filter(fw => fw.id !== id));
            }, 2000);
        };

        // Create fireworks every 20 seconds
        const interval = setInterval(createFirework, 20000);

        // Initial firework after 5 seconds
        setTimeout(createFirework, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fireworks-container">
            {fireworks.map((firework) => (
                <div
                    key={firework.id}
                    className="firework"
                    style={{
                        left: `${firework.left}%`,
                        top: `${firework.top}%`,
                    }}
                >
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div
                            key={i}
                            className="firework-particle"
                            style={{
                                backgroundColor: firework.color,
                                transform: `rotate(${i * 30}deg) translateY(-50px)`,
                            }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Fireworks;
