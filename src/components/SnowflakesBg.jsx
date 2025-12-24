import { useEffect, useState } from 'react';
import './SnowflakesBg.css';

const SnowflakesBg = () => {
    const [snowflakes, setSnowflakes] = useState([]);

    useEffect(() => {
        // Create 30 pink snowflakes
        const flakes = Array.from({ length: 30 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            animationDelay: Math.random() * 8,
            animationDuration: 15 + Math.random() * 10,
            size: 8 + Math.random() * 12,
            opacity: 0.15 + Math.random() * 0.25,
        }));
        setSnowflakes(flakes);
    }, []);

    return (
        <div className="snowflakes-bg">
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className="bg-snowflake"
                    style={{
                        left: `${flake.left}%`,
                        animationDelay: `${flake.animationDelay}s`,
                        animationDuration: `${flake.animationDuration}s`,
                        fontSize: `${flake.size}px`,
                        opacity: flake.opacity,
                    }}
                >
                    ❄
                </div>
            ))}
        </div>
    );
};

export default SnowflakesBg;
