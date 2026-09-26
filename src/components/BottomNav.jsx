import { Home, Info, Briefcase, MessageCircle } from 'lucide-react'

const tabs = [
  { id: 'home', icon: Home, labelAr: 'الرئيسية', labelEn: 'Home' },
  { id: 'about', icon: Info, labelAr: 'من نحن', labelEn: 'About' },
  { id: 'services', icon: Briefcase, labelAr: 'الخدمات', labelEn: 'Services' },
  { id: 'contact', icon: MessageCircle, labelAr: 'تواصل', labelEn: 'Contact' },
]

export default function BottomNav({ active, onNavigate, lang }) {
  const isAr = lang === 'ar'

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200/80 bg-white/95 backdrop-blur-md safe-bottom"
      aria-label={isAr ? 'التنقل السفلي' : 'Bottom navigation'}
    >
      <div className="mx-auto flex max-w-lg items-stretch justify-around px-2 pt-1.5 pb-2">
        {tabs.map(({ id, icon: Icon, labelAr, labelEn }) => {
          const isActive = active === id
          return (
            <button
              key={id}
              type="button"
              onClick={() => onNavigate(id)}
              className={`flex min-w-[4.5rem] flex-col items-center gap-0.5 rounded-xl px-3 py-2 transition-all duration-200 ${
                isActive
                  ? 'text-amber-600'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                  isActive ? 'bg-amber-50' : ''
                }`}
              >
                <Icon
                  className="h-[1.15rem] w-[1.15rem]"
                  strokeWidth={isActive ? 2.4 : 2}
                  aria-hidden
                />
              </span>
              <span className="text-[11px] font-semibold">
                {isAr ? labelAr : labelEn}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
