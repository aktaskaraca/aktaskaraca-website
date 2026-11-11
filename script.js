/* Aktaş & Karaca — script.js (v3, sade) */
'use strict';

const T = {
  tr: {
    'brand.sub':'Hukuk Bürosu',
    'nav.office':'Büro','nav.areas':'Çalışma Alanları','nav.lawyers':'Avukatlar','nav.contact':'İletişim',
    'card.kicker':'Avukatlık ve Hukuki Danışmanlık','card.tel':'Tel',
    'office.p1':"Aktaş & Karaca Hukuk Bürosu, İzmir'de gerçek ve tüzel kişilere avukatlık ve hukuki danışmanlık hizmeti vermektedir.",
    'office.p2':'Büro; dava ve icra takibi, sözleşme hazırlanması ve incelenmesi, hukuki görüş ve arabuluculuk süreçlerinde çalışmaktadır.',
    'a1.t':'İdare Hukuku','a1.d':'İptal ve tam yargı davaları, idari işlemlere itiraz.',
    'a2.t':'Ticaret Hukuku','a2.d':'Ticari sözleşmeler, ortaklık uyuşmazlıkları, alacak davaları.',
    'a3.t':'Gayrimenkul Hukuku','a3.d':'Tapu iptali ve tescil, kira, kat karşılığı inşaat, ortaklığın giderilmesi.',
    'a4.t':'İş Hukuku','a4.d':'İşçilik alacakları, fesih uyuşmazlıkları, işveren danışmanlığı.',
    'a5.t':'Aile Hukuku','a5.d':'Boşanma, velayet, nafaka, mal rejiminin tasfiyesi.',
    'a6.t':'Ceza Hukuku','a6.d':'Soruşturma ve kovuşturma aşamalarında müdafilik ve katılan vekilliği.',
    'l.lawyer':'Avukat','l.lawyerMed':'Arabulucu & Avukat',
    'c.addr':'Adres','c.tel':'Telefon','c.mail':'E-posta','c.map':'Haritada göster','c.hours':'Çalışma Saatleri','c.hoursV':'Pazartesi – Cuma, 09.00 – 18.00 · Cumartesi, 10.00 – 14.00',
    'f.name':'Ad Soyad','f.email':'E-posta','f.phone':'Telefon','f.msg':'Mesajınız',
    'f.kvkkLink':'Aydınlatma Metni','f.kvkk':"'ni okudum.",'f.kvkkTitle':'KVKK Aydınlatma Metni',
    'f.send':'Gönder','f.ok':'Mesajınız iletildi. Büromuz sizinle iletişime geçecektir.','f.need':'Lütfen zorunlu alanları doldurunuz.'
  },
  en: {
    'brand.sub':'Law Office',
    'nav.office':'The Office','nav.areas':'Practice Areas','nav.lawyers':'Lawyers','nav.contact':'Contact',
    'card.kicker':'Attorneys at Law','card.tel':'Tel',
    'office.p1':'Aktaş & Karaca Law Office provides legal representation and advisory services to individuals and companies in İzmir.',
    'office.p2':'The office handles litigation and enforcement proceedings, the drafting and review of contracts, legal opinions and mediation.',
    'a1.t':'Administrative Law','a1.d':'Annulment and full remedy actions, objections to administrative acts.',
    'a2.t':'Commercial Law','a2.d':'Commercial contracts, shareholder disputes, receivables litigation.',
    'a3.t':'Real Estate Law','a3.d':'Title deed cancellation and registration, leases, construction-for-flats agreements, partition.',
    'a4.t':'Employment Law','a4.d':'Employee receivables, termination disputes, advice to employers.',
    'a5.t':'Family Law','a5.d':'Divorce, custody, alimony, liquidation of matrimonial property.',
    'a6.t':'Criminal Law','a6.d':'Defence and representation of complainants at investigation and trial stages.',
    'l.lawyer':'Attorney at Law','l.lawyerMed':'Mediator & Attorney at Law',
    'c.addr':'Address','c.tel':'Telephone','c.mail':'E-mail','c.map':'Show on map','c.hours':'Office Hours','c.hoursV':'Monday – Friday, 09.00 – 18.00 · Saturday, 10.00 – 14.00',
    'f.name':'Full Name','f.email':'E-mail','f.phone':'Telephone','f.msg':'Your Message',
    'f.kvkkLink':'Privacy Notice','f.kvkk':' — I have read it.','f.kvkkTitle':'Privacy Notice (KVKK)',
    'f.send':'Send','f.ok':'Your message has been received. The office will contact you.','f.need':'Please complete the required fields.'
  },
  de: {
    'brand.sub':'Anwaltskanzlei',
    'nav.office':'Kanzlei','nav.areas':'Tätigkeitsbereiche','nav.lawyers':'Anwälte','nav.contact':'Kontakt',
    'card.kicker':'Rechtsanwälte','card.tel':'Tel',
    'office.p1':'Die Anwaltskanzlei Aktaş & Karaca vertritt und berät Privatpersonen und Unternehmen in İzmir.',
    'office.p2':'Die Kanzlei ist in Prozess- und Vollstreckungsverfahren, bei der Ausarbeitung und Prüfung von Verträgen, in Rechtsgutachten sowie in Mediationsverfahren tätig.',
    'a1.t':'Verwaltungsrecht','a1.d':'Anfechtungs- und Schadensersatzklagen, Einwendungen gegen Verwaltungsakte.',
    'a2.t':'Handelsrecht','a2.d':'Handelsverträge, Gesellschafterstreitigkeiten, Forderungsklagen.',
    'a3.t':'Immobilienrecht','a3.d':'Grundbuchberichtigung, Miete, Bauverträge gegen Wohnungseigentum, Teilungsklagen.',
    'a4.t':'Arbeitsrecht','a4.d':'Arbeitnehmerforderungen, Kündigungsstreitigkeiten, Beratung von Arbeitgebern.',
    'a5.t':'Familienrecht','a5.d':'Scheidung, Sorgerecht, Unterhalt, Güterrechtsauseinandersetzung.',
    'a6.t':'Strafrecht','a6.d':'Verteidigung und Nebenklagevertretung im Ermittlungs- und Hauptverfahren.',
    'l.lawyer':'Rechtsanwalt','l.lawyerMed':'Mediator & Rechtsanwalt',
    'c.addr':'Adresse','c.tel':'Telefon','c.mail':'E-Mail','c.map':'Auf der Karte zeigen','c.hours':'Bürozeiten','c.hoursV':'Montag – Freitag, 09.00 – 18.00 · Samstag, 10.00 – 14.00',
    'f.name':'Name','f.email':'E-Mail','f.phone':'Telefon','f.msg':'Ihre Nachricht',
    'f.kvkkLink':'Datenschutzhinweis','f.kvkk':' — gelesen.','f.kvkkTitle':'Datenschutzhinweis (KVKK)',
    'f.send':'Senden','f.ok':'Ihre Nachricht ist eingegangen. Die Kanzlei wird sich bei Ihnen melden.','f.need':'Bitte füllen Sie die Pflichtfelder aus.'
  }
};

let lang = 'tr';
try { lang = localStorage.getItem('lang') || 'tr'; } catch (e) {}
if (!T[lang]) lang = 'tr';

function applyLang(l) {
  lang = l;
  try { localStorage.setItem('lang', l); } catch (e) {}
  document.documentElement.lang = l;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = T[l][el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
}
document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));

const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

applyLang(lang);
