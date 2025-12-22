import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="header-left">
          <div className="logo" aria-hidden>AL</div>
          <div>
            <div className="header-name">Adarsh Liju Abraham</div>
            <div className="header-title">System Engineer</div>
          </div>
        </div>

        <div className="header-right">
          <nav aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
