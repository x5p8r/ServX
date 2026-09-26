import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FaqAccordion({ title, items, lang }) {
  const [open, setOpen] = useState(true)

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-3 p-4 text-start transition-colors hover:bg-slate-50/80"
        aria-expanded={open}
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
          <HelpCircle className="h-5 w-5" aria-hidden />
        </div>
        <span className="flex-1 text-[15px] font-bold text-slate-800">
          {title}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-3 border-t border-slate-100 px-4 pb-4 pt-3">
            {items.map((item) => (
              <li
                key={item.q}
                className="rounded-xl bg-[#FAF8F5] px-3.5 py-3"
              >
                <p className="text-[13px] font-semibold text-slate-700">
                  {item.q}
                </p>
                <p className="mt-1 text-[13px] text-slate-500">
                  <span className="font-medium text-emerald-600">
                    {lang === 'ar' ? 'الجواب: ' : 'A: '}
                  </span>
                  {item.a}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
