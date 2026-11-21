export default function Contact() {
  return (
    <section id="contact">
      <div className="section-header">
        <h2>Get In Touch</h2>
        <p>Let&apos;s collaborate on your next project. I&apos;m just a message away!</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:hasibulx26@gmail.com">hasibulx26@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+8801705064149">+880 1705-064149</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h4>Location</h4>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="contact-social">
              <h4>Connect With Me</h4>
              <div className="social-links">
                <a href="https://github.com/hasibulhimu49" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                <a href="https://linkedin.com/in/hasibulhimu49" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://twitter.com/hasibulhimu49" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://medium.com/@hasibulhimu49" target="_blank" rel="noreferrer"><i className="fa-brands fa-medium"></i></a>
                <a href="https://wa.me/01705064149" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form
            id="contactForm"
            action="https://formsubmit.co/mohammadhasibulhasanpga4149@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <input type="text" id="subject" name="subject" placeholder="Subject" />
            </div>

            <div className="form-group">
              <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
