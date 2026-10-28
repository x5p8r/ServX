import { useEffect, useState } from 'react'
import {
  Utensils,
  ShoppingCart,
  Send,
  Cloud,
  Calculator,
  Folder,
  QrCode,
  MessageSquare,
  Globe,
  CodeXml,
} from 'lucide-react'
import TopNav from './components/TopNav'
import BottomNav from './components/BottomNav'
import SectionHeader from './components/SectionHeader'
import ServiceCard from './components/ServiceCard'
import FaqAccordion from './components/FaqAccordion'
import { content, WHATSAPP_URL } from './data/content'

const serviceIcons = {
  menu: Utensils,
  hostiger: Globe,
  store: ShoppingCart,
  bots: Send,
}

const toolIcons = {
  calculator: Calculator,
  portfolio: Folder,
  qr: QrCode,
}

export default function App() {
  const [lang, setLang] = useState('ar')
  const [activeTab, setActiveTab] = useState('home')
  const t = content[lang]
  const isAr = lang === 'ar'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = isAr ? 'rtl' : 'ltr'
  }, [lang, isAr])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleNavigate = (tabId) => {
    setActiveTab(tabId)
    const map = {
      home: 'home',
      about: 'about',
      services: 'services',
      contact: 'contact',
    }
    scrollTo(map[tabId])
  }

  const toggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'))
  }

  return (
    <div className="min-h-dvh bg-[#FAF8F5] font-cairo text-slate-800">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.08),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.06),_transparent_50%)]" />

      <TopNav
        title={t.navTitle}
        lang={lang}
        onToggleLang={toggleLang}
        onBack={() => handleNavigate('home')}
      />

      <main
        id="home"
        className="mx-auto max-w-lg scroll-mt-16 px-4 pb-28 pt-5"
      >
        {/* Brand intro */}
        <section className="mb-8 text-center">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-lg font-extrabold text-white shadow-lg shadow-amber-200/60 transition-transform duration-300 hover:scale-105">
            SX
          </div>
          <p className="text-xl font-extrabold text-slate-800">
            {t.brand} ⚡
          </p>
          <p className="mt-1 text-sm text-slate-500">
            {isAr
              ? 'حلول رقمية بسيطة · سريعة · عملية'
              : 'Simple · Fast · Practical digital solutions'}
          </p>
        </section>

        {/* Main Services */}
        <section id="services" className="mb-7 scroll-mt-20">
          <SectionHeader title={t.sections.main} />
          <div className="flex flex-col gap-3">
            {t.services.map((item) => (
              <ServiceCard
                key={item.id}
                icon={serviceIcons[item.id]}
                title={item.title}
                subtitle={item.subtitle}
                color={item.color}
                href={item.href}
              />
            ))}
          </div>
        </section>

        {/* Hosting */}
        <section className="mb-7">
          <SectionHeader title={t.sections.hosting} />
          <ServiceCard
            icon={Cloud}
            title={t.hosting.title}
            subtitle={t.hosting.subtitle}
            color="blue"
            href="#contact"
          />
        </section>

        {/* Tools */}
        <section className="mb-7">
          <SectionHeader title={t.sections.tools} />
          <div className="flex flex-col gap-3">
            {t.tools.map((item) => (
              <ServiceCard
                key={item.id}
                icon={toolIcons[item.id]}
                title={item.title}
                subtitle={item.subtitle}
                color={item.color}
                href={item.href}
                external={item.external}
              />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-7 scroll-mt-20">
          <SectionHeader title={t.sections.contact} />
          <ServiceCard
            icon={MessageSquare}
            title={t.contact.title}
            subtitle={t.contact.subtitle}
            color="green"
            href={WHATSAPP_URL}
            external
          />
          <div className="mt-3">
            <ServiceCard
              icon={CodeXml}
              title={t.contact.githubTitle}
              subtitle={t.contact.githubSubtitle}
              color="slate"
              href="https://github.com/x5p8r/ServX"
              external
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-7">
          <SectionHeader title={t.sections.faq} />
          <FaqAccordion title={t.faqTitle} items={t.faq} lang={lang} />
        </section>

        {/* About */}
        <section id="about" className="mb-4 scroll-mt-20">
          <SectionHeader title={t.sections.about} />
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
            <p className="text-sm leading-relaxed text-slate-600">
              {t.aboutText}
            </p>
          </div>
        </section>

        <p className="mt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} {t.brand}
        </p>
      </main>

      <BottomNav
        active={activeTab}
        onNavigate={handleNavigate}
        lang={lang}
      />
    </div>
  )
}
