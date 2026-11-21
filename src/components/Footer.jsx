import { navLinks } from '../data'

const socials = [
  { href: 'https://github.com/hasibulhimu49', icon: 'fab fa-github', label: 'GitHub' },
  { href: 'https://linkedin.com/in/hasibulhimu49', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
  { href: 'https://twitter.com/hasibulhimu49', icon: 'fab fa-twitter', label: 'Twitter' },
  { href: 'https://wa.me/8801705064149', icon: 'fab fa-whatsapp', label: 'WhatsApp' },
]

const services = [
  { icon: 'fa-laptop-code', label: 'Web Development' },
  { icon: 'fa-mobile-alt', label: 'Responsive Design' },
  { icon: 'fa-database', label: 'Backend Development' },
  { icon: 'fa-cloud', label: 'Cloud Solutions' },
  { icon: 'fa-chart-line', label: 'Performance Optimization' },
]

export default function Footer() {
  return (
    <footer>
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="var(--primary-dark)"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo-wrapper">
              <div className="footer-logo-icon">
                <i className="fas fa-code"></i>
              </div>
              <h2 className="footer-logo">_hasib</h2>
            </div>
            <p className="footer-tagline">Crafting code and building digital experiences that matter.</p>
            <div className="footer-social-modern">
              {socials.map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="social-icon">
                  <i className={icon}></i>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">
              <i className="fas fa-compass"></i>
              Quick Links
            </h3>
            <ul className="footer-links">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href}>
                    <i className="fas fa-chevron-right"></i> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">
              <i className="fas fa-cogs"></i>
              What I Do
            </h3>
            <ul className="footer-links">
              {services.map(({ icon, label }) => (
                <li key={label}>
                  <i className={`fas ${icon}`}></i> {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">
              <i className="fas fa-address-card"></i>
              Get In Touch
            </h3>
            <div className="footer-contact-info">
              <div className="contact-info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <span>Email</span>
                  <a href="mailto:hasibulx26@gmail.com">hasibulx26@gmail.com</a>
                </div>
              </div>
              <div className="contact-info-item">
                <i className="fas fa-phone-alt"></i>
                <div>
                  <span>Phone</span>
                  <a href="tel:+8801705064149">+880 1705-064149</a>
                </div>
              </div>
              <div className="contact-info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <span>Location</span>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-newsletter">
          <div className="newsletter-container">
            <div className="newsletter-content">
              <i className="fas fa-paper-plane"></i>
              <div className="newsletter-text">
                <h4>Stay Updated</h4>
                <p>Get notified about my latest projects and updates</p>
              </div>
            </div>
            <form
              className="newsletter-form"
              id="newsletterForm"
              onSubmit={(e) => {
                e.preventDefault()
                e.currentTarget.reset()
              }}
            >
              <div className="newsletter-input-group">
                <input type="email" placeholder="hasibulx26@gmail.com" required />
                <button type="submit">
                  <span>Subscribe</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
            <i className="far fa-copyright"></i> 2024 Mohammad Hasibul Hasan. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#">Terms of Service</a>
            <span className="separator">|</span>
            <a href="#">Sitemap</a>
          </div>
          <div className="back-to-top">
            <a href="#home" className="scroll-top">
              <i className="fas fa-arrow-up"></i>
              <span>Top</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
