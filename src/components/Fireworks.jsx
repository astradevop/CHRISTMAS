import { useState, useEffect } from 'react';
import './Fireworks.css';

const Fireworks = () => {
    const [fireworks, setFireworks] = useState([]);

    useEffect(() => {
        const createFirework = () => {
            const id = Date.now() + Math.random();
            const newFirework = {
                id,
                left: 20 + Math.random() * 60,
                top: 20 + Math.random() * 40,
                color: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff', '#ffa500'][Math.floor(Math.random() * 8)],
                particles: Array.from({ length: 50 }).map((_, i) => ({
                    angle: (360 / 50) * i,
                    velocity: 0.5 + Math.random() * 1.5,
                    delay: Math.random() * 0.1,
                })),
            };

            setFireworks(prev => [...prev, newFirework]);

            // Remove after animation completes
            setTimeout(() => {
                setFireworks(prev => prev.filter(fw => fw.id !== id));
            }, 3000);
        };

        // Create fireworks every 10 seconds
        const interval = setInterval(createFirework, 10000);

        // Initial firework after 3 seconds
        setTimeout(createFirework, 3000);

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
                    {/* Center burst flash */}
                    <div className="firework-flash" style={{ backgroundColor: firework.color }}></div>

                    {/* Particles */}
                    {firework.particles.map((particle, i) => (
                        <div
                            key={i}
                            className="firework-particle"
                            style={{
                                backgroundColor: firework.color,
                                '--angle': `${particle.angle}deg`,
                                '--velocity': particle.velocity,
                                '--delay': `${particle.delay}s`,
                            }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Fireworks;
