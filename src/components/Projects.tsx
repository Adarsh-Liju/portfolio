// (no runtime import needed - using JSX transform)
import { Card } from './ui/card'
import Button from './ui/button'

const projects = [
  {
    title: 'Portfolio Site',
    description: 'This portfolio (built with Vite + React + TypeScript) — a lightweight, fast and accessible personal site.',
    repo: 'https://github.com/adarsh',
    live: '#'
  },
  {
    title: 'Project Two',
    description: 'A component-driven UI library with automated tests and story-driven documentation.',
    repo: 'https://github.com/',
    live: '#'
  },
  {
    title: 'PWA Example',
    description: 'An offline-first progressive web app that demonstrates caching, service workers and fast startup times.',
    repo: 'https://github.com/',
    live: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-[1100px] mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold">Selected projects</h2>

      <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="rounded-xl overflow-hidden border border-white/5 bg-gradient-to-b from-white/2 to-transparent flex flex-col">
            <div className="h-28 bg-gradient-to-tr from-indigo-400 via-fuchsia-400 to-sky-400" />
            <Card className="p-4 flex flex-col gap-3 flex-1">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-white/80">{p.description}</p>
              <div className="mt-auto flex gap-2">
                <Button size="sm" href={p.repo} target="_blank" rel="noreferrer">Repo</Button>
                <Button size="sm" variant="primary" href={p.live} target="_blank" rel="noreferrer">Live</Button>
              </div>
            </Card>
          </article>
        ))}
      </div>
    </section>
  )
}
