import { ArrowRight, Languages } from 'lucide-react'

export default function TopNav({ title, lang, onToggleLang, onBack }) {
  const isAr = lang === 'ar'

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-[#FAF8F5]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-lg items-center justify-between px-4">
        <button
          type="button"
          onClick={onBack}
          aria-label={isAr ? 'رجوع' : 'Back'}
          className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-white hover:shadow-sm active:scale-95"
        >
          <ArrowRight className="h-5 w-5 rtl:rotate-0 ltr:rotate-180" />
        </button>

        <h1 className="text-base font-extrabold tracking-tight text-slate-800">
          {title}
        </h1>

        <button
          type="button"
          onClick={onToggleLang}
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:border-amber-300 hover:bg-amber-50 active:scale-95"
        >
          <Languages className="h-3.5 w-3.5 text-amber-500" />
          {isAr ? 'English' : 'عربي'}
        </button>
      </div>
    </header>
  )
}
