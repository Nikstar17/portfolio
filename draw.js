// Tipp-Effekt: Texte werden Zeichen für Zeichen getippt, sobald sie
// über das untere Viertel des Bildschirms gescrollt sind. Jeder Text
// startet für sich, leicht versetzt, mit ungleichmäßigem Tempo.
// Ohne JavaScript oder bei „Bewegung reduzieren“ steht der Text einfach da.
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  // dezent: nur Einleitung und Kontaktsatz
  const TARGETS = [
    '.lead',
    '.titleblock .say',
  ].join(',');

  // Startverzögerung für Texte im Kopf, damit sie nach dem Namen kommen
  const HEAD_DELAY = new Map([
    ['.lead', 500],
  ]);

  const BASE = 5; // ms pro Zeichen
  const MAX = 700; // längster Text ist nach etwa so vielen ms fertig
  const rand = (a, b) => a + Math.random() * (b - a);

  // Alle Textknoten in einzelne, zunächst unsichtbare Zeichen zerlegen.
  // Elemente wie Links bleiben erhalten; die Zeichen nehmen schon Platz
  // ein, dadurch springt das Layout nicht.
  function prepare(el) {
    const chars = [];
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      const text = node.nodeValue.replace(/\s+/g, ' ');
      if (!text.trim() && !text) continue;
      const frag = document.createDocumentFragment();
      for (const c of text) {
        const s = document.createElement('span');
        s.className = 'ch';
        s.textContent = c;
        frag.appendChild(s);
        chars.push(s);
      }
      node.replaceWith(frag);
    }
    // führende und doppelte Leerzeichen nicht „tippen“
    return chars.filter((s, i) => !(s.textContent === ' ' && (i === 0 || chars[i - 1].textContent === ' ')));
  }

  // Zeitplan je Zeichen (leicht unregelmäßig, kurze Pausen nach Satzzeichen),
  // dann pro Bild alle fälligen Zeichen zeigen. So ist das Tempo unabhängig
  // von der Mindestverzögerung von setTimeout.
  function type(chars, base = BASE, max = MAX) {
    if (!chars.length) return;
    const times = [];
    let t = 0;
    for (const c of chars) {
      times.push(t);
      const ch = c.textContent;
      let w = base * rand(0.7, 1.3);
      if (ch === ' ') w = base * 0.6;
      else if (/[.:]/.test(ch)) w = base * 4;
      else if (ch === ',') w = base * 2;
      t += w;
    }
    const scale = t > max ? max / t : 1;
    let i = 0;
    let last = null;
    const start = performance.now();
    const frame = () => {
      const elapsed = performance.now() - start;
      while (i < chars.length && times[i] * scale <= elapsed) chars[i++].classList.add('on');
      if (last) last.classList.remove('cur');
      if (i < chars.length) {
        last = chars[Math.max(0, i - 1)];
        last.classList.add('cur');
        setTimeout(frame, 16);
      }
    };
    frame();
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const el = entry.target;
        if (entry.boundingClientRect.bottom < 0) {
          // schon oberhalb (z. B. nach Neuladen weiter unten): sofort zeigen
          io.unobserve(el);
          for (const c of el._chars) c.classList.add('on');
          continue;
        }
        if (!entry.isIntersecting) continue;
        io.unobserve(el);
        const delay = (el._delay || 0) + rand(0, 140);
        // der Kontaktsatz wird gemächlich getippt, wie von Hand
        const slow = el.matches('.titleblock .say');
        setTimeout(() => (slow ? type(el._chars, 55, 4000) : type(el._chars)), delay);
      }
    },
    { rootMargin: '0px 0px -25% 0px' },
  );

  // Linien, Rahmen und Stempel: starten früher als der Text, sobald das
  // Element knapp über dem unteren Rand ist (Animationen in draw.css).
  const DRAW = [
    '.section-head',
    '.parts .pos',
    '.tools div',
    '.rev li',
    '.rev .idx',
    '.field',
    '.dim',
    '.ticks',
    '.today',
  ].join(',');

  // setzt .in, sobald das Element im Auslösebereich ist; liegt es schon
  // oberhalb des Bildschirms, sofort
  const trigger = (observer) => (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
        entry.target.classList.add('in');
        observer().unobserve(entry.target);
      }
    }
  };

  const drawIo = new IntersectionObserver(trigger(() => drawIo), {
    rootMargin: '0px 0px -18% 0px',
  });
  for (const el of document.querySelectorAll(DRAW)) drawIo.observe(el);

  // Größere Elemente starten erst, wenn ein gutes Stück davon sichtbar ist,
  // damit man z. B. den Rahmen einer Bildtafel auch ganz umfahren sieht.
  // Beobachtet werden nur Elemente, die selbst nicht beschnitten sind:
  // ein per clip-path versteckter Bereich gilt sonst nie als sichtbar.
  const LATE = ['.plate', '.spec', '.notes', '.parts'].join(',');
  const lateIo = new IntersectionObserver(trigger(() => lateIo), {
    rootMargin: '0px 0px -15% 0px',
    threshold: 0.35,
  });
  for (const el of document.querySelectorAll(LATE)) lateIo.observe(el);

  document.documentElement.classList.add('typing');
  for (const el of document.querySelectorAll(TARGETS)) {
    el.setAttribute('data-type', '');
    el._chars = prepare(el);
    let head = false;
    for (const [sel, ms] of HEAD_DELAY) if (el.matches(sel)) (el._delay = ms), (head = true);
    // Texte im Kopf starten direkt beim Laden, alle anderen beim Scrollen
    if (head) setTimeout(() => type(el._chars), el._delay);
    else io.observe(el);
  }
})();
