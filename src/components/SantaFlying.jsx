import { useState, useEffect } from 'react';
import './SantaFlying.css';

const SantaFlying = () => {
    const [isFlying, setIsFlying] = useState(false);

    useEffect(() => {
        // Santa flies across every 30 seconds
        const flyInterval = setInterval(() => {
            setIsFlying(true);
            setTimeout(() => setIsFlying(false), 8000); // Animation duration
        }, 30000);

        // Initial flight after 10 seconds
        setTimeout(() => {
            setIsFlying(true);
            setTimeout(() => setIsFlying(false), 8000);
        }, 10000);

        return () => clearInterval(flyInterval);
    }, []);

    return (
        <>
            {isFlying && (
                <div className="santa-container">
                    <div className="santa-sleigh">
                        <span className="santa">🎅</span>
                        <span className="sleigh">🛷</span>
                    </div>
                </div>
            )}
        </>
    );
};

export default SantaFlying;
