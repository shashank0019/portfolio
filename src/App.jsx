import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollProgressBar from './components/ScrollProgressBar.jsx'
import BackToTop from './components/BackToTop.jsx'
import Home from './pages/Home.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-base-900 text-ink-100 selection:bg-signal/30">
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
