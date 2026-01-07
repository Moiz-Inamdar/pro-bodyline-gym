const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
<br />
      <div className="contact-info">
        <div className="contact-card">
          <span>📍</span>
          <p>Heera Plaza, Vijayapura, Karnataka</p>
        </div>
        <div className="contact-card">
          <span>📞</span>
          <p>+91 87927 74714</p>
        </div>
        <div className="contact-card">
          <span>✉️</span>
          <p>probodylinegym@gmail.com</p>
        </div>
      </div>

      {/* <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="hero-btn">Send Message</button>
      </form> */}
    </section>
  );
};

export default Contact;
