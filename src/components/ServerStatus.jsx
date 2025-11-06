import { useEffect, useState } from 'react'
import { Server, Users, Clock } from 'lucide-react'

export default function ServerStatus() {
  const [status, setStatus] = useState({ online: true, players: 37, max: 100, uptime: '12h 43m' })

  // In a real app, fetch from backend or status API
  useEffect(() => {
    const timer = setInterval(() => {
      setStatus((s) => ({ ...s, players: Math.max(0, Math.min(s.max, s.players + (Math.random() > 0.5 ? 1 : -1))) }))
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="status" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <h2 className="text-3xl font-bold text-gray-900">Status Server</h2>
            <p className="mt-2 text-gray-600">Pantau kondisi server secara real-time.</p>

            <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className={`h-3 w-3 rounded-full ${status.online ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                <span className="font-semibold text-gray-900">{status.online ? 'Online' : 'Offline'}</span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <Stat icon={<Users size={18} />} label="Pemain Online" value={`${status.players}/${status.max}`} />
                <Stat icon={<Server size={18} />} label="Node Aktif" value="3" />
                <Stat icon={<Clock size={18} />} label="Uptime" value={status.uptime} />
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sticky top-24">
              <h3 className="font-semibold text-gray-900">Cara Bergabung</h3>
              <ol className="mt-3 list-decimal list-inside space-y-2 text-gray-700">
                <li>Buka Minecraft Java Edition</li>
                <li>Masuk ke Multiplayer</li>
                <li>Tambahkan Server: play.rpgcraft.gg</li>
                <li>Versi: 1.20+</li>
              </ol>
              <a href="#join" className="mt-4 inline-block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md font-semibold">Salin IP Server</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ icon, label, value }) {
  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <div className="text-gray-500 text-sm flex items-center gap-2">{icon} {label}</div>
      <div className="mt-1 text-2xl font-bold text-gray-900">{value}</div>
    </div>
  )
}
