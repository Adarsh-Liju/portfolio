export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div>© {new Date().getFullYear()} Adarsh Liju Abraham • Built with React + Vite</div>
        <div className="footer-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  )
}
