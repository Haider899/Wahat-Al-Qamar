/**
 * WAHAT AL QAMAR — Motion & interactions
 */
import CONFIG from '../config.js';

// Make CONFIG globally available
window.CONFIG = CONFIG;
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const HERO_INTERVAL = 2600;

/** Single hero background — your welding factory image */
const HERO_BG = {
  image: 'assets/hero/hero-welding-main.png?v=3',
  imageAlt: 'Professional welder manufacturing trailer base in industrial factory',
};

/** Rotating headlines only (same background) */
const HERO_SLIDES_EN = [
  {
    eyebrow: 'In-House Fabrication · UAE',
    line1: 'Precision',
    line2a: 'Welded',
    line2b: 'Trailer Bases',
    line3: 'Built in Dubai',
    desc: 'Arc welding, cross-members and main beams — every WAHAT AL QAMAR chassis starts on our factory floor.',
  },
  {
    eyebrow: 'Jebel Ali · Welding & Production',
    line1: 'Expert',
    line2a: 'Welding',
    line2b: 'Manufacturing',
    line3: 'Every Base',
    desc: 'Live workshop welding with certified fabricators — built for heavy GCC construction and logistics fleets.',
  },
  {
    eyebrow: 'Trailer Base · UAE',
    line1: 'Strength',
    line2a: 'You Can',
    line2b: 'Trust',
    line3: 'On Every Haul',
    desc: 'From steel frame to road-ready chassis — export-quality trailer bases delivered on your timeline.',
  },
];

const HERO_SLIDES_AR = [
  {
    eyebrow: 'تصنيع داخلي · الإمارات',
    line1: 'دقة',
    line2a: 'لحام',
    line2b: 'قواعد المقطورات',
    line3: 'تصنع في دبي',
    desc: 'لحام القوس، والعوارض العرضية، والعوارض الرئيسية — كل شاسيه من واحة القمر يبدأ من أرضية مصنعنا.',
  },
  {
    eyebrow: 'جبل علي · اللحام والإنتاج',
    line1: 'خبرة',
    line2a: 'في اللحام',
    line2b: 'والتصنيع',
    line3: 'لكل قاعدة',
    desc: 'تصنيع مباشر داخل الورشة مع فنيين محترفين — مبني لأساطيل البناء والخدمات اللوجستية الثقيلة في الخليج.',
  },
  {
    eyebrow: 'قواعد المقطورات · الإمارات',
    line1: 'قوة',
    line2a: 'يمكنك',
    line2b: 'الاعتماد عليها',
    line3: 'في كل رحلة',
    desc: 'من الإطار الفولاذي إلى الشاسيه الجاهز للطريق — قواعد مقطورات بجودة تصدير وتسليم حسب جدولك.',
  },
];

const TRANSLATIONS = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.capabilities': 'Capabilities',
    'nav.projects': 'Projects',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',
    'nav.quote': 'Get Quote',
    'hero.explore': 'Explore Products',
    'hero.viewProjects': 'View Projects',
    'hero.statYears': '+ Years Experience',
    'hero.statDelivered': '+ Trailers Delivered',
    'hero.statCategories': 'Trailer Categories',
    'trust.label': 'Trusted across UAE & GCC',
    'trust.flatbed': 'Flatbed Trailers',
    'trust.lowbed': 'Lowbed Chassis',
    'trust.aframe': 'A-Frame Trailers',
    'trust.skeleton': 'Skeleton Trailers',
    'trust.curtain': 'Curtain Side',
    'trust.box': 'Box Trailers',
    'trust.convertible': 'Convertible Lowbed',
    'trust.custom': 'Custom Fabrication',
    'tag.flatbed': 'Flatbed',
    'gallery.flatbedChassisTitle': 'Flatbed Chassis Base',
    'gallery.flatbedChassisDesc': 'High-durability trailer chassis with premium steel fabrication, ready for GCC routes.',
    'reviews.label': 'Customer Reviews',
    'reviews.title': 'Trusted by Heavy Transport Teams',
    'reviews.desc': 'Feedback from fleet operators, contractors, and logistics teams who rely on WAHAT AL QAMAR trailer bases.',
    'reviews.fmRole': 'Fleet Manager',
    'reviews.fmCompany': 'Heavy Logistics, Dubai',
    'reviews.fmQuote': '"The chassis build quality and delivery updates were excellent. The team understood our payload requirements and delivered a road-ready platform on schedule."',
    'reviews.fmChip': 'Lowbed Fleet',
    'reviews.cpRole': 'Construction Partner',
    'reviews.cpCompany': 'Precast Transport, UAE',
    'reviews.cpQuote': '"Strong welding, clean finishing, and practical engineering. Their workshop team helped us finalize custom dimensions without slowing the project timeline."',
    'reviews.cpChip': 'Custom Fabrication',
    'reviews.loRole': 'Logistics Operator',
    'reviews.loCompany': 'GCC Route Operations',
    'reviews.loQuote': '"The flatbed base performed well on demanding routes. Good communication, solid materials, and a professional handover from inspection to delivery."',
    'reviews.loChip': 'Flatbed Base',
    'reviews.metricResponse': 'Quote Response',
    'reviews.metricQC': 'Before Delivery',
    'reviews.metricBuilt': 'Built Locally',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.products': 'المنتجات',
    'nav.capabilities': 'قدراتنا',
    'nav.projects': 'مشاريعنا',
    'nav.reviews': 'الآراء',
    'nav.contact': 'اتصل بنا',
    'nav.quote': 'طلب تسعيرة',
    'hero.explore': 'اكتشف المنتجات',
    'hero.viewProjects': 'عرض المشاريع',
    'hero.statYears': '+ سنوات خبرة',
    'hero.statDelivered': '+ مقطورة تم تسليمها',
    'hero.statCategories': 'فئات المقطورات',
    'trust.label': 'موضع ثقة في الإمارات والخليج',
    'trust.flatbed': 'مقطورات مسطحة',
    'trust.lowbed': 'شاسيه منخفض',
    'trust.aframe': 'مقطورات A-Frame',
    'trust.skeleton': 'مقطورات هيكلية',
    'trust.curtain': 'مقطورات ذات جوانب ستائرية',
    'trust.box': 'مقطورات صندوقية',
    'trust.convertible': 'مقطورات منخفضة قابلة للتحويل',
    'trust.custom': 'تصنيع حسب الطلب',
    'tag.flatbed': 'مسطحة',
    'gallery.flatbedChassisTitle': 'قاعدة شاسيه مقطورة مسطحة',
    'gallery.flatbedChassisDesc': 'شاسيه مقطورة عالي المتانة مع تصنيع فولاذي ممتاز، جاهز للطرق في الخليج.',
    'reviews.label': 'آراء العملاء',
    'reviews.title': 'موضع ثقة فرق النقل الثقيل',
    'reviews.desc': 'آراء مشغلي الأساطيل، والمقاولين، وفرق الخدمات اللوجستية الذين يعتمدون على قواعد مقطورات واحة القمر.',
    'reviews.fmRole': 'مدير الأسطول',
    'reviews.fmCompany': 'الخدمات اللوجستية الثقيلة، دبي',
    'reviews.fmQuote': '"جودة تصنيع الشاسيه وتحديثات التسليم كانت ممتازة. تفهم الفريق متطلبات الحمولة لدينا وسلموا قاعدة جاهزة للطريق في الوقت المحدد."',
    'reviews.fmChip': 'أسطول المقطورات المنخفضة',
    'reviews.cpRole': 'شريك البناء',
    'reviews.cpCompany': 'نقل الخرسانة الجاهزة، الإمارات',
    'reviews.cpQuote': '"لحام قوي، تشطيب نظيف، وهندسة عملية. ساعدنا فريق الورشة في تحديد الأبعاد المخصصة دون إبطاء الجدول الزمني للمشروع."',
    'reviews.cpChip': 'تصنيع مخصص',
    'reviews.loRole': 'مشغل الخدمات اللوجستية',
    'reviews.loCompany': 'عمليات مسارات الخليج',
    'reviews.loQuote': '"قدمت القاعدة المسطحة أداءً ممتازاً في الطرق الصعبة. تواصل جيد، مواد متينة، وتسليم احترافي من الفحص إلى الشحن."',
    'reviews.loChip': 'قاعدة مسطحة',
    'reviews.metricResponse': 'الرد على التسعيرة',
    'reviews.metricQC': 'فحص الجودة قبل التسليم',
    'reviews.metricBuilt': 'صنع محلياً في الإمارات',
  }
};

let currentLang = localStorage.getItem('wahatLang') || 'en';
const getHeroSlides = () => (currentLang === 'ar' ? HERO_SLIDES_AR : HERO_SLIDES_EN);

function updateTranslations() {
  $$('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const translation = TRANSLATIONS[currentLang]?.[key];
    if (translation) {
      el.textContent = translation;
    }
  });

  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', currentLang === 'ar');

  const toggleBtn = $('#langToggle');
  if (toggleBtn) {
    toggleBtn.textContent = currentLang === 'ar' ? 'EN' : 'AR';
    toggleBtn.setAttribute('aria-label', currentLang === 'ar' ? 'Switch to English' : 'Switch to Arabic');
    toggleBtn.setAttribute('aria-pressed', currentLang === 'ar' ? 'true' : 'false');
  }
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  localStorage.setItem('wahatLang', currentLang);
  updateTranslations();
  
  const currentSlides = getHeroSlides();
  if (currentSlides && currentSlides[heroIndex]) {
    animateHeroText(currentSlides[heroIndex]);
  }
}

let heroIndex = 0;
let heroTimer = null;
let heroProgressTween = null;

/* ── Hero: one welding background + rotating titles ── */
function initHeroSlideshow() {
  const container = $('#heroSlides');
  const dotsWrap = $('#heroDots');
  if (!container) return;

  const el = document.createElement('div');
  el.className = 'hero-slide active';
  const img = document.createElement('img');
  img.src = HERO_BG.image;
  img.alt = HERO_BG.imageAlt;
  img.loading = 'eager';
  img.decoding = 'async';
  img.fetchPriority = 'high';
  img.sizes = '100vw';
  el.appendChild(img);
  el.setAttribute('role', 'img');
  el.setAttribute('aria-label', HERO_BG.imageAlt);
  container.appendChild(el);

  getHeroSlides().forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = `hero-dot${i === 0 ? ' active' : ''}`;
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Message ${i + 1}`);
    dot.addEventListener('click', () => goToHeroSlide(i, true));
    dotsWrap?.appendChild(dot);
  });

  startHeroAutoplay();
}

function startHeroAutoplay() {
  clearInterval(heroTimer);
  resetHeroProgress();
  heroTimer = setInterval(() => {
    goToHeroSlide((heroIndex + 1) % getHeroSlides().length);
  }, HERO_INTERVAL);
}

function resetHeroProgress() {
  const bar = $('#heroProgress');
  if (!bar || typeof gsap === 'undefined') return;
  heroProgressTween?.kill();
  gsap.set(bar, { width: '0%' });
  heroProgressTween = gsap.to(bar, {
    width: '100%',
    duration: HERO_INTERVAL / 1000,
    ease: 'none',
  });
}

function goToHeroSlide(index, manual = false) {
  if (index === heroIndex && manual) return;
  const data = getHeroSlides()[index];
  if (!data) return;

  $$('.hero-dot').forEach((d, i) => d.classList.toggle('active', i === index));
  heroIndex = index;
  animateHeroText(data);

  if (manual) startHeroAutoplay();
  else resetHeroProgress();
}

function animateHeroText(data) {
  const eyebrow = $('#heroEyebrow');
  const desc = $('#heroDesc');
  const line1 = $('#heroLine1');
  const line2a = $('#heroLine2a');
  const line2b = $('#heroLine2b');
  const line3 = $('#heroLine3');
  const words = [line1, line2a, line2b, line3].filter(Boolean);

  if (typeof gsap === 'undefined') {
    if (eyebrow) eyebrow.textContent = data.eyebrow;
    if (desc) desc.textContent = data.desc;
    if (line1) line1.textContent = data.line1;
    if (line2a) line2a.textContent = data.line2a;
    if (line2b) line2b.textContent = data.line2b;
    if (line3) line3.textContent = data.line3;
    return;
  }

  const title = $('#heroTitle');
  title?.classList.add('is-animating');
  eyebrow?.classList.add('fading');
  desc?.classList.add('fading');

  const tl = gsap.timeline({
    onComplete: () => title?.classList.remove('is-animating'),
  });

  tl.to(words, {
    y: -36,
    opacity: 0,
    duration: 0.35,
    stagger: 0.05,
    ease: 'power3.in',
  })
    .call(() => {
      if (eyebrow) eyebrow.textContent = data.eyebrow;
      if (desc) desc.textContent = data.desc;
      if (line1) line1.textContent = data.line1;
      if (line2a) line2a.textContent = data.line2a;
      if (line2b) line2b.textContent = data.line2b;
      if (line3) line3.textContent = data.line3;
    })
    .set(words, { y: 48, opacity: 0 })
    .to(words, {
      y: 0,
      opacity: 1,
      duration: 0.55,
      stagger: 0.07,
      ease: 'power4.out',
    })
    .to(eyebrow, { opacity: 1, duration: 0.4, onStart: () => eyebrow?.classList.remove('fading') }, '-=0.35')
    .to(desc, { opacity: 1, duration: 0.4, onStart: () => desc?.classList.remove('fading') }, '-=0.35');
}

/* ── Page loader — cinematic trailer assembly ── */
function initLoader() {
  const loader     = $('.page-loader');
  const barFill    = $('#loaderBarFill');
  const stepLabel  = $('#loaderStep');
  const logo       = loader ? loader.querySelector('.loader-logo')    : null;
  const brand      = loader ? loader.querySelector('.loader-brand')   : null;
  const tagline    = loader ? loader.querySelector('.loader-tagline') : null;
  const bar        = loader ? loader.querySelector('.loader-bar')     : null;
  const stepEl     = loader ? loader.querySelector('.loader-step')    : null;

  const wheels  = $('#part-wheels');
  const legs    = $('#part-legs');
  const frame   = $('#part-frame');
  const bed     = $('#part-bed');
  const scanner = $('#scanner');

  /* helpers */
  const setProgress = (pct, label) => {
    if (barFill) barFill.style.width = pct + '%';
    if (stepEl)  stepEl.textContent  = label;
  };

  /* ── fallback (no GSAP) ── */
  if (typeof gsap === 'undefined') {
    [wheels, legs, frame, bed].forEach(el => { if (el) el.style.opacity = '1'; });
    if (logo)    { logo.style.opacity    = '1'; logo.style.animation = 'logoPulse 1.2s ease-in-out infinite'; }
    if (brand)   brand.style.opacity    = '1';
    if (tagline) tagline.style.opacity  = '1';
    if (bar)     bar.style.opacity      = '1';
    if (barFill) barFill.style.width    = '100%';
    window.addEventListener('load', () => {
      setTimeout(() => { loader?.classList.add('hidden'); initHeroEntrance(); }, 1800);
    });
    return;
  }

  /* ── GSAP timeline ── */
  const tl = gsap.timeline({
    onComplete: () => {
      /* wait for page load before hiding */
      const hide = () => {
        gsap.to(loader, {
          opacity: 0,
          duration: 0.7,
          ease: 'power2.inOut',
          onComplete: () => {
            loader.classList.add('hidden');
            initHeroEntrance();
          }
        });
      };
      if (document.readyState === 'complete') {
        setTimeout(hide, 400);
      } else {
        window.addEventListener('load', () => setTimeout(hide, 400), { once: true });
      }
    }
  });

  /* 0 — show progress bar & step label instantly */
  tl.set([bar, stepEl], { opacity: 1 })
    .call(() => setProgress(0, 'Loading chassis…'));

  /* 1 — WHEELS fly in from bottom + rotate */
  tl.fromTo(wheels,
    { opacity: 0, y: 60, rotation: -20, transformOrigin: 'center center' },
    { opacity: 1, y: 0,  rotation: 0,   duration: 0.7, ease: 'back.out(1.7)' }
  )
  .call(() => setProgress(20, 'Mounting axles…'));

  /* 2 — LANDING GEAR drops from above */
  tl.fromTo(legs,
    { opacity: 0, y: -50, scaleY: 0, transformOrigin: 'top center' },
    { opacity: 1, y: 0,   scaleY: 1, duration: 0.6, ease: 'elastic.out(1, 0.6)' },
    '-=0.2'
  )
  .call(() => setProgress(40, 'Attaching landing gear…'));

  /* 3 — FRAME slides in from the right */
  tl.fromTo(frame,
    { opacity: 0, x: 80 },
    { opacity: 1, x: 0,  duration: 0.65, ease: 'power3.out' },
    '-=0.15'
  )
  .call(() => setProgress(60, 'Welding main frame…'));

  /* 4 — BED descends from above with a slam */
  tl.fromTo(bed,
    { opacity: 0, y: -40, scaleY: 0.4, transformOrigin: 'top center' },
    { opacity: 1, y: 0,   scaleY: 1,   duration: 0.55, ease: 'back.out(2)' },
    '-=0.1'
  )
  .call(() => setProgress(75, 'Fitting cargo deck…'));

  /* 5 — LASER SCAN sweeps across the assembled trailer */
  tl.to(scanner, { opacity: 1, duration: 0.2 })
    .fromTo(scanner,
      { attr: { x1: 50, x2: 90  } },
      { attr: { x1: 270, x2: 310 }, duration: 0.9, ease: 'power1.inOut' }
    )
    .to(scanner, { opacity: 0, duration: 0.2 }, '-=0.1')
    .call(() => {
      setProgress(88, 'Quality check…');
      /* small assembled glow flash */
      [wheels, legs, frame, bed].forEach(el => el?.classList.add('assembled'));
    });

  /* 6 — LOGO appears with scale-up */
  tl.fromTo(logo,
    { opacity: 0, scale: 0.6 },
    { opacity: 1, scale: 1,   duration: 0.55, ease: 'back.out(2)' },
    '+=0.05'
  );

  /* 7 — BRAND NAME letter-by-letter via character split */
  tl.fromTo(brand,
    { opacity: 0, y: 10, letterSpacing: '0.6em' },
    { opacity: 1, y: 0,  letterSpacing: '0.35em', duration: 0.65, ease: 'power3.out' },
    '-=0.3'
  );

  /* 8 — TAGLINE fades in */
  tl.fromTo(tagline,
    { opacity: 0, y: 8 },
    { opacity: 1, y: 0,  duration: 0.5, ease: 'power2.out' },
    '-=0.3'
  );

  /* 9 — progress bar fills to 100 */
  tl.call(() => {
    setProgress(100, 'Ready.');
    /* logo pulse after assembly */
    gsap.to(logo, { animation: 'none' });
    gsap.to(logo, {
      scale: 1.06,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: 'power1.inOut',
      filter: 'drop-shadow(0 0 28px rgba(26,158,143,0.85))'
    });
  })
  .to({}, { duration: 0.6 }); /* brief pause before dismiss */
}

/* ── Lenis smooth scroll ── */
function initLenis() {
  if (typeof Lenis === 'undefined') return null;
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  return lenis;
}

/* ── GSAP animations ── */
function initGSAP() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  /* Hero parallax on active slide */
  gsap.to('.hero-slides', {
    yPercent: 12,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  /* Reveal on scroll */
  gsap.utils.toArray('.reveal-up').forEach((el) => {
    gsap.from(el, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  });

  gsap.utils.toArray('.reveal-card').forEach((el, i) => {
    gsap.from(el, {
      y: 60,
      opacity: 0,
      duration: 0.9,
      delay: (i % 3) * 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });
  });

  /* About parallax images */
  gsap.to('.about-img-main', {
    y: -40,
    ease: 'none',
    scrollTrigger: {
      trigger: '.about-visual',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
    },
  });
  gsap.to('.about-img-float', {
    y: 30,
    ease: 'none',
    scrollTrigger: {
      trigger: '.about-visual',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
    },
  });

  /* Section titles */
  gsap.utils.toArray('.section-title').forEach((el) => {
    gsap.from(el, {
      clipPath: 'inset(0 100% 0 0)',
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
      },
    });
  });
}

function initHeroEntrance() {
  if (typeof gsap === 'undefined') return;
  gsap.set('.hero-title .word', { y: 56, opacity: 0 });
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
  tl.to('.hero-title .word', {
    y: 0,
    opacity: 1,
    duration: 1.1,
    stagger: 0.08,
  })
    .from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.8 }, '-=0.6')
    .from('.hero-desc', { opacity: 0, y: 30, duration: 0.8 }, '-=0.5')
    .from('.hero-cta', { opacity: 0, y: 30, duration: 0.8 }, '-=0.5')
    .from('.hero-controls', { opacity: 0, y: 16, duration: 0.6 }, '-=0.4')
    .from('.hero-stats .stat', { opacity: 0, y: 20, duration: 0.6, stagger: 0.1 }, '-=0.35');
  resetHeroProgress();
}

/* ── Counter animation ── */
function initCounters() {
  $$('[data-count]').forEach((el) => {
    const target = parseInt(el.dataset.count, 10);
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(el, {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          ease: 'power2.out',
        });
      },
    });
  });
}

/* ── Header scroll ── */
function initHeader() {
  const header = $('#header');
  const toggle = () => header?.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
}

/* ── Mobile nav ── */
function initNav() {
  const toggle = $('#navToggle');
  const nav = $('#mainNav');
  toggle?.addEventListener('click', () => {
    const open = nav?.classList.toggle('open');
    toggle.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  $$('.main-nav a').forEach((a) => {
    a.addEventListener('click', () => {
      nav?.classList.remove('open');
      toggle?.classList.remove('active');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ── Cursor glow ── */
function initCursor() {
  const glow = $('.cursor-glow');
  if (!glow || window.matchMedia('(pointer: coarse)').matches) return;
  let x = 0, y = 0;
  let cx = 0, cy = 0;
  document.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;
  });
  const tick = () => {
    cx += (x - cx) * 0.12;
    cy += (y - cy) * 0.12;
    glow.style.left = `${cx}px`;
    glow.style.top = `${cy}px`;
    requestAnimationFrame(tick);
  };
  tick();
}

/* ── Product card tilt ── */
function initTilt() {
  $$('[data-tilt]').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(card, {
        rotateY: x * 8,
        rotateX: -y * 8,
        transformPerspective: 800,
        duration: 0.4,
        ease: 'power2.out',
      });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'power3.out' });
    });
  });
}

/* ── Gallery filter ── */
function initGalleryFilter() {
  const buttons = $$('.filter-btn');
  const items = $$('.gallery-item');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      items.forEach((item) => {
        const show = filter === 'all' || item.dataset.category === filter;
        if (show) {
          item.classList.remove('hidden');
          gsap.fromTo(item, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.4 });
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
}

/* ── Contact form ── */
function initForm() {
  const form = $('#contactForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Message Sent ✓';
      btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
      form.reset();
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
        btn.style.background = '';
      }, 3000);
    }, 1200);
  });
}

/* ── Year ── */
function initYear() {
  const y = $('#year');
  if (y) y.textContent = new Date().getFullYear();
}

/* ── Apply config.js contact details ── */
function applyConfig() {
  if (typeof CONFIG === 'undefined') return;
  const { contact, company } = CONFIG;
  document.title = `${company.name} | ${company.tagline} — UAE`;
  
  const phoneLinks = $$('a[href^="tel:"]');
  if (contact.phone?.primary) {
    phoneLinks.forEach((a, i) => {
      const num = i === 0 ? contact.phone.primary : contact.phone.secondary || contact.phone.primary;
      a.href = `tel:${num.replace(/[^\d+]/g, '')}`;
      if (a.classList.contains('contact-icon')) {
        // Do not overwrite SVG icon text
      } else if (a.classList.contains('contact-line')) {
        // Preserve SVG icon and update text only
        const svg = a.querySelector('svg');
        a.innerHTML = '';
        if (svg) a.appendChild(svg);
        a.appendChild(document.createTextNode(' ' + num));
      } else {
        a.textContent = num;
      }
    });
  }

  const emailLinks = $$('a[href^="mailto:"]');
  if (contact.email?.info) {
    emailLinks.forEach((a) => {
      a.href = `mailto:${contact.email.info}`;
      if (a.classList.contains('contact-icon')) {
        // Do not overwrite SVG icon text
      } else if (a.classList.contains('contact-line')) {
        // Preserve SVG icon and update text only
        const svg = a.querySelector('svg');
        a.innerHTML = '';
        if (svg) a.appendChild(svg);
        a.appendChild(document.createTextNode(' ' + contact.email.info));
      } else {
        a.textContent = contact.email.info;
      }
    });
  }

  $$('[data-count]').forEach((el, i) => {
    if (i === 0 && company.yearsOfExperience) el.dataset.count = company.yearsOfExperience;
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  updateTranslations();
  const toggleBtn = $('#langToggle');
  toggleBtn?.addEventListener('click', toggleLanguage);

  applyConfig();
  initHeroSlideshow();
  initLoader();
  initHeader();
  initNav();
  initCursor();
  initGalleryFilter();
  initForm();
  initYear();

  if (typeof gsap !== 'undefined') {
    initLenis();
    initGSAP();
    if (typeof ScrollTrigger !== 'undefined') {
      initCounters();
    }
    initTilt();
  }
});
