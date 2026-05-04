/* ============================================================
   Aktaş & Karaca — script.js  (v2)
   ============================================================ */
'use strict';

/* ══ Çeviri Veritabanı ══════════════════════════════════════ */
const T = {
  tr: {
    'nav.subtitle':'Hukuk Bürosu',
    'nav.home':'Anasayfa','nav.about':'Hakkımızda','nav.services':'Hizmetler',
    'nav.whyus':'Neden Biz','nav.blog':'Blog','nav.contact':'İletişim',

    'hero.overline':'Hukuk Bürosu · İzmir',
    'hero.title.line1':'Hukuki İhtilaflarda',
    'hero.title.line2':'Çözüm Ortağınız',
    'hero.desc':'Her hukuki süreçte yanınızda, haklarınızı savunmak için\ndeneyimli ve kararlı bir çözüm ortağı.',
    'hero.cta':'Danışma Talep Edin','hero.explore':'Hizmetlerimiz',

    'about.label':'Hakkımızda','about.since':'yılından beri',
    'about.title':'Hukukun Gücünü\nGüveninizle Buluşturuyoruz',
    'about.p1':'Aktaş &amp; Karaca Hukuk Bürosu, 2009 yılından bu yana İzmir\'de faaliyet göstererek müvekkillerine yüksek standartlarda hukuki danışmanlık ve temsil hizmetleri sunmaktadır.',
    'about.p2':'Deneyimli avukat kadromuz, her müvekkilin davasına özgün ve stratejik bir yaklaşımla yaklaşarak en iyi sonucu elde etmek için çalışmaktadır.',
    'about.f1.title':'Deneyim','about.f1.text':'15 yılı aşkın kesintisiz hukuki pratik.',
    'about.f2.title':'Güvenilirlik','about.f2.text':'Şeffaflık, etik ilkeler, tam gizlilik.',
    'about.f3.title':'Kararlılık','about.f3.text':'Her davada sonuna kadar kararlı savunuculuk.',

    'services.label':'Hizmetlerimiz','services.title':'Hukuki Uzmanlık Alanlarımız',
    'srv.administrative.title':'İdari Hukuk',
    'srv.administrative.desc':'İdari işlemler, iptal ve tam yargı davaları ile idari yargı süreçlerinde kapsamlı temsil.',
    'srv.commercial.title':'Ticari Hukuk',
    'srv.commercial.desc':'Şirket kuruluşu, ticari sözleşmeler, ortaklık uyuşmazlıkları ve ticari davaların çözümü.',
    'srv.family.title':'Aile Hukuku',
    'srv.family.desc':'Boşanma, velayet, nafaka ve mal paylaşımı süreçlerinde hassas ve profesyonel danışmanlık.',
    'srv.realestate.title':'Emlak Hukuku',
    'srv.realestate.desc':'Tapu iptali, kat mülkiyeti, kira uyuşmazlıkları ve gayrimenkul işlemlerinde uzman rehberlik.',
    'srv.labor.title':'İş Hukuku',
    'srv.labor.desc':'İşçi ve işveren hakları, haksız fesih, kıdem tazminatı ve iş kazalarında kapsamlı destek.',
    'srv.criminal.title':'Ceza Hukuku',
    'srv.criminal.desc':'Soruşturma ve kovuşturma aşamalarında etkin savunma, müdahillik ve şikâyet süreçleri.',

    'why.label':'Neden Biz','why.title':'Farkımızı Yaratan\nDeğerlerimiz',
    'why.desc':'Her müvekkilimizle güvene dayalı, uzun soluklu bir ilişki kuruyoruz. Hukuki süreçlerin her aşamasında şeffaf, erişilebilir ve çözüm odaklı hareket ediyoruz.',
    'why.cta':'Ücretsiz Ön Görüşme',
    'why.f1.title':'Derin Hukuki Deneyim','why.f1.text':'15 yılı aşan kesintisiz pratik; çok sayıda hukuki alanda birikmiş derin uzmanlık.',
    'why.f2.title':'Şeffaf İletişim','why.f2.text':'Davanızın her aşamasında bilgilendiririz; sorularınız asla yanıtsız kalmaz.',
    'why.f3.title':'Tam Gizlilik','why.f3.text':'Müvekkil sırrı ve kişisel veri gizliliği, çalışma anlayışımızın değişmez ilkesidir.',
    'why.f4.title':'Stratejik Düşünce','why.f4.text':'Her davayı özgün olarak ele alır, en etkin hukuki stratejiyi birlikte belirleriz.',
    'why.f5.title':'Erişilebilirlik','why.f5.text':'Türkçe, İngilizce ve Almanca hizmet — her müvekkile kendi dilinde ulaşıyoruz.',

    'blog.label':'Blog &amp; Makaleler','blog.title':'Hukuki Perspektif',
    'blog.cat1':'İdari Hukuk','blog.date1':'15 Nisan 2026',
    'blog.title1':'İdari İptal Davalarında Dikkat Edilmesi Gereken Süreler',
    'blog.exc1':'İdare mahkemelerinde açılacak iptal davalarında hak düşürücü sürelerin hesaplanması ve pratik öneriler.',
    'blog.cat2':'Ticari Hukuk','blog.date2':'28 Mart 2026',
    'blog.title2':'Şirket Birleşmelerinde Hukuki Due Diligence Süreci',
    'blog.exc2':'Ticari birleşme ve devralma işlemlerinde hukuki durum tespitinin önemi ve izlenmesi gereken adımlar.',
    'blog.cat3':'İş Hukuku','blog.date3':'10 Mart 2026',
    'blog.title3':'2026 Kıdem Tazminatı Reformu: Hukuki Değerlendirme',
    'blog.exc3':'Gündemdeki kıdem tazminatı düzenlemesinin işçi ve işveren üzerindeki olası etkileri ve kapsamlı hukuki analiz.',
    'blog.read':'Devamını Oku','blog.all':'Tüm Makaleleri Gör',

    'contact.label':'İletişim','contact.title':'Danışmak için\nBize Ulaşın',
    'contact.desc':'Hukuki sorularınız için ücretsiz ön görüşme talep edebilirsiniz. Size en kısa sürede dönüş yaparız.',
    'contact.address.label':'Adres',
    'contact.address':'Konak Mah. Cumhuriyet Blv. No:XX\nKonak / İzmir',
    'contact.phone.label':'Telefon','contact.email.label':'E-posta',
    'contact.hours.label':'Çalışma Saatleri',
    'contact.hours':'Pzt – Cuma: 09:00 – 18:00 · Cmt: 10:00 – 14:00',
    'contact.map':'Google Maps burada görünecek',

    'form.name':'Ad Soyad','form.namePh':'Adınız Soyadınız',
    'form.email':'E-posta','form.phone':'Telefon',
    'form.subject':'Konu','form.subjectPh':'Hizmet Seçin',
    'form.message':'Mesajınız','form.messagePh':'Hukuki durumunuzu kısaca açıklayın…',
    'form.send':'Gönder','form.other':'Diğer',
    'form.privacy':'Bilgileriniz gizli tutulur.',
    'form.success':'Mesajınız iletildi. En kısa sürede dönüş yapacağız.',

    'footer.desc':'Hukuki süreçlerinizde güvenilir, deneyimli ve sonuç odaklı hizmet.',
    'footer.quick':'Hızlı Erişim','footer.services':'Hizmetler',
    'footer.contact':'İletişim','footer.rights':'Tüm hakları saklıdır.',
    'footer.privacy':'Gizlilik Politikası','footer.terms':'Kullanım Koşulları',
  },

  en: {
    'nav.subtitle':'Law Office',
    'nav.home':'Home','nav.about':'About','nav.services':'Services',
    'nav.whyus':'Why Us','nav.blog':'Blog','nav.contact':'Contact',

    'hero.overline':'Law Office · İzmir',
    'hero.title.line1':'Your Partner in',
    'hero.title.line2':'Legal Disputes',
    'hero.desc':'Standing by your side through every legal process — an experienced and determined partner for protecting your rights.',
    'hero.cta':'Request a Consultation','hero.explore':'Our Services',

    'about.label':'About Us','about.since':'Since',
    'about.title':'Combining Legal Strength\nwith Your Trust',
    'about.p1':'Aktaş &amp; Karaca Law Office has been active in İzmir since 2009, providing high-standard legal consultancy and representation services to its clients.',
    'about.p2':'Our experienced attorneys approach each client\'s case with a unique and strategic perspective, working relentlessly to achieve the best possible outcome.',
    'about.f1.title':'Experience','about.f1.text':'Over 15 years of uninterrupted legal practice.',
    'about.f2.title':'Reliability','about.f2.text':'Transparency, ethical principles, and full confidentiality.',
    'about.f3.title':'Determination','about.f3.text':'Resolute advocacy in every case, from start to finish.',

    'services.label':'Our Services','services.title':'Our Areas of Legal Expertise',
    'srv.administrative.title':'Administrative Law',
    'srv.administrative.desc':'Comprehensive representation in administrative procedures, annulment actions, and administrative litigation.',
    'srv.commercial.title':'Commercial Law',
    'srv.commercial.desc':'Company formation, commercial contracts, partnership disputes, and resolution of commercial conflicts.',
    'srv.family.title':'Family Law',
    'srv.family.desc':'Sensitive and professional counseling in divorce, custody, alimony, and asset division proceedings.',
    'srv.realestate.title':'Real Estate Law',
    'srv.realestate.desc':'Expert guidance in title deed disputes, condominium law, rental conflicts, and real estate transactions.',
    'srv.labor.title':'Labor Law',
    'srv.labor.desc':'Comprehensive support for workers and employers in wrongful termination, severance pay, and workplace accidents.',
    'srv.criminal.title':'Criminal Law',
    'srv.criminal.desc':'Effective defense during investigation and prosecution phases, and representation in complaint procedures.',

    'why.label':'Why Us','why.title':'The Values That\nSet Us Apart',
    'why.desc':'We build a trust-based, long-term relationship with every client, operating transparently and with a solution-oriented approach at every stage of legal proceedings.',
    'why.cta':'Free Initial Consultation',
    'why.f1.title':'Deep Legal Experience','why.f1.text':'15+ years of uninterrupted practice across a wide range of legal fields.',
    'why.f2.title':'Transparent Communication','why.f2.text':'We keep you informed at every stage and ensure no question goes unanswered.',
    'why.f3.title':'Full Confidentiality','why.f3.text':'Attorney-client privilege and personal data privacy are unwavering principles of our practice.',
    'why.f4.title':'Strategic Thinking','why.f4.text':'We treat every case as unique, jointly determining the most effective legal strategy.',
    'why.f5.title':'Accessibility','why.f5.text':'Services in Turkish, English, and German — reaching every client in their own language.',

    'blog.label':'Blog &amp; Articles','blog.title':'Legal Perspective',
    'blog.cat1':'Administrative Law','blog.date1':'April 15, 2026',
    'blog.title1':'Key Deadlines in Administrative Annulment Cases',
    'blog.exc1':'Calculating forfeiture periods in administrative court annulment cases and practical recommendations.',
    'blog.cat2':'Commercial Law','blog.date2':'March 28, 2026',
    'blog.title2':'Legal Due Diligence in Corporate Mergers',
    'blog.exc2':'The importance of legal due diligence in commercial mergers and acquisitions and the steps to follow.',
    'blog.cat3':'Labor Law','blog.date3':'March 10, 2026',
    'blog.title3':'2026 Severance Pay Reform: A Legal Assessment',
    'blog.exc3':'The potential effects of the pending severance pay regulation on employees and employers — a comprehensive legal analysis.',
    'blog.read':'Read More','blog.all':'View All Articles',

    'contact.label':'Contact','contact.title':'Reach Out\nto Us',
    'contact.desc':'You may request a free initial consultation for your legal questions. We will get back to you promptly.',
    'contact.address.label':'Address',
    'contact.address':'Konak Mah. Cumhuriyet Blv. No:XX\nKonak / İzmir',
    'contact.phone.label':'Phone','contact.email.label':'Email',
    'contact.hours.label':'Working Hours',
    'contact.hours':'Mon – Fri: 09:00 – 18:00 · Sat: 10:00 – 14:00',
    'contact.map':'Google Maps will appear here',

    'form.name':'Full Name','form.namePh':'Your Full Name',
    'form.email':'Email','form.phone':'Phone',
    'form.subject':'Subject','form.subjectPh':'Select a Service',
    'form.message':'Your Message','form.messagePh':'Briefly describe your legal situation…',
    'form.send':'Send','form.other':'Other',
    'form.privacy':'Your information is kept strictly confidential.',
    'form.success':'Your message has been received. We will respond as soon as possible.',

    'footer.desc':'Reliable, experienced, and result-oriented legal service.',
    'footer.quick':'Quick Links','footer.services':'Practice Areas',
    'footer.contact':'Contact','footer.rights':'All rights reserved.',
    'footer.privacy':'Privacy Policy','footer.terms':'Terms of Use',
  },

  de: {
    'nav.subtitle':'Anwaltskanzlei',
    'nav.home':'Startseite','nav.about':'Über uns','nav.services':'Leistungen',
    'nav.whyus':'Warum wir','nav.blog':'Blog','nav.contact':'Kontakt',

    'hero.overline':'Anwaltskanzlei · İzmir',
    'hero.title.line1':'Ihr Partner bei',
    'hero.title.line2':'Rechtsstreitigkeiten',
    'hero.desc':'An Ihrer Seite in jedem Rechtsverfahren — ein erfahrener und entschlossener Partner für den Schutz Ihrer Rechte.',
    'hero.cta':'Beratung anfragen','hero.explore':'Unsere Leistungen',

    'about.label':'Über uns','about.since':'Seit',
    'about.title':'Rechtliche Stärke\nverbunden mit Ihrem Vertrauen',
    'about.p1':'Die Kanzlei Aktaş &amp; Karaca ist seit 2009 in İzmir tätig und bietet ihren Mandanten hochwertige rechtliche Beratungs- und Vertretungsleistungen.',
    'about.p2':'Unser erfahrenes Anwaltsteam geht jeden Fall mit einem individuellen und strategischen Ansatz an und arbeitet unermüdlich für das bestmögliche Ergebnis.',
    'about.f1.title':'Erfahrung','about.f1.text':'Über 15 Jahre kontinuierliche anwaltliche Praxis.',
    'about.f2.title':'Zuverlässigkeit','about.f2.text':'Transparenz, ethische Grundsätze und vollständige Vertraulichkeit.',
    'about.f3.title':'Entschlossenheit','about.f3.text':'Entschlossene Interessenvertretung in jedem Fall, von Anfang bis Ende.',

    'services.label':'Unsere Leistungen','services.title':'Unsere Rechtsgebiete',
    'srv.administrative.title':'Verwaltungsrecht',
    'srv.administrative.desc':'Umfassende Vertretung in Verwaltungsverfahren, Anfechtungsklagen und verwaltungsgerichtlichen Verfahren.',
    'srv.commercial.title':'Handelsrecht',
    'srv.commercial.desc':'Unternehmensgründung, Handelsverträge, Gesellschafterstreitigkeiten und kaufmännische Konfliktlösung.',
    'srv.family.title':'Familienrecht',
    'srv.family.desc':'Einfühlsame und professionelle Beratung in Scheidungs-, Sorgerechts-, Unterhalts- und Vermögensverfahren.',
    'srv.realestate.title':'Immobilienrecht',
    'srv.realestate.desc':'Fachkundige Beratung in Grundbuchstreitigkeiten, Wohnungseigentumsrecht, Mietstreitigkeiten und Immobilientransaktionen.',
    'srv.labor.title':'Arbeitsrecht',
    'srv.labor.desc':'Umfassende Unterstützung bei ungerechtfertigter Kündigung, Abfindung und Arbeitsunfällen.',
    'srv.criminal.title':'Strafrecht',
    'srv.criminal.desc':'Effektive Verteidigung in Ermittlungs- und Strafverfolgungsphasen sowie Vertretung in Beschwerdeverfahren.',

    'why.label':'Warum wir','why.title':'Die Werte, die\nuns auszeichnen',
    'why.desc':'Wir bauen mit jedem Mandanten eine vertrauensbasierte, langfristige Beziehung auf und handeln transparent und lösungsorientiert.',
    'why.cta':'Kostenlose Erstberatung',
    'why.f1.title':'Tiefgreifende Rechtserfahrung','why.f1.text':'15+ Jahre kontinuierliche Praxis in einem breiten Spektrum rechtlicher Bereiche.',
    'why.f2.title':'Transparente Kommunikation','why.f2.text':'Wir informieren Sie in jeder Phase und stellen sicher, dass keine Frage unbeantwortet bleibt.',
    'why.f3.title':'Vollständige Vertraulichkeit','why.f3.text':'Das Anwaltsgeheimnis und der Datenschutz sind unveränderliche Grundsätze unserer Arbeit.',
    'why.f4.title':'Strategisches Denken','why.f4.text':'Wir behandeln jeden Fall individuell und bestimmen gemeinsam die effektivste Rechtsstrategie.',
    'why.f5.title':'Erreichbarkeit','why.f5.text':'Leistungen auf Türkisch, Englisch und Deutsch — für jeden Mandanten in seiner eigenen Sprache.',

    'blog.label':'Blog &amp; Artikel','blog.title':'Rechtliche Perspektive',
    'blog.cat1':'Verwaltungsrecht','blog.date1':'15. April 2026',
    'blog.title1':'Wichtige Fristen bei verwaltungsrechtlichen Anfechtungsklagen',
    'blog.exc1':'Berechnung von Ausschlussfristen bei Anfechtungsklagen vor Verwaltungsgerichten und praktische Empfehlungen.',
    'blog.cat2':'Handelsrecht','blog.date2':'28. März 2026',
    'blog.title2':'Rechtliche Due Diligence bei Unternehmensfusionen',
    'blog.exc2':'Die Bedeutung der rechtlichen Due Diligence bei Unternehmenszusammenschlüssen und die zu befolgenden Schritte.',
    'blog.cat3':'Arbeitsrecht','blog.date3':'10. März 2026',
    'blog.title3':'Abfindungsreform 2026: Eine rechtliche Bewertung',
    'blog.exc3':'Die möglichen Auswirkungen der geplanten Abfindungsregelung auf Arbeitnehmer und Arbeitgeber — eine umfassende rechtliche Analyse.',
    'blog.read':'Weiterlesen','blog.all':'Alle Artikel anzeigen',

    'contact.label':'Kontakt','contact.title':'Nehmen Sie\nKontakt auf',
    'contact.desc':'Sie können eine kostenlose Erstberatung für Ihre rechtlichen Fragen anfordern. Wir melden uns umgehend.',
    'contact.address.label':'Adresse',
    'contact.address':'Konak Mah. Cumhuriyet Blv. No:XX\nKonak / İzmir',
    'contact.phone.label':'Telefon','contact.email.label':'E-Mail',
    'contact.hours.label':'Öffnungszeiten',
    'contact.hours':'Mo – Fr: 09:00 – 18:00 · Sa: 10:00 – 14:00',
    'contact.map':'Google Maps erscheint hier',

    'form.name':'Vor- und Nachname','form.namePh':'Ihr vollständiger Name',
    'form.email':'E-Mail','form.phone':'Telefon',
    'form.subject':'Betreff','form.subjectPh':'Dienst auswählen',
    'form.message':'Ihre Nachricht','form.messagePh':'Beschreiben Sie kurz Ihre rechtliche Situation…',
    'form.send':'Senden','form.other':'Sonstiges',
    'form.privacy':'Ihre Daten werden streng vertraulich behandelt.',
    'form.success':'Ihre Nachricht wurde empfangen. Wir melden uns so schnell wie möglich.',

    'footer.desc':'Zuverlässige, erfahrene und ergebnisorientierte rechtliche Dienstleistungen.',
    'footer.quick':'Schnellzugriff','footer.services':'Rechtsgebiete',
    'footer.contact':'Kontakt','footer.rights':'Alle Rechte vorbehalten.',
    'footer.privacy':'Datenschutzrichtlinie','footer.terms':'Nutzungsbedingungen',
  },
};

/* ══ Aktif dil ══════════════════════════════════════════════ */
let lang = localStorage.getItem('lang') || 'tr';

function applyLang(l) {
  if (!T[l]) return;
  lang = l;
  localStorage.setItem('lang', l);
  document.documentElement.lang = l;
  const t = T[l];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] !== undefined) el.innerHTML = t[k].replace(/\n/g,'<br>');
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const k = el.getAttribute('data-i18n-placeholder');
    if (t[k]) el.placeholder = t[k];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    const a = btn.dataset.lang === l;
    btn.classList.toggle('active', a);
    btn.setAttribute('aria-pressed', String(a));
  });
}

document.querySelectorAll('.lang-btn').forEach(btn =>
  btn.addEventListener('click', () => applyLang(btn.dataset.lang))
);

/* ══ Navbar scroll ══════════════════════════════════════════ */
const navbar = document.getElementById('navbar');
function checkScroll() {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}
window.addEventListener('scroll', checkScroll, { passive: true });
checkScroll();

/* ══ Hamburger ══════════════════════════════════════════════ */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(open));
  mobileMenu.classList.toggle('open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
});

mobileMenu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded','false');
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden','true');
  })
);

/* ══ Dark / Light Tema ══════════════════════════════════════ */
let dark = localStorage.getItem('theme') === 'dark' ||
           (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme:dark)').matches);

function applyTheme(d) {
  dark = d;
  document.body.classList.toggle('dark', d);
  localStorage.setItem('theme', d ? 'dark' : 'light');
}

document.getElementById('themeToggle').addEventListener('click', () => applyTheme(!dark));
applyTheme(dark);

/* ══ Scroll Animasyonları (IntersectionObserver) ════════════ */
const animEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

animEls.forEach(el => io.observe(el));

/* Hero animasyonu sayfa yüklenince */
window.addEventListener('load', () => {
  document.querySelectorAll('.hero .reveal-up').forEach((el, i) => {
    setTimeout(() => el.classList.add('in'), 100 + i * 150);
  });
});

/* ══ Aktif nav link (scroll spy) ═══════════════════════════ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) cur = s.id;
  });
  navLinks.forEach(a => {
    const match = a.getAttribute('href') === `#${cur}`;
    a.classList.toggle('active', match);
  });
}, { passive: true });

/* ══ Back to Top ════════════════════════════════════════════ */
const btt = document.getElementById('backToTop');
window.addEventListener('scroll', () =>
  btt.classList.toggle('visible', window.scrollY > 500), { passive: true });
btt.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

/* ══ İletişim Formu ═════════════════════════════════════════ */
const form    = document.getElementById('contactForm');
const submit  = document.getElementById('submitBtn');
const success = document.getElementById('formSuccess');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.checkValidity()) { form.reportValidity(); return; }

  submit.disabled = true;
  submit.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

  /* Gerçek gönderim için burası fetch() ile değiştirilir */
  setTimeout(() => {
    submit.disabled = false;
    submit.innerHTML = `<span>${T[lang]['form.send']}</span> <i class="fas fa-paper-plane"></i>`;
    success.classList.add('show');
    form.reset();
    setTimeout(() => success.classList.remove('show'), 7000);
  }, 1100);
});

/* ══ Smooth Scroll ══════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a =>
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight - 8;
      window.scrollTo({ top, behavior:'smooth' });
    }
  })
);

/* ══ Footer yılı ════════════════════════════════════════════ */
document.getElementById('year').textContent = new Date().getFullYear();

/* ══ İlk dil yükle ══════════════════════════════════════════ */
applyLang(lang);
