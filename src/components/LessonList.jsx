import { PlayCircle } from 'lucide-react'

const lessons = [
  {
    id: 1,
    title: 'Pengenalan Huruf Hijaiyah',
    desc: 'Makhraj, sifat huruf, dan cara dasar pengucapan.',
    level: 'Pemula',
    duration: '12 menit',
  },
  {
    id: 2,
    title: 'Tajwid Dasar: Idgham & Iqlab',
    desc: 'Memahami aturan bertemu nun sukun/tanwin dan mim sukun.',
    level: 'Dasar',
    duration: '15 menit',
  },
  {
    id: 3,
    title: 'Mad: Hukum Panjang Pendek',
    desc: 'Bedakan mad thabi’i, mad wajib, dan praktik pembacaan.',
    level: 'Menengah',
    duration: '10 menit',
  },
  {
    id: 4,
    title: 'Praktik Surah Pendek',
    desc: 'Latihan tartil pada surat-surat pendek pilihan.',
    level: 'Latihan',
    duration: '18 menit',
  },
]

export default function LessonList() {
  return (
    <section id="lessons" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Materi Inti</h2>
            <p className="mt-1 text-gray-600">Belajar bertahap dari pengenalan huruf sampai praktik.</p>
          </div>
          <a href="#daftar" className="hidden rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700 md:block">Ikuti Kelas</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {lessons.map((l) => (
            <article key={l.id} className="group rounded-xl border border-emerald-100 bg-gradient-to-b from-emerald-50 to-white p-5 shadow-sm transition hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-emerald-600/10 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">{l.level}</span>
                <span className="text-xs text-gray-500">{l.duration}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">{l.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{l.desc}</p>
              <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200 transition group-hover:bg-emerald-600 group-hover:text-white group-hover:ring-emerald-600">
                <PlayCircle className="h-4 w-4" />
                Putar contoh
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
