

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-12 py-6 text-sm text-white/60">
      <div className="max-w-[1100px] mx-auto px-4 flex items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} Adarsh Liju Abraham • Built with React + Vite</div>
        <div className="flex gap-3">
          <a href="#privacy" className="hover:text-white">Privacy</a>
          <a href="#terms" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  )
}
