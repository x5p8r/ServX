import { ChevronLeft } from 'lucide-react'

const iconBgMap = {
  amber: 'bg-amber-100 text-amber-600',
  orange: 'bg-orange-100 text-orange-600',
  blue: 'bg-blue-100 text-blue-600',
  green: 'bg-emerald-100 text-emerald-600',
  slate: 'bg-slate-100 text-slate-600',
  yellow: 'bg-yellow-100 text-yellow-600',
  red: 'bg-red-100 text-red-600',
}

/**
 * Reusable service / feature link card
 */
export default function ServiceCard({
  icon: Icon,
  title,
  subtitle,
  color = 'blue',
  href,
  onClick,
  external = false,
  showChevron = true,
}) {
  const Wrapper = href ? 'a' : 'button'
  const linkProps = href
    ? {
        href,
        ...(external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {}),
      }
    : { type: 'button', onClick }

  return (
    <Wrapper
      {...linkProps}
      className="group flex w-full items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 text-start shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
    >
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${iconBgMap[color] || iconBgMap.blue}`}
      >
        <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-[15px] font-bold leading-snug text-slate-800">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-0.5 text-[13px] leading-relaxed text-slate-500">
            {subtitle}
          </p>
        )}
      </div>

      {showChevron && (
        <ChevronLeft
          className="h-5 w-5 shrink-0 text-slate-300 transition-transform duration-300 group-hover:text-slate-500 rtl:group-hover:-translate-x-0.5 ltr:rotate-180 ltr:group-hover:translate-x-0.5"
          aria-hidden
        />
      )}
    </Wrapper>
  )
}
