import './MessageCard.css';

const MessageCard = () => {
    return (
        <div className="message-card">
            <div className="card-glow"></div>

            <div className="card-header">
                <h2 className="card-title">Dear Uncle,</h2>
                <div className="decorative-line">
                    <span className="line-ornament">❄️</span>
                    <span className="line"></span>
                    <span className="line-ornament">❄️</span>
                </div>
            </div>

            <div className="card-content">
                <p className="message-text">
                    As we celebrate this magical season, we want to take a moment to wish you and your family a truly{' '}
                    <span className="highlight-text">Merry Christmas</span> and a{' '}
                    <span className="highlight-text">Happy New Year</span>!
                </p>

                <p className="message-text">
                    May this festive season bring you <span className="highlight-text">joy, peace, and prosperity</span>.
                    May the coming year be filled with new opportunities, success in all your endeavors at{' '}
                    <span className="company-highlight">Infra Elevators India Pvt Limited</span>,
                    and countless moments of happiness with your loved ones.
                </p>

                <p className="message-text">
                    Wishing you a season filled with warm moments, cherished memories, and the
                    magic of Christmas that lasts throughout the year!
                </p>

                <div className="blessing-section">
                    <div className="blessing-icon">🎄</div>
                    <p className="blessing-text">
                        May your days be merry and bright, and may all your Christmases be filled with love and light!
                    </p>
                    <div className="blessing-icon">🎄</div>
                </div>
            </div>

            <div className="card-footer">
                <p className="signature">With warmest wishes,</p>
                <p className="signature-love">Love & Blessings ❤️</p>
            </div>

            {/* Decorative corner elements */}
            <div className="corner-decoration top-left"></div>
            <div className="corner-decoration top-right"></div>
            <div className="corner-decoration bottom-left"></div>
            <div className="corner-decoration bottom-right"></div>
        </div>
    );
};

export default MessageCard;
