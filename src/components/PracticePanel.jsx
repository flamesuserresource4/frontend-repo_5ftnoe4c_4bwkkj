import { useState } from 'react'
import { Mic, Volume2 } from 'lucide-react'

const samples = [
  { id: 1, label: 'Qalqalah', text: 'أَقْ - بَطْ - قَدْ - جَدْ - وَلَمْ يَلِدْ' },
  { id: 2, label: 'Ghunnah', text: 'إِنَّ - ثُمَّ - مَنْ - عَمَّا' },
  { id: 3, label: 'Mad Thabi’i', text: 'قَالَ - قِيلَ - يَقُولُ - نُوحِي' },
]

export default function PracticePanel() {
  const [current, setCurrent] = useState(samples[0])

  return (
    <section className="bg-gradient-to-br from-emerald-50 to-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Latihan Pengucapan</h2>
            <p className="mt-2 text-gray-600">Pilih contoh, dengarkan, lalu tirukan. Fokus pada makhraj dan sifat huruf.</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {samples.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setCurrent(s)}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold ring-1 transition ${
                    current.id === s.id
                      ? 'bg-emerald-600 text-white ring-emerald-600'
                      : 'bg-white text-emerald-700 ring-emerald-200 hover:bg-emerald-50'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-white p-5 ring-1 ring-emerald-100">
              <p className="text-3xl leading-relaxed text-gray-900">{current.text}</p>
              <div className="mt-4 flex gap-3">
                <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white shadow hover:bg-emerald-700">
                  <Volume2 className="h-4 w-4" /> Dengarkan
                </button>
                <button className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-semibold text-emerald-700 ring-1 ring-emerald-200 hover:bg-emerald-50">
                  <Mic className="h-4 w-4" /> Rekam (demo)
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-emerald-100">
            <h3 className="text-lg font-semibold text-gray-900">Tips Cepat</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />Artikulasi huruf keluar dari makhrajnya, jangan tergesa-gesa.</li>
              <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />Jaga ketukan (beat) bacaan agar tartil dan jelas.</li>
              <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />Ulangi bagian yang sulit 3-5 kali sebelum lanjut.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
