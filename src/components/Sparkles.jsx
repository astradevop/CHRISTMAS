import { useEffect, useState } from 'react';
import './Sparkles.css';

const Sparkles = () => {
    const [sparkles, setSparkles] = useState([]);

    useEffect(() => {
        const createSparkles = () => {
            const newSparkles = Array.from({ length: 15 }, (_, i) => ({
                id: Date.now() + i,
                left: 20 + Math.random() * 60,
                top: 20 + Math.random() * 60,
                size: 2 + Math.random() * 4,
                animationDelay: Math.random() * 3,
                animationDuration: 2 + Math.random() * 2,
            }));
            setSparkles(newSparkles);
        };

        createSparkles();
        const interval = setInterval(createSparkles, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="sparkles-container">
            {sparkles.map((sparkle) => (
                <div
                    key={sparkle.id}
                    className="sparkle"
                    style={{
                        left: `${sparkle.left}%`,
                        top: `${sparkle.top}%`,
                        width: `${sparkle.size}px`,
                        height: `${sparkle.size}px`,
                        animationDelay: `${sparkle.animationDelay}s`,
                        animationDuration: `${sparkle.animationDuration}s`,
                    }}
                >
                    ✨
                </div>
            ))}
        </div>
    );
};

export default Sparkles;
