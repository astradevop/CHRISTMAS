import { useState, useEffect } from 'react';
import './ChristmasTree.css';

const ChristmasTree = () => {
    const [lightsOn, setLightsOn] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setLightsOn(prev => !prev);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="christmas-tree">
            {/* Star on top */}
            <div className="tree-star">
                <svg viewBox="0 0 100 100" className="star-svg">
                    <polygon
                        points="50,10 61,35 88,35 66,52 75,77 50,60 25,77 34,52 12,35 39,35"
                        fill="url(#starGradient)"
                    />
                    <defs>
                        <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FFD700" />
                            <stop offset="100%" stopColor="#FFA500" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Tree layers */}
            <div className="tree-layers">
                {/* Layer 1 - Top */}
                <div className="tree-layer layer-1">
                    <div className="layer-content">
                        <div className={`tree-light light-red ${lightsOn ? 'on' : 'off'}`} style={{ left: '20%' }}></div>
                        <div className={`tree-light light-gold ${lightsOn ? 'off' : 'on'}`} style={{ left: '80%' }}></div>
                    </div>
                </div>

                {/* Layer 2 */}
                <div className="tree-layer layer-2">
                    <div className="layer-content">
                        <div className={`tree-light light-gold ${lightsOn ? 'on' : 'off'}`} style={{ left: '15%' }}></div>
                        <div className={`tree-light light-red ${lightsOn ? 'off' : 'on'}`} style={{ left: '50%' }}></div>
                        <div className={`tree-light light-gold ${lightsOn ? 'on' : 'off'}`} style={{ left: '85%' }}></div>
                    </div>
                </div>

                {/* Layer 3 */}
                <div className="tree-layer layer-3">
                    <div className="layer-content">
                        <div className={`tree-light light-red ${lightsOn ? 'off' : 'on'}`} style={{ left: '10%' }}></div>
                        <div className={`tree-light light-gold ${lightsOn ? 'on' : 'off'}`} style={{ left: '35%' }}></div>
                        <div className={`tree-light light-red ${lightsOn ? 'off' : 'on'}`} style={{ left: '65%' }}></div>
                        <div className={`tree-light light-gold ${lightsOn ? 'on' : 'off'}`} style={{ left: '90%' }}></div>
                    </div>
                </div>

                {/* Layer 4 */}
                <div className="tree-layer layer-4">
                    <div className="layer-content">
                        <div className={`tree-light light-gold ${lightsOn ? 'off' : 'on'}`} style={{ left: '8%' }}></div>
                        <div className={`tree-light light-red ${lightsOn ? 'on' : 'off'}`} style={{ left: '25%' }}></div>
                        <div className={`tree-light light-gold ${lightsOn ? 'off' : 'on'}`} style={{ left: '50%' }}></div>
                        <div className={`tree-light light-red ${lightsOn ? 'on' : 'off'}`} style={{ left: '75%' }}></div>
                        <div className={`tree-light light-gold ${lightsOn ? 'off' : 'on'}`} style={{ left: '92%' }}></div>
                    </div>
                </div>

                {/* Layer 5 - Bottom */}
                <div className="tree-layer layer-5">
                    <div className="layer-content">
                        <div className={`tree-light light-red ${lightsOn ? 'on' : 'off'}`} style={{ left: '5%' }}></div>
                        <div className={`tree-light light-gold ${lightsOn ? 'off' : 'on'}`} style={{ left: '20%' }}></div>
                        <div className={`tree-light light-red ${lightsOn ? 'on' : 'off'}`} style={{ left: '40%' }}></div>
                        <div className={`tree-light light-gold ${lightsOn ? 'off' : 'on'}`} style={{ left: '60%' }}></div>
                        <div className={`tree-light light-red ${lightsOn ? 'on' : 'off'}`} style={{ left: '80%' }}></div>
                        <div className={`tree-light light-gold ${lightsOn ? 'off' : 'on'}`} style={{ left: '95%' }}></div>
                    </div>
                </div>
            </div>

            {/* Tree trunk */}
            <div className="tree-trunk"></div>

            {/* Gifts under tree */}
            <div className="gifts-container">
                <div className="gift gift-1"></div>
                <div className="gift gift-2"></div>
                <div className="gift gift-3"></div>
            </div>
        </div>
    );
};

export default ChristmasTree;
