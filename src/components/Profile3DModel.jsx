import { useState } from 'react';
import './Profile3DModel.css';

function Profile3DModel() {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const element = e.currentTarget;
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 20;
        const rotateX = ((centerY - y) / centerY) * 20;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div className="profile-3d-model-wrapper">
            <div
                className="profile-3d-model"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                }}
            >
                <div className="model-glow"></div>
                <img
                    src="/madhu image.png"
                    alt="Madhu MR"
                    className="model-image"
                />
                <div className="model-shine"></div>
            </div>
        </div>
    );
}

export default Profile3DModel;
