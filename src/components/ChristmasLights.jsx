import './ChristmasLights.css';

const ChristmasLights = () => {
    const lights = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        color: ['red', 'green', 'blue', 'yellow', 'pink'][i % 5],
        delay: i * 0.1,
    }));

    return (
        <div className="christmas-lights-container">
            <div className="lights-string">
                {lights.map((light) => (
                    <div
                        key={light.id}
                        className={`christmas-light ${light.color}`}
                        style={{ animationDelay: `${light.delay}s` }}
                    >
                        <div className="bulb"></div>
                        <div className="glow"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChristmasLights;
