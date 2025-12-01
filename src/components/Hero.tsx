// (no runtime import needed - using JSX transform)
import Button from './ui/button'

export default function Hero() {
  return (
    <section id="home" className="max-w-[1100px] mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 text-left md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Hi, I’m Adarsh — I build fast, accessible interfaces.</h1>
        <p className="text-white/80 mt-3 max-w-prose">I’m a Frontend Engineer focused on building polished user experiences with React, TypeScript and modern tooling.</p>

        <div className="flex items-center gap-3 mt-5">
          <Button variant="primary" href="#projects">View my work</Button>
          <Button className="" href="#contact">Contact me</Button>
        </div>

        <div className="flex gap-4 mt-5 text-sm text-white/70">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
        </div>
      </div>

      <div className="w-full md:w-64 flex justify-center md:justify-end" aria-hidden>
        <div className="rounded-xl border border-white/5 bg-gradient-to-b from-white/3 via-transparent to-transparent p-4 w-56 text-center">
          <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-tr from-indigo-400 to-sky-400 shadow-lg" />
          <div className="mt-3">
            <strong className="block">Adarsh Liju Abraham</strong>
            <span className="text-sm text-white/70">Frontend Engineer</span>
          </div>
        </div>
      </div>
    </section>
  )
}
