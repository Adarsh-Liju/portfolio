import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 bg-card/80 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-foreground text-background flex items-center justify-center font-semibold text-sm" aria-hidden>
            AL
          </div>
          <div>
            <div className="font-medium text-sm">Adarsh Liju Abraham</div>
            <div className="text-xs text-muted-foreground">System Engineer</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <nav aria-label="Main navigation" className="hidden md:flex gap-1 items-center">
            <a className="text-sm px-3 py-2 rounded-md hover:bg-accent transition-colors" href="#home">Home</a>
            <a className="text-sm px-3 py-2 rounded-md hover:bg-accent transition-colors" href="#projects">Projects</a>
            <a className="text-sm px-3 py-2 rounded-md hover:bg-accent transition-colors" href="#about">About</a>
            <a className="text-sm px-3 py-2 rounded-md hover:bg-accent transition-colors" href="#contact">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
