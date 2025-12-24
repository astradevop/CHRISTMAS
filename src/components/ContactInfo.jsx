import './ContactInfo.css';

const ContactInfo = () => {
    return (
        <div className="contact-info">
            <div className="contact-card">
                <div className="icon-wrapper">
                    <div className="icon">👤</div>
                </div>
                <h3 className="contact-label">Name</h3>
                <p className="contact-value">Madhu MR</p>
            </div>

            <div className="contact-card">
                <div className="icon-wrapper">
                    <div className="icon">📞</div>
                </div>
                <h3 className="contact-label">Contact</h3>
                <a href="tel:9746472014" className="contact-value phone-link">
                    9746472014
                </a>
            </div>

            <div className="contact-card full-width">
                <div className="icon-wrapper">
                    <div className="icon">🏢</div>
                </div>
                <h3 className="contact-label">Company</h3>
                <p className="contact-value company-name">
                    Infra Elevators India Pvt Limited
                </p>
            </div>
        </div>
    );
};

export default ContactInfo;
