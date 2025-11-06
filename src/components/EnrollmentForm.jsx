import { useState } from 'react'
import { Send } from 'lucide-react'

export default function EnrollmentForm() {
  const [form, setForm] = useState({ name: '', email: '', level: 'Pemula' })
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="daftar" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Pendaftaran Terkirim</h2>
          <p className="mt-2 text-gray-600">Terima kasih, kami akan menghubungi Anda melalui email untuk jadwal kelas.</p>
          <button onClick={() => setSubmitted(false)} className="mt-6 rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-700">Kirim lagi</button>
        </div>
      </section>
    )
  }

  return (
    <section id="daftar" className="bg-gradient-to-b from-white to-emerald-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Daftar Kelas Tahsin</h2>
            <p className="mt-2 text-gray-600">Tulis data singkat Anda di bawah ini. Pilih level sesuai kemampuan saat ini.</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />Durasi 60 menit/sesi, 2x per pekan</li>
              <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />Kelas kecil: maksimal 8 peserta</li>
              <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />Coach bersanad, metode bertahap</li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-emerald-100">
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Nama Lengkap</label>
                <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-lg border border-emerald-200 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200" placeholder="contoh: Ahmad Fulan" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-lg border border-emerald-200 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200" placeholder="nama@email.com" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Level</label>
                <select name="level" value={form.level} onChange={onChange} className="mt-1 w-full rounded-lg border border-emerald-200 bg-white px-3 py-2 text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200">
                  <option>Pemula</option>
                  <option>Dasar</option>
                  <option>Menengah</option>
                </select>
              </div>
              <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white shadow hover:bg-emerald-700">
                <Send className="h-4 w-4" /> Kirim Pendaftaran
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
