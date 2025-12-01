import Button from './ui/button'

export default function Hero() {
  return (
    <section id="home" className="max-w-4xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="flex-1">
          <h1 className="mb-6">Hi, I'm Adarsh</h1>
          <p className="mb-4 text-lg text-muted-foreground max-w-2xl">
            System Engineer & Backend Developer building scalable, high-performance solutions.
          </p>
          <p className="mb-8 text-muted-foreground max-w-2xl">
            Currently at Twospoon Technologies, I architect microservices, design Flask/Django systems, 
            and automate infrastructure—handling 100K+ daily requests with 99.9% uptime.
          </p>

          <div className="flex items-center gap-4 mb-8">
            <Button variant="primary" href="#projects">View my work</Button>
            <Button variant="outline" href="#contact">Get in touch</Button>
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          </div>
        </div>

        <div className="w-full md:w-auto flex justify-center" aria-hidden>
          <div className="rounded-xl border border-border bg-card p-8 w-64">
            <div className="mx-auto h-32 w-32 rounded-full bg-muted flex items-center justify-center mb-6">
              <span className="text-4xl font-semibold">AL</span>
            </div>
            <div className="text-center">
              <div className="font-semibold mb-1">Adarsh Liju Abraham</div>
              <div className="text-sm text-muted-foreground">System Engineer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
