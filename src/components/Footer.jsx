import { DiscordLogoIcon } from '@radix-ui/react-icons'

export default function Footer() {
  return (
    <footer id="community" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} RPGCraft. Tidak berafiliasi dengan Mojang/Microsoft.</p>
          <div className="flex items-center gap-3">
            <a href="https://discord.com" target="_blank" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-semibold">
              <DiscordLogoIcon /> Join Discord
            </a>
            <a href="#join" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-semibold">
              Salin IP
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
