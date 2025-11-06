import { Shield, ScrollText, Swords, Banknote } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Swords className="text-emerald-600" size={22} />,
      title: 'Class & Skill',
      desc: 'Pilih Warrior, Mage, Ranger, atau Healer. Kembangkan skill unik dan combo mematikan.'
    },
    {
      icon: <ScrollText className="text-emerald-600" size={22} />,
      title: 'Quest & Dungeon',
      desc: 'Jalani cerita epik, selesaikan quest harian, dan taklukkan dungeon untuk loot langka.'
    },
    {
      icon: <Shield className="text-emerald-600" size={22} />,
      title: 'PvE & Raid',
      desc: 'Hadapi boss raksasa bersama guild-mu dengan mekanik pertarungan yang seru.'
    },
    {
      icon: <Banknote className="text-emerald-600" size={22} />,
      title: 'Ekonomi Hidup',
      desc: 'Sistem lelang, profesi, dan trading player-driven yang dinamis.'
    }
  ]

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Fitur Utama</h2>
        <p className="mt-2 text-gray-600 text-center">Semua yang kamu butuhkan untuk pengalaman RPG yang mendalam.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-emerald-50 grid place-items-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
