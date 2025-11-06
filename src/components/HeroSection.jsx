import { BookOpen, Star } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-emerald-700 ring-1 ring-emerald-200">
              <Star className="h-4 w-4 fill-emerald-500 text-emerald-500" />
              Program Tahsin Pemula
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              Mudah Belajar Islam: Kelas Tahsin Al-Qur'an
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Perbaiki bacaan Al-Qur'an mulai dari makhraj, sifat huruf, dan kaidah tajwid dengan materi ringkas dan latihan terarah.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#lessons" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <BookOpen className="h-5 w-5" /> Mulai Belajar
              </a>
              <a href="#daftar" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-emerald-700 ring-1 ring-emerald-200 hover:bg-emerald-50">
                Lihat Jadwal
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-700 md:max-w-md">
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" />Materi singkat & terstruktur</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" />Contoh bacaan dan latihan</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" />Cocok untuk pemula</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" />Gratis untuk mulai</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square w-full rounded-2xl bg-white p-6 shadow-xl ring-1 ring-emerald-100">
              <div className="flex h-full flex-col items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100">
                <div className="rounded-2xl bg-white/80 p-5 text-center shadow ring-1 ring-emerald-200">
                  <p className="text-sm font-medium text-emerald-700">Contoh Bacaan</p>
                  <p className="mt-1 text-2xl font-bold text-gray-900">اَلْقُرْآنُ الْكَرِيمُ</p>
                  <p className="mt-2 text-xs text-gray-600">Fokus: Qalqalah, Mad, Ghunnah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
