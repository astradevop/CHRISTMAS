import { useState } from 'react';
import './RingingBells.css';

const RingingBells = () => {
    const [ringing, setRinging] = useState([false, false, false]);

    const ringBell = (index) => {
        const newRinging = [...ringing];
        newRinging[index] = true;
        setRinging(newRinging);

        // Play bell sound effect (visual only for now)
        setTimeout(() => {
            newRinging[index] = false;
            setRinging([...newRinging]);
        }, 1000);
    };

    return (
        <div className="bells-container">
            {[0, 1, 2].map((index) => (
                <div
                    key={index}
                    className={`bell ${ringing[index] ? 'ringing' : ''}`}
                    onClick={() => ringBell(index)}
                    title="Click to ring the bell!"
                >
                    🔔
                </div>
            ))}
        </div>
    );
};

export default RingingBells;
