
export default function Contact() {
  return (
    <section id="contact" className="max-w-[1100px] mx-auto px-4 py-12">
      <h2>Contact</h2>
      <p>If you'd like to work together or want to say hi, send me a message — I respond quickly.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="bg-white/2 border border-white/5 p-4 rounded-lg">
          <strong>Email</strong>
          <a href="mailto:adarsh.liju@example.com">adarsh.liju@example.com</a>
        </div>
        <div className="bg-white/2 border border-white/5 p-4 rounded-lg">
          <strong>Social</strong>
          <div className="mt-3 flex gap-3 text-sm text-white/70">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>

    </section>
  )
}
