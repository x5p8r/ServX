export const content = {
  ar: {
    brand: 'ServX',
    navTitle: 'ServX ⚡',
    sections: {
      main: 'الخدمات الرئيسية',
      hosting: 'الاستضافة',
      tools: 'الأدوات والميزات',
      contact: 'تواصل معي',
      faq: 'الأسئلة الشائعة',
      about: 'من نحن',
    },
    aboutText:
      'ServX نقدّم حلول رقمية عملية للمطاعم والمتاجر وأصحاب المشاريع — منيو رقمي، متاجر إلكترونية، بوتات تلجرام، واستضافة سريعة بأسعار واضحة.',
    services: [
      {
        id: 'menu',
        title: 'المنيو الرقمي',
        subtitle:
          'منيو تفاعلي وسريع للمطاعم والكافيهات، سهل التحديث وبدون غلبة طباعة.',
        color: 'amber',
        href: '#services',
      },
      {
        id: 'store',
        title: 'متجر إلكتروني متكامل',
        subtitle: 'إدارة منتجاتك ومبيعاتك، جاهز للتشغيل.',
        color: 'orange',
        href: 'https://cooffee-menu.vercel.app',
      },
      {
        id: 'bots',
        title: 'بوتات تلجرام مخصصة',
        subtitle:
          'أتمتة المهام وخدمة عملائك تلقائياً وبشكل مخصص حسب احتياجك.',
        color: 'blue',
        href: '#services',
      },
    ],
    hosting: {
      title: 'استضافة مواقع سريعة',
      subtitle:
        'أداء ممتاز واستقرار لموقعك بـ 5.40$ شهرياً فقط بدون وجع رأس.',
    },
    tools: [
      {
        id: 'calculator',
        title: 'احسب سعر موقعك بنفسك 💡',
        subtitle:
          'حدد الميزات اللي تبيها وتعرف على السعر والمدة المتوقعة فوراً.',
        color: 'slate',
        href: 'https://mayar-web-theta.vercel.app',
        external: true,
      },
      {
        id: 'portfolio',
        title: 'معرض الأعمال 📁',
        subtitle: 'شاهد أمثلة لأعمالنا من مواقع وبوتات سابقة.',
        color: 'yellow',
        href: '#about',
      },
      {
        id: 'qr',
        title: 'مولد QR Code مجاني 🎁',
        subtitle: 'أداة بسيطة لتوليد رموز QR مجاناً وبدون إعلانات.',
        color: 'red',
        href: 'https://example.com/qr',
        external: true,
      },
    ],
    contact: {
      title: 'تواصل معي عبر الواتساب',
      subtitle: 'استفسر عن خدماتنا أو اطلب خدمة مخصصة.',
    },
    faqTitle: 'أسئلة شائعة ❓',
    faq: [
      { q: 'كم مدة التنفيذ؟', a: 'حوالي 6 أيام حسب حجم المشروع.' },
      { q: 'هل يوجد دعم؟', a: 'نعم، نوفر دعماً فنياً بعد التسليم.' },
    ],
  },
  en: {
    brand: 'ServX',
    navTitle: 'ServX ⚡',
    sections: {
      main: 'Main Services',
      hosting: 'Hosting',
      tools: 'Tools & Features',
      contact: 'Contact Me',
      faq: 'FAQ',
      about: 'About Us',
    },
    aboutText:
      'ServX builds practical digital solutions for restaurants, shops, and businesses — digital menus, online stores, custom Telegram bots, and fast hosting with clear pricing.',
    services: [
      {
        id: 'menu',
        title: 'Digital Menu',
        subtitle:
          'Interactive, fast menus for restaurants & cafés — easy to update, no printing hassle.',
        color: 'amber',
        href: '#services',
      },
      {
        id: 'store',
        title: 'Full E-Commerce Store',
        subtitle: 'Manage products and sales — ready to launch.',
        color: 'orange',
        href: '#services',
      },
      {
        id: 'bots',
        title: 'Custom Telegram Bots',
        subtitle:
          'Automate tasks and serve customers with bots tailored to your needs.',
        color: 'blue',
        href: '#services',
      },
    ],
    hosting: {
      title: 'Fast Website Hosting',
      subtitle:
        'Excellent performance and stability for just $5.40/month — no headaches.',
    },
    tools: [
      {
        id: 'calculator',
        title: 'Calculate Your Website Price 💡',
        subtitle:
          'Pick the features you need and get an instant price & timeline estimate.',
        color: 'slate',
        href: 'https://example.com/calculator',
        external: true,
      },
      {
        id: 'portfolio',
        title: 'Portfolio 📁',
        subtitle: 'See examples of our past websites and bots.',
        color: 'yellow',
        href: '#about',
      },
      {
        id: 'qr',
        title: 'Free QR Code Generator 🎁',
        subtitle: 'A simple QR tool — free, no ads.',
        color: 'red',
        href: 'https://example.com/qr',
        external: true,
      },
    ],
    contact: {
      title: 'Chat on WhatsApp',
      subtitle: 'Ask about our services or request a custom solution.',
    },
    faqTitle: 'Frequently Asked Questions ❓',
    faq: [
      { q: 'How long does delivery take?', a: 'About 6 days depending on project size.' },
      { q: 'Is support included?', a: 'Yes — we provide post-delivery technical support.' },
    ],
  },
}

/** Replace with your real WhatsApp number (country code, no +) */
export const WHATSAPP_URL = 'https://wa.me/966500000000'
