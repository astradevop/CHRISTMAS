import { useEffect, useState } from 'react';
import './SnowEffect.css';

const SnowEffect = () => {
    const [snowflakes, setSnowflakes] = useState([]);

    useEffect(() => {
        const flakes = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            animationDelay: Math.random() * 5,
            animationDuration: 10 + Math.random() * 10,
            size: 4 + Math.random() * 6,
            opacity: 0.3 + Math.random() * 0.7,
        }));
        setSnowflakes(flakes);
    }, []);

    return (
        <div className="snow-container">
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className="snowflake"
                    style={{
                        left: `${flake.left}%`,
                        animationDelay: `${flake.animationDelay}s`,
                        animationDuration: `${flake.animationDuration}s`,
                        width: `${flake.size}px`,
                        height: `${flake.size}px`,
                        opacity: flake.opacity,
                    }}
                >
                    ❄
                </div>
            ))}
        </div>
    );
};

export default SnowEffect;
