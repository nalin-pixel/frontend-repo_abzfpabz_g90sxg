import Spline from '@splinetool/react-spline'
import { Sparkles, Sword } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/3Y2eUWB2D2kNQ0bX/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 pointer-events-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[90vh] flex flex-col items-start justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sm text-gray-700 shadow pointer-events-auto">
            <Sparkles size={16} className="text-emerald-600" />
            Selamat datang di dunia RPG Minecraft!
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Bangun Guild-mu. Taklukkan Dungeon. Jadilah Legenda.
          </h1>
          <p className="mt-4 max-w-2xl text-gray-700 text-lg">
            Server RPGCraft menghadirkan quest, class, skill, dan ekonomi yang hidup. Bergabunglah dan mulai petualanganmu hari ini.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 pointer-events-auto">
            <a href="#join" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md font-semibold shadow">
              <Sword size={18} /> Main Sekarang
            </a>
            <a href="#community" className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-gray-900 px-6 py-3 rounded-md font-semibold shadow">
              Pelajari Fitur
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
    </section>
  )
}
