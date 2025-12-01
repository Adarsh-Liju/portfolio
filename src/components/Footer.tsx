export default function Footer() {
  return (
    <footer className="border-t border-border mt-12 py-8">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Adarsh Liju Abraham • Built with React + Vite</div>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#terms" className="hover:text-foreground transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  )
}
