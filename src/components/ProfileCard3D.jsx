import { useState } from 'react';
import './ProfileCard3D.css';

function ProfileCard3D() {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isFlipped, setIsFlipped] = useState(false);

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 15;
        const rotateX = ((centerY - y) / centerY) * 15;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="profile-card-3d-wrapper">
            <div
                className={`profile-card-3d ${isFlipped ? 'flipped' : ''}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                style={{
                    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                }}
            >
                {/* Front Face */}
                <div className="profile-card-face profile-card-front">
                    <div className="profile-glow-ring"></div>
                    <div className="profile-image-container">
                        <img
                            src="/madhu image.png"
                            alt="Madhu MR"
                            className="profile-image"
                        />
                        <div className="profile-shine"></div>
                    </div>
                    <div className="profile-name-badge">
                        <h4>Madhu MR</h4>
                    </div>
                    <div className="click-hint">✨ Click to flip ✨</div>
                </div>

                {/* Back Face */}
                <div className="profile-card-face profile-card-back">
                    <div className="profile-back-content">
                        <div className="greeting-badge">🎄</div>
                        <h3 className="back-title">Season's Wishes</h3>
                        <p className="back-message">
                            May your Christmas be filled with warmth,
                            joy, and cherished moments!
                        </p>
                        <div className="decorative-stars">
                            <span>⭐</span>
                            <span>✨</span>
                            <span>⭐</span>
                        </div>
                    </div>
                </div>

                {/* Floating particles around the card */}
                <div className="card-particles">
                    <span className="particle particle-1">✨</span>
                    <span className="particle particle-2">⭐</span>
                    <span className="particle particle-3">❄️</span>
                    <span className="particle particle-4">✨</span>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard3D;
