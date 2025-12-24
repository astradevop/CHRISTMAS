import { useState, useEffect } from 'react'
import './App.css'
import SnowflakesBg from './components/SnowflakesBg'
import Confetti from './components/Confetti'
import Sparkles from './components/Sparkles'
import MusicPlayer from './components/MusicPlayer'

function App() {
  const [loaded, setLoaded] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
    setTimeout(() => setShowConfetti(true), 1500);
    setTimeout(() => setShowConfetti(false), 6000);
  }, []);

  return (
    <div className={`app ${loaded ? 'loaded' : ''}`}>
      <SnowflakesBg />
      {showConfetti && <Confetti />}
      <Sparkles />
      <MusicPlayer />

      <div className="container">
        {/* Decorative Stars */}
        <div className="floating-stars">
          <span className="star star-1">⭐</span>
          <span className="star star-2">✨</span>
          <span className="star star-3">⭐</span>
          <span className="star star-4">✨</span>
        </div>

        {/* Header */}
        <header className="header">
          <div className="snowflake-deco left">❄</div>
          <h1 className="seasons-greeting">SEASON'S GREETINGS</h1>
          <div className="snowflake-deco right">❄</div>
        </header>

        {/* Main Card */}
        <div className="main-card">
          <div className="card-glow-effect"></div>
          <div className="card-inner">
            {/* Company Logo Section */}
            <div className="company-section">
              <h2 className="company-name">
                <span className="infra">INFRA</span>
                <span className="elevators">ELEVATORS</span>
              </h2>
              <div className="company-tagline">INDIA PVT LIMITED</div>
            </div>

            {/* Christmas Ornaments */}
            <div className="ornaments-section">
              <div className="ornament ornament-1" title="Click me!">
                <div className="ornament-string"></div>
                <div className="ornament-cap"></div>
                <div className="ornament-ball stripes">
                  <div className="ornament-shine"></div>
                </div>
              </div>
              <div className="ornament ornament-2" title="Click me!">
                <div className="ornament-string"></div>
                <div className="ornament-cap"></div>
                <div className="ornament-ball pattern">
                  <div className="ornament-shine"></div>
                </div>
              </div>
              <div className="ornament ornament-3" title="Click me!">
                <div className="ornament-string"></div>
                <div className="ornament-cap"></div>
                <div className="ornament-ball stripes">
                  <div className="ornament-shine"></div>
                </div>
              </div>
            </div>

            {/* Snow ground effect */}
            <div className="snow-ground"></div>
          </div>
        </div>

        {/* Christmas Greeting */}
        <div className="greeting-section">
          <h2 className="merry">Merry</h2>
          <h2 className="christmas">Christmas</h2>

          <div className="star-divider">
            <span className="line"></span>
            <span className="star rotating-star">★</span>
            <span className="line"></span>
          </div>

          <h3 className="happy-new-year">& HAPPY NEW YEAR</h3>

          <p className="message">
            May your holidays sparkle with joy and laughter! Sending you and your family lots of love this festive season.
          </p>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p className="with-love">WITH LOVE</p>
          <h3 className="sender-name">Madhu MR</h3>
          <a href="tel:+919746472014" className="phone" title="Call now">
            <span className="phone-icon pulse">📱</span> +91 9746472014
          </a>

          <div className="snowflake-deco bottom">❄</div>
        </footer>

        {/* Decorative Bottom Border */}
        <div className="decorative-border">
          <span className="border-ornament">🎄</span>
          <span className="border-line"></span>
          <span className="border-ornament">🎁</span>
          <span className="border-line"></span>
          <span className="border-ornament">🎄</span>
        </div>
      </div>
    </div>
  )
}

export default App
