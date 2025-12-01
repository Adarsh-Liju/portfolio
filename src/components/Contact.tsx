export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6">
      <h2>Contact</h2>
      <p className="mb-8 max-w-2xl">If you'd like to work together or want to say hi, send me a message — I respond quickly.</p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="border border-border rounded-xl bg-card p-6 hover-lift">
          <div className="font-semibold mb-3">Email</div>
          <a href="mailto:adarsh.liju.abraham@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
            adarsh.liju.abraham@gmail.com
          </a>
        </div>
        <div className="border border-border rounded-xl bg-card p-6 hover-lift">
          <div className="font-semibold mb-3">Phone</div>
          <a href="tel:+918088229177" className="text-muted-foreground hover:text-foreground transition-colors">
            +91 8088229177
          </a>
        </div>
      </div>
    </section>
  )
}
