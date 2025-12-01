// (no runtime import needed - using JSX transform)

export default function Header() {
  return (
    <header className="sticky top-0 bg-black/40 backdrop-blur-sm border-b border-white/5 py-3 z-20">
      <div className="max-w-[1100px] mx-auto px-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-md overflow-hidden" aria-hidden>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#646cff" />
              <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">AL</text>
            </svg>
          </div>
          <div>
            <div className="font-semibold text-sm">Adarsh Liju Abraham</div>
            <div className="text-xs text-white/60">Frontend Engineer</div>
          </div>
        </div>

        <nav aria-label="Main navigation" className="flex gap-3 items-center">
          <a className="text-sm font-medium text-white/70 hover:text-white px-2 py-1 rounded" href="#home">Home</a>
          <a className="text-sm font-medium text-white/70 hover:text-white px-2 py-1 rounded" href="#projects">Projects</a>
          <a className="text-sm font-medium text-white/70 hover:text-white px-2 py-1 rounded" href="#about">About</a>
          <a className="text-sm font-medium text-white/70 hover:text-white px-2 py-1 rounded" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
