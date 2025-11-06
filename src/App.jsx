import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import LessonList from './components/LessonList'
import PracticePanel from './components/PracticePanel'
import EnrollmentForm from './components/EnrollmentForm'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <LessonList />
        <PracticePanel />
        <EnrollmentForm />
      </main>
      <footer className="border-t border-emerald-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} Mudah Belajar Islam — Kelas Tahsin Al-Qur'an. Semoga bermanfaat.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
