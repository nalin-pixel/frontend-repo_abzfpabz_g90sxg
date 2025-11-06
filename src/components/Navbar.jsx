import { useState } from 'react'
import { Menu, X, Gamepad2, Server, Users } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Status', href: '#status' },
    { name: 'Community', href: '#community' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-white/20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 grid place-items-center text-white shadow">
              <Gamepad2 size={18} />
            </div>
            <span className="font-extrabold tracking-tight text-gray-900 text-lg">RPGCraft</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                {item.name}
              </a>
            ))}
            <a
              href="#join"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-semibold shadow"
            >
              <Server size={16} /> Join Server
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">
                  {item.name}
                </a>
              ))}
              <a href="#join" className="block rounded-md px-3 py-2 bg-emerald-600 text-white font-semibold">
                Join Server
              </a>
              <div className="flex items-center gap-2 px-3 pt-2 text-gray-600 text-sm">
                <Users size={16} /> Bergabunglah dengan petualang lain!
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
