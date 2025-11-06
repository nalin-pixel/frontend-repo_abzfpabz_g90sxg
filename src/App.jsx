import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServerStatus from './components/ServerStatus'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ServerStatus />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
