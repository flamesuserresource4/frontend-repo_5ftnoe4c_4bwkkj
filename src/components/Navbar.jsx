import { BookOpen, Home, Info, Layers } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="inline-flex items-center gap-2 text-lg font-bold text-emerald-700">
          <BookOpen className="h-5 w-5" /> MudahBelajarIslam
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
          <a href="#" className="inline-flex items-center gap-2 hover:text-emerald-700"><Home className="h-4 w-4" /> Beranda</a>
          <a href="#lessons" className="inline-flex items-center gap-2 hover:text-emerald-700"><Layers className="h-4 w-4" /> Materi</a>
          <a href="#daftar" className="inline-flex items-center gap-2 hover:text-emerald-700"><Info className="h-4 w-4" /> Daftar</a>
        </nav>
        <a href="#daftar" className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700">Gabung Kelas</a>
      </div>
    </header>
  )
}
