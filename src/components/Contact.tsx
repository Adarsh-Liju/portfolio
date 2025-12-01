export default function Contact() {
  return (
    <section id="contact" className="container">
      <h2>Contact</h2>
      <p>If you'd like to work together or want to say hi, send me a message — I respond quickly.</p>

      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-label">Email</div>
          <a href="mailto:adarsh.liju.abraham@gmail.com" className="contact-link">
            adarsh.liju.abraham@gmail.com
          </a>
        </div>
        <div className="contact-card">
          <div className="contact-label">Phone</div>
          <a href="tel:+918088229177" className="contact-link">
            +91 8088229177
          </a>
        </div>
      </div>
    </section>
  )
}
