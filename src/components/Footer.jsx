import { RESORT_INFO, FOOTER_LINKS } from '../data/content';
import './Footer.css';

const SOCIAL_ICONS = {
  Instagram: '📷',
  Facebook: '📘',
  YouTube: '▶️',
  Twitter: '🐦',
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">श्री</div>
              <div className="footer-logo-text">Baidyanath <span>Palace</span></div>
            </div>
            <p>
              A legacy of luxury hospitality, crafting unforgettable celebrations and timeless memories in an extraordinary destination.
            </p>
            <div className="footer-socials">
              {FOOTER_LINKS.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="footer-social"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                >
                  {SOCIAL_ICONS[social.platform] || '🔗'}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <div className="footer-links">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector(`#${link.toLowerCase()}`);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <div className="footer-links">
              {FOOTER_LINKS.services.map((service) => (
                <a key={service} href="#services" className="footer-link">
                  {service}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <div className="footer-links">
              <a href={`tel:${RESORT_INFO.phone}`} className="footer-link">
                📞 {RESORT_INFO.phone}
              </a>
              <a href={`mailto:${RESORT_INFO.email}`} className="footer-link">
                ✉️ {RESORT_INFO.email}
              </a>
              <span className="footer-link" style={{ cursor: 'default' }}>
                📍 Baharagora, Jharkhand
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-developer">
            Designed &amp; Developed by{' '}
            <a
              href="https://abhijeetweb.in"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-developer-link"
            >
              Abhijeet Ghosh
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
