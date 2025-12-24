import { useState } from 'react';
import './ShareButtons.css';

const ShareButtons = () => {
    const [showCopied, setShowCopied] = useState(false);

    const shareUrl = window.location.href;
    const shareText = "🎄 Merry Christmas! Check out this beautiful Christmas greeting! 🎅";

    const shareWhatsApp = () => {
        const url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        window.open(url, '_blank');
    };

    const copyLink = () => {
        navigator.clipboard.writeText(shareUrl).then(() => {
            setShowCopied(true);
            setTimeout(() => setShowCopied(false), 2000);
        });
    };

    return (
        <div className="share-buttons">
            <button
                className="share-button whatsapp"
                onClick={shareWhatsApp}
                title="Share on WhatsApp"
            >
                <span className="icon">💬</span>
                <span className="label">Share</span>
            </button>

            <button
                className="share-button copy-link"
                onClick={copyLink}
                title="Copy Link"
            >
                <span className="icon">🔗</span>
                <span className="label">Copy</span>
            </button>

            {showCopied && (
                <div className="copied-toast">
                    ✅ Link copied!
                </div>
            )}
        </div>
    );
};

export default ShareButtons;
