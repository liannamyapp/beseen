(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  try {
    gsap.registerPlugin(ScrollTrigger, CustomEase);
    CustomEase.create("seen", "0.22, 1, 0.36, 1");
  } catch (err) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerEase("seen", "power3.out");
  }

  const copy = {
    en: {
      "nav.work": "Work",
      "nav.services": "Services",
      "nav.pricing": "Pricing",
      "nav.contact": "Contact",
      "nav.cta": "Let’s talk",
      "hero.where": "Praha · Yerevan",
      "hero.for": "For businesses",
      "hero.l1": "Most businesses",
      "hero.l2": "are not seen.",
      "hero.lede": "We change that. Every month you get one number that decides, and three that explain it.",
      "hero.cta": "Start a conversation",
      "hero.work": "See the work",
      "hero.caption": "The dot is the crop. Portraits, plates, rooms — never a square.",
      "problem.kicker": "The problem",
      "problem.title": "Most brands struggle to be seen and heard. That is the work.",
      "problem.1": "Low visibility on Google",
      "problem.2": "A forgettable social presence",
      "problem.3": "The wrong audience, well targeted",
      "problem.4": "Content with no spine",
      "problem.5": "Marketing that is not measured",
      "problem.6": "Print that costs more than it returns",
      "rooms.kicker": "Rooms we keep",
      "rooms.title": "The names on the door.",
      "rooms.aside": "Five hospitality rooms. Yerevan, Türkiye, Argentina. The job is the same: the night is visible before a guest arrives.",
      "r.myata": "We film the grill, the lounge, the hour after midnight. Reels and stills for Instagram and TikTok. Monthly SMM so the room stays in the phone.",
      "r.better": "Atmosphere film, plate stills, guest-facing copy. The café as it is at 11:00 and at 19:00.",
      "r.bellagio": "Atmosphere reels. Stairs, tables, the cut of the room after dusk. Shot for the feed, not for a brochure.",
      "r.deniks": "Process film. Hands, dough, the morning. Content for the feed and for ads.",
      "r.sushi": "Plate films. Close, bright, made to stop a thumb. Cut for every network we run.",
      "services.kicker": "What we do",
      "services.title": "Leave the marketing to us.",
      "services.note": "We run the month: film, feed, ads, and one report. You run the room.",
      "s1.title": "Social media, kept.",
      "s1.body": "Instagram, TikTok, Facebook, YouTube. 12–20 professional posts a month, written and scheduled. A shared calendar you approve before anything goes live. Captions, tags, and language for the city. A monthly read of reach, saves, and what actually booked a table.",
      "s2.title": "Ads that know who is hungry.",
      "s2.body": "Google, Seznam, TripAdvisor, Yelp. We set the accounts, split tourists from locals, and build a funnel that respects the budget. Weekly optimisation. We track cost per reservation — not vanity reach. No spray. No pray.",
      "s3.title": "Pictures and films of the room.",
      "s3.body": "On-site photo and film. Lighting, food styling, chef hands, the service floor after nine. Reels cut for TikTok and Instagram. A library you can use on the site, in ads, and in print. Shot for the feed, not for a brochure.",
      "s4.title": "One number. Three that explain it.",
      "s4.body": "Eight KPIs, every month: total reach, new followers, engagement, Reels views, messages and bookings, average CPC, the winning post, new reviews. Then what we change next. One month gives context. Three months tell the truth.",
      "s4.meta": "Sent at the start of the month. Always.",
      "s5.title": "A site that does not apologise.",
      "s5.body": "The digital front door. Fast on a phone, menu with prices and pictures, a reservation widget, Czech / English / Armenian if the room needs it. Lookers become bookers.",
      "s6.title": "The room next door.",
      "s6.body": "Competitor posting, the content that worked, tone, review velocity, search rank. Hospitality and social trends. Target behaviour. Then a written plan for the next thirty days.",
      "m1.title": "Film the room",
      "m1.body": "On-site stills and reels. Plates, hands, the hour that sells the night.",
      "m2.title": "Keep the feed",
      "m2.body": "12–20 posts. Calendar you sign off. Copy in the languages the city uses.",
      "m3.title": "Spend where hunger is",
      "m3.body": "Google, Seznam, maps, reviews. Tourists and locals as two audiences. Weekly spend check.",
      "m4.title": "Send the number",
      "m4.body": "Eight KPIs on day one. Then the three changes for the month ahead.",
      "work.kicker": "Selected rooms",
      "work.title": "Work that was meant to be watched.",
      "work.aside": "Yerevan, Türkiye, Argentina. Food, rooms, hands. Scroll sideways.",
      "work.process": "On set",
      "work.making": "Making the film",
      "w.myata": "Reels and stills of the grill, the lounge, the night.",
      "w.better": "Café atmosphere. Plates, light, the two sittings.",
      "w.sushi": "Plate films cut for the feed and for ads.",
      "w.deniks": "Bakery process. Hands, dough, the morning.",
      "w.bellagio": "Atmosphere reels. Stairs, tables, after dusk.",
      "w.process": "How the month is shot, before it is posted.",
      "stills.kicker": "Stills",
      "stills.note": "We shoot the room as it is. Then we crop it into a circle.",
      "results.kicker": "Proof, not adjectives",
      "results.caption": "more enquiries in 90 days.",
      "results.not": "Not “transforming brands through digital excellence.”",
      "kpi.1": "Total reach",
      "kpi.2": "New followers",
      "kpi.3": "Engagement",
      "kpi.4": "Reels views",
      "kpi.5": "Enquiries & bookings",
      "kpi.6": "Average CPC",
      "kpi.7": "Best post of the month",
      "kpi.8": "New reviews",
      "pack.kicker": "How we work together",
      "pack.title": "Pick a depth. Not a gimmick.",
      "p1.name": "Build presence",
      "p1.1": "Brand and feed audit — 4 900 Kč",
      "p1.2": "12 posts / month + calendar — 9 900 Kč",
      "p1.3": "Monthly analytics, 8 KPIs — 2 900 Kč",
      "p1.4": "Local competitor read — 2 200 Kč",
      "p2.name": "Scale confidence",
      "p2.1": "Everything in Starter — 19 900 Kč",
      "p2.2": "Paid ads, 1 channel — 7 900 Kč",
      "p2.3": "Influencer outreach, 2 / mo — 4 900 Kč",
      "p2.4": "Calls every two weeks — 2 200 Kč",
      "p3.name": "Full partner",
      "p3.1": "Everything in Growth — 34 900 Kč",
      "p3.2": "Multi-channel ads — 8 900 Kč",
      "p3.3": "Full photo and reel production — 12 900 Kč",
      "p3.4": "Weekly CMO support — 3 200 Kč",
      "p3.price": "from 59 900 Kč / mo · ~€2,390",
      "pack.mo": "/ mo",
      "calc.kicker": "The sum",
      "calc.title": "Add what the room needs.",
      "calc.lede": "Starter, Growth, or Pro — then the extras. Ad spend is not in the number. VAT is not in the number.",
      "calc.tier": "Package",
      "calc.addons": "Add-ons",
      "calc.posts": "+8 posts (20 / month) — 6 900 Kč",
      "calc.ads": "Paid ads, extra channel — 4 900 Kč",
      "calc.infl": "Influencer outreach, 2 / mo — 4 900 Kč",
      "calc.shoot": "On-site shoot, one day — 12 900 Kč",
      "calc.web": "Website visualisation — 19 900 Kč",
      "calc.months": "Months",
      "calc.bill": "Itemised",
      "calc.note": "Excl. VAT. Paid media stays on your accounts. Three months is the honest minimum.",
      "calc.send": "Send this sum",
      "calc.monthly": "Monthly retainer",
      "calc.once": "One-time",
      "calc.for": "for",
      "contact.kicker": "A quiet next step",
      "contact.title": "Questions?",
      "contact.lede": "Tell us the room. We will tell you what is missing.",
      "form.name": "Name",
      "form.email": "Email",
      "form.room": "Restaurant / city",
      "form.note": "What should be seen?",
      "form.send": "Send",
      "form.ok": "Sent. We will write back.",
      "footer.line": "Plain. Numerate. Unhurried.",
    },
    cs: {
      "nav.work": "Práce",
      "nav.services": "Služby",
      "nav.pricing": "Ceník",
      "nav.contact": "Kontakt",
      "nav.cta": "Napište nám",
      "hero.where": "Praha · Jerevan",
      "hero.for": "Pro restaurace",
      "hero.l1": "Většina restaurací",
      "hero.l2": "není vidět.",
      "hero.lede": "My to měníme. Každý měsíc dostanete jedno číslo, které rozhoduje, a tři, která ho vysvětlují.",
      "hero.cta": "Začněme rozhovor",
      "hero.work": "Podívejte se na práci",
      "hero.caption": "Tečka je ořez. Portréty, talíře, interiéry — nikdy čtverec.",
      "problem.kicker": "Problém",
      "problem.title": "Většina značek bojuje s tím, aby byly vidět a slyšet. To je přesně ta práce.",
      "problem.1": "Nízká viditelnost na Googlu",
      "problem.2": "Nevýrazná prezentace na sociálních sítích",
      "problem.3": "Špatně cílené publikum",
      "problem.4": "Obsah bez páteře",
      "problem.5": "Marketing, který se neměří",
      "problem.6": "Offline, který stojí víc, než vrací",
      "rooms.kicker": "Provozy, které držíme",
      "rooms.title": "Jména na dveřích.",
      "rooms.aside": "Pět gastronomických provozů. Jerevan, Turecko, Argentina. Stejná práce: noc je vidět dřív, než host přijde.",
      "r.myata": "Natáčíme gril, lounge, hodinu po půlnoci. Reels a fotky na Instagram a TikTok. Měsíční SMM, aby provoz zůstal v telefonu.",
      "r.better": "Film atmosféry, talíře, texty pro hosty. Kavárna v 11:00 i v 19:00.",
      "r.bellagio": "Reels atmosféry. Schody, stoly, řez místnosti po setmění. Natočeno pro feed, ne pro brožuru.",
      "r.deniks": "Procesní film. Ruce, těsto, ráno. Obsah do feedu i do reklam.",
      "r.sushi": "Filmy talířů. Zblízka, jasně, aby zastavily palec. Střih pro každou síť, kterou vedeme.",
      "services.kicker": "Co děláme",
      "services.title": "Přenechte marketing nám.",
      "services.note": "Vedeme měsíc: film, feed, reklamy a jednu zprávu. Vy vedete provoz.",
      "s1.title": "Sociální sítě, v klidu.",
      "s1.body": "Instagram, TikTok, Facebook, YouTube. 12–20 profesionálních příspěvků měsíčně, napsaných a naplánovaných. Sdílený kalendář, který schválíte, než něco vyjde. Titulky, tagy a jazyk města. Měsíční čtení dosahu, uložení a toho, co opravdu obsadilo stůl.",
      "s2.title": "Reklamy, které vědí, kdo má hlad.",
      "s2.body": "Google, Seznam, TripAdvisor, Yelp. Nastavíme účty, oddělíme turisty od místních a postavíme funnel, který respektuje rozpočet. Týdenní optimalizace. Sledujeme cenu za rezervaci — ne marný dosah. Bez rozstřiku.",
      "s3.title": "Obrazy a filmy z provozu.",
      "s3.body": "Focení a film na místě. Světlo, food styling, ruce kuchaře, sál po deváté. Reels střižené pro TikTok a Instagram. Knihovna pro web, reklamy i tisk. Natočeno pro feed, ne pro brožuru.",
      "s4.title": "Jedno číslo. Tři, která ho vysvětlí.",
      "s4.body": "Osm KPI každý měsíc: celkový dosah, noví sledující, zapojení, zhlédnutí Reels, zprávy a rezervace, průměrné CPC, nejlepší příspěvek, nové recenze. Pak co měníme. Jeden měsíc dává kontext. Tři měsíce řeknou pravdu.",
      "s4.meta": "Vždy na začátku měsíce.",
      "s5.title": "Web, který se neomlouvá.",
      "s5.body": "Digitální vchod. Rychlý v telefonu, menu s cenami a fotografiemi, widget na rezervaci, čeština / angličtina / arménština, pokud to provoz potřebuje. Z prohlížečů jsou hosté.",
      "s6.title": "Místnost vedle.",
      "s6.body": "Aktivita konkurence, obsah, který zabral, tón, tempo recenzí, pozice ve vyhledávání. Trendy v gastronomii i na sítích. Chování cílovky. Pak písemný plán na dalších třicet dní.",
      "m1.title": "Natočit provoz",
      "m1.body": "Fotky a reels na místě. Talíře, ruce, hodina, která prodá noc.",
      "m2.title": "Udržet feed",
      "m2.body": "12–20 příspěvků. Kalendář, který podepíšete. Texty v jazycích, které město používá.",
      "m3.title": "Utratit tam, kde je hlad",
      "m3.body": "Google, Seznam, mapy, recenze. Turisté a místní jako dvě publika. Týdenní kontrola rozpočtu.",
      "m4.title": "Poslat číslo",
      "m4.body": "Osm KPI první den. Pak tři změny na měsíc dopředu.",
      "work.kicker": "Vybrané provozy",
      "work.title": "Práce, která se má sledovat.",
      "work.aside": "Jerevan, Turecko, Argentina. Jídlo, interiéry, ruce. Posouvejte do strany.",
      "work.process": "Na place",
      "work.making": "Jak film vzniká",
      "w.myata": "Reels a fotky grilu, lounge, noci.",
      "w.better": "Atmosféra kavárny. Talíře, světlo, dvě sezení.",
      "w.sushi": "Filmy talířů pro feed i reklamy.",
      "w.deniks": "Pekárna. Ruce, těsto, ráno.",
      "w.bellagio": "Reels atmosféry. Schody, stoly, po setmění.",
      "w.process": "Jak se měsíc natáčí, než se zveřejní.",
      "stills.kicker": "Fotografie",
      "stills.note": "Fotíme provoz tak, jak je. Pak ho ořízneme do kruhu.",
      "results.kicker": "Důkaz, ne přídavná jména",
      "results.caption": "více poptávek za 90 dní.",
      "results.not": "Ne „transforming brands through digital excellence.“",
      "kpi.1": "Celkový dosah",
      "kpi.2": "Noví sledující",
      "kpi.3": "Míra zapojení",
      "kpi.4": "Zhlédnutí Reels",
      "kpi.5": "Poptávky a rezervace",
      "kpi.6": "Průměrné CPC",
      "kpi.7": "Nejúspěšnější příspěvek",
      "kpi.8": "Nové recenze",
      "pack.kicker": "Jak spolu pracujeme",
      "pack.title": "Vyberte hloubku. Ne trik.",
      "p1.name": "Založit přítomnost",
      "p1.1": "Audit značky a feedu — 4 900 Kč",
      "p1.2": "12 příspěvků / měsíc + kalendář — 9 900 Kč",
      "p1.3": "Měsíční analytika, 8 KPI — 2 900 Kč",
      "p1.4": "Čtení místní konkurence — 2 200 Kč",
      "p2.name": "Škálovat jistotu",
      "p2.1": "Vše ze Starteru — 19 900 Kč",
      "p2.2": "Placená reklama, 1 kanál — 7 900 Kč",
      "p2.3": "Influencer outreach, 2 / měs. — 4 900 Kč",
      "p2.4": "Hovory každé dva týdny — 2 200 Kč",
      "p3.name": "Plný partner",
      "p3.1": "Vše z Growth — 34 900 Kč",
      "p3.2": "Reklama na více kanálech — 8 900 Kč",
      "p3.3": "Plná foto a reel produkce — 12 900 Kč",
      "p3.4": "Týdenní CMO podpora — 3 200 Kč",
      "p3.price": "od 59 900 Kč / měs. · ~€2,390",
      "pack.mo": "/ měs.",
      "calc.kicker": "Součet",
      "calc.title": "Přidejte, co provoz potřebuje.",
      "calc.lede": "Starter, Growth nebo Pro — pak příplatky. Mediální rozpočet v čísle není. DPH v čísle není.",
      "calc.tier": "Balíček",
      "calc.addons": "Příplatky",
      "calc.posts": "+8 příspěvků (20 / měsíc) — 6 900 Kč",
      "calc.ads": "Placená reklama, další kanál — 4 900 Kč",
      "calc.infl": "Influencer outreach, 2 / měs. — 4 900 Kč",
      "calc.shoot": "Natáčení na místě, jeden den — 12 900 Kč",
      "calc.web": "Vizualizace webu — 19 900 Kč",
      "calc.months": "Měsíce",
      "calc.bill": "Rozpis",
      "calc.note": "Bez DPH. Mediální rozpočet zůstává na vašich účtech. Tři měsíce jsou poctivé minimum.",
      "calc.send": "Odeslat tento součet",
      "calc.monthly": "Měsíční retainer",
      "calc.once": "Jednorázově",
      "calc.for": "za",
      "contact.kicker": "Tichý další krok",
      "contact.title": "Otázky?",
      "contact.lede": "Řekněte nám provoz. My řekneme, co chybí.",
      "form.name": "Jméno",
      "form.email": "E-mail",
      "form.room": "Restaurace / město",
      "form.note": "Co má být vidět?",
      "form.send": "Odeslat",
      "form.ok": "Odesláno. Ozveme se.",
      "footer.line": "Věcně. Číselně. Bez spěchu.",
    },
  };

  let lang = localStorage.getItem("beseen-lang") || "en";
  let lastQuote = "";
  let renderQuote = () => {};

  const applyLang = (next) => {
    lang = next;
    localStorage.setItem("beseen-lang", lang);
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const val = copy[lang][key];
      if (val) el.textContent = val;
    });
    $$(".lang button").forEach((btn) => {
      const on = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", String(on));
    });
    renderQuote();
  };

  $$(".lang button").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });
  applyLang(lang);

  $("#year").textContent = new Date().getFullYear();

  const fmtClock = (timeZone) =>
    new Intl.DateTimeFormat("en-GB", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());

  const tickClocks = () => {
    $$("[data-clock]").forEach((el) => {
      const zone = el.dataset.clock;
      const b = el.querySelector("b");
      if (b) b.textContent = fmtClock(zone);
    });
  };
  tickClocks();
  setInterval(tickClocks, 1000 * 15);

  const nav = $("#nav");
  const toggle = $(".nav-toggle");
  const menu = $("#mobile-menu");

  const setMenu = (open) => {
    document.body.classList.toggle("is-menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.hidden = !open;
  };

  toggle.addEventListener("click", () => setMenu(menu.hidden));
  $$("a", menu).forEach((a) => a.addEventListener("click", () => setMenu(false)));

  const cursor = $(".cursor");
  const cursorLabel = $(".cursor-label");

  if (finePointer) {
    window.addEventListener("pointermove", (e) => {
      if (document.body.classList.contains("is-loading")) return;
      cursor.classList.add("is-on");
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      const media = e.target.closest("[data-cursor]");
      const target = e.target.closest("a, button, input, textarea, [data-cursor]");
      cursor.classList.toggle("is-hover", Boolean(target) && !media);
      cursor.classList.toggle("is-media", Boolean(media));
      cursorLabel.textContent = media ? media.dataset.cursor : "";
    }, { passive: true });
  }

  $$(".magnetic").forEach((el) => {
    if (!finePointer) return;
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      gsap.to(el, { x: x * 0.12, y: y * 0.12, duration: 0.12, ease: "none" });
    });
    el.addEventListener("pointerleave", () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.15, ease: "none" });
    });
  });

  $$(".work-card, .orb").forEach((card) => {
    const video = card.querySelector("video");
    if (!video) return;
    const play = () => video.play().catch(() => {});
    const pause = () => {
      if (card.classList.contains("orb")) return;
      video.pause();
    };
    card.addEventListener("pointerenter", play);
    card.addEventListener("pointerleave", pause);
    if (card.classList.contains("orb")) play();
  });

  const form = $("#contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get("name") || "";
    const email = data.get("email") || "";
    const room = data.get("room") || "";
    const note = data.get("note") || "";
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nRoom: ${room}\n\n${note}${lastQuote ? `\n\n${lastQuote}` : ""}`
    );
    window.location.href = `mailto:info@hr4eu.cz?subject=${encodeURIComponent("BE SEEN")}&body=${body}`;
    $("#form-status").textContent = copy[lang]["form.ok"];
    form.reset();
  });

  const quoteForm = $("#quote-form");
  const fmtCzk = (n) => `${new Intl.NumberFormat("cs-CZ", { maximumFractionDigits: 0 }).format(n)} Kč`;
  const fmtEur = (n) =>
    `€${new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 }).format(Math.round(n / 25.1 / 10) * 10)}`;

  const tierLines = {
    starter: [
      { czk: 4900, en: "Brand audit & strategy", cs: "Audit značky a strategie" },
      { czk: 9900, en: "12 posts / month + calendar", cs: "12 příspěvků / měsíc + kalendář" },
      { czk: 2900, en: "Monthly analytics, 8 KPIs", cs: "Měsíční analytika, 8 KPI" },
      { czk: 2200, en: "Competitor read", cs: "Čtení konkurence" },
    ],
    growth: [
      { czk: 7900, en: "Paid ads, 1 channel", cs: "Placená reklama, 1 kanál" },
      { czk: 4900, en: "Influencer outreach, 2 / mo", cs: "Influencer outreach, 2 / měs." },
      { czk: 2200, en: "Calls every two weeks", cs: "Hovory každé dva týdny" },
    ],
    pro: [
      { czk: 8900, en: "Multi-channel ads", cs: "Reklama na více kanálech" },
      { czk: 12900, en: "Full photo & reel production", cs: "Plná foto a reel produkce" },
      { czk: 3200, en: "Weekly CMO support", cs: "Týdenní CMO podpora" },
    ],
  };

  const addons = {
    posts20: { czk: 6900, once: false, skip: [], en: "+8 posts (20 / month)", cs: "+8 příspěvků (20 / měsíc)" },
    ads: { czk: 4900, once: false, skip: ["pro"], en: "Extra ads channel", cs: "Další reklamní kanál" },
    infl: { czk: 4900, once: false, skip: ["growth", "pro"], en: "Influencer outreach, 2 / mo", cs: "Influencer outreach, 2 / měs." },
    shoot: { czk: 12900, once: true, skip: [], en: "On-site shoot, one day", cs: "Natáčení na místě, jeden den" },
    web: { czk: 19900, once: true, skip: [], en: "Website visualisation", cs: "Vizualizace webu" },
  };

  const linesFor = (tier) => {
    const rows = [...tierLines.starter];
    if (tier === "growth" || tier === "pro") rows.push(...tierLines.growth);
    if (tier === "pro") rows.push(...tierLines.pro);
    return rows;
  };

  const setTier = (tier) => {
    const radio = quoteForm?.querySelector(`input[name="tier"][value="${tier}"]`);
    if (radio) radio.checked = true;
    $$(".pack[data-tier]").forEach((el) => {
      const on = el.dataset.tier === tier;
      el.classList.toggle("is-selected", on);
      el.setAttribute("aria-pressed", String(on));
    });
    Object.entries(addons).forEach(([id, meta]) => {
      const input = quoteForm?.querySelector(`input[value="${id}"]`);
      if (!input) return;
      const locked = meta.skip.includes(tier);
      input.disabled = locked;
      if (locked) input.checked = false;
      input.closest(".calc-choice")?.classList.toggle("is-locked", locked);
    });
    renderQuote();
  };

  renderQuote = () => {
    if (!quoteForm) return;
    const t = copy[lang];
    const tier = quoteForm.querySelector("input[name=tier]:checked")?.value || "starter";
    const months = Number(quoteForm.months.value) || 3;
    const monthsVal = $("#months-val");
    if (monthsVal) monthsVal.textContent = String(months);

    const monthlyLines = linesFor(tier).map((row) => ({ label: row[lang] || row.en, czk: row.czk }));
    const extraMonth = [];
    const extraOnce = [];
    $$("input[name=addon]:checked", quoteForm).forEach((input) => {
      const meta = addons[input.value];
      if (!meta || meta.skip.includes(tier)) return;
      const line = { label: meta[lang] || meta.en, czk: meta.czk };
      (meta.once ? extraOnce : extraMonth).push(line);
    });

    const monthly = monthlyLines.reduce((s, l) => s + l.czk, 0) + extraMonth.reduce((s, l) => s + l.czk, 0);
    const once = extraOnce.reduce((s, l) => s + l.czk, 0);
    const total = monthly * months + once;

    const list = $("#calc-lines");
    list.replaceChildren();
    const addLine = (label, amount) => {
      const li = document.createElement("li");
      const name = document.createElement("span");
      name.textContent = label;
      const amt = document.createElement("span");
      amt.className = "amt";
      amt.textContent = fmtCzk(amount);
      li.append(name, amt);
      list.append(li);
    };
    [...monthlyLines, ...extraMonth].forEach((l) => addLine(l.label, l.czk));
    extraOnce.forEach((l) => addLine(`${l.label} · ${t["calc.once"]}`, l.czk));

    $("#calc-month").textContent = `${t["calc.monthly"]}: ${fmtCzk(monthly)} · ${fmtEur(monthly)}`;
    $("#calc-total").textContent = `${fmtCzk(total)}  ·  ${fmtEur(total)}`;

    lastQuote = [
      "BE SEEN quote",
      `Package: ${tier}`,
      ...[...monthlyLines, ...extraMonth].map((l) => `  ${l.label}: ${fmtCzk(l.czk)} / mo`),
      ...extraOnce.map((l) => `  ${l.label}: ${fmtCzk(l.czk)} ${t["calc.once"]}`),
      `${t["calc.monthly"]}: ${fmtCzk(monthly)} (${fmtEur(monthly)})`,
      `${t["calc.months"]}: ${months}`,
      `Total: ${fmtCzk(total)} (${fmtEur(total)}) excl. VAT`,
    ].join("\n");
  };

  if (quoteForm) {
    quoteForm.addEventListener("input", renderQuote);
    quoteForm.addEventListener("change", (e) => {
      if (e.target.name === "tier") setTier(e.target.value);
    });
    $$(".pack[data-tier]").forEach((el) => {
      const pick = () => setTier(el.dataset.tier);
      el.addEventListener("click", pick);
      el.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          pick();
        }
      });
    });
    $("#calc-send")?.addEventListener("click", () => {
      const note = form.querySelector("textarea[name=note]");
      if (note && lastQuote) note.value = lastQuote;
    });
    setTier("starter");
  }

  const loader = $("#loader");
  const boot = async () => {
    const tl = gsap.timeline({ defaults: { ease: "seen" } });
    tl.from(".loader-lockup .be i", { scale: 0, duration: reduced ? 0.01 : 0.55 })
      .from(".loader-lockup .be, .loader-lockup .seen", {
        y: 28,
        opacity: 0,
        stagger: 0.1,
        duration: 0.65,
      }, "-=0.25")
      .to(loader, {
        yPercent: -100,
        duration: reduced ? 0.01 : 0.85,
        delay: reduced ? 0 : 0.28,
        onComplete: () => {
          loader.remove();
          document.body.classList.remove("is-loading");
          onScroll();
          intro();
        },
      });
  };

  const intro = () => {
    if (reduced) return;
    try {
      const title = new SplitType(".hero-title .line", { types: "words" });
      gsap.from(title.words, {
        yPercent: 110,
        opacity: 0,
        stagger: 0.06,
        duration: 1,
        ease: "seen",
      });
    } catch (err) {
      gsap.from(".hero-title", { y: 24, opacity: 0, duration: 0.9, ease: "seen" });
    }
    gsap.from(".hero-lede, .hero-actions, .eyebrow, .hero-device", {
      y: 28,
      opacity: 0,
      stagger: 0.08,
      duration: 0.9,
      delay: 0.25,
      ease: "seen",
    });
  };

  let lenis;
  if (!reduced && window.Lenis) {
    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  const progress = $(".scroll-progress");
  const progressDot = $(".scroll-progress-dot");
  const onScroll = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    const max = document.documentElement.scrollHeight - innerHeight;
    const p = max > 0 ? y / max : 0;
    progressDot.style.top = `${Math.max(16, p * (innerHeight - 32))}px`;
    progress.classList.toggle("is-on", y > 48);
    nav.classList.toggle("is-solid", y > 40);

    if (document.body.classList.contains("is-loading")) {
      nav.classList.remove("is-on-dark");
      return;
    }

    const sample = document.elementFromPoint(Math.min(innerWidth / 2, 480), 96);
    const dark = Boolean(
      sample && sample.closest(".work, .contact, .footer") && !sample.closest(".nav, .loader, .cursor")
    );
    nav.classList.toggle("is-on-dark", dark);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  if (lenis) lenis.on("scroll", onScroll);

  if (!reduced) {
    gsap.utils.toArray(".problem-list li, .service-list li, .room-row, .practice li, .pack, .kpis li").forEach((el, i) => {
      gsap.from(el, {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "seen",
        delay: (i % 6) * 0.03,
        scrollTrigger: { trigger: el, start: "top 88%" },
      });
    });

    gsap.from(".still-dot", {
      y: 28,
      opacity: 0,
      stagger: 0.08,
      duration: 0.85,
      ease: "seen",
      scrollTrigger: { trigger: ".stills", start: "top 80%" },
    });

    const mega = $(".mega-num");
    const obj = { n: 0 };
    ScrollTrigger.create({
      trigger: ".mega",
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          n: 38,
          duration: 1.6,
          ease: "seen",
          onUpdate: () => {
            mega.textContent = Math.round(obj.n);
          },
        });
      },
    });

    const track = $(".work-track");
    const pin = $(".work-pin");
    if (track && pin && innerWidth > 980) {
      const getScroll = () => track.scrollWidth - innerWidth + 80;
      gsap.to(track, {
        x: () => -getScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "top 18%",
          end: () => `+=${getScroll()}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }

    gsap.to(".orb", {
      y: 40,
      ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
    });
  } else {
    $(".mega-num").textContent = "38";
  }

  boot();
})();
