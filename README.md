# dominik-kasten.de

Persönliche Seite von Dominik Kasten. HTML, CSS und ein kleines Skript, kein Build-Schritt,
keine Cookies, keine externen Anfragen.

## Idee

Die Seite ist ein Zeichnungsblatt: Millimeterpapier als Grund, Rahmen mit
Feldeinteilung (1–8, A–D), der Werdegang als Maßkette, die Projekte als
Stückliste mit Positionsnummern, Kontakt im Schriftfeld.

## Dateien

```
index.html          Startseite
impressum.html      /impressum
datenschutz.html    /datenschutz
404.html            Fehlerseite (Vercel nutzt sie automatisch)
style.css           alles Gestalterische, Farben als Tokens oben
draw.css            Zeichen-Effekte beim Laden und Scrollen (abschaltbar: <link> entfernen)
draw.js             Tipp-Effekt für Elemente mit data-type (abschaltbar: <script> entfernen)
fonts/              Archivo, Source Serif 4, JetBrains Mono (selbst gehostet, OFL)
img/                Porträt, Projektbild, Schaltplan-Hintergrund (SVG)
tools/schaltplan.py erzeugt die Schaltplan-SVGs: python tools/schaltplan.py img
vercel.json         saubere URLs, Weiterleitungen alter Pfade, Security-Header
```

## Pflege

- **Werdegang:** Die Maßkette hat einen zweistufigen Maßstab, damit die
  letzten Jahre mehr Platz bekommen: 2013–2023 auf 40 % der Breite, 2023–2027
  auf 60 %. Jeder Abschnitt ist ein `.dim` mit `style="--a: …; --b: …"` als
  Position in Prozent. Umrechnung (Jahr als Dezimalzahl, Monat/12):
  bis 2023 `(Jahr − 2013) × 4`, ab 2023 `40 + (Jahr − 2023) × 15`.
  Die Achsenbeschriftung nutzt dieselben Werte (`--y`).
- **Stand-Linie:** Faktor in `.today` in `style.css` (`0.9805` = 11/2026) und
  der Text im HTML.
- **Neues Projekt:** Zeile in der Stückliste und ein `<article class="piece">`
  ergänzen, Bild als WebP 1200 × 750 nach `img/`.

## Lokal ansehen

```powershell
python -m http.server 8787
```

Dann http://127.0.0.1:8787 öffnen. Saubere URLs wie `/impressum` funktionieren
erst auf Vercel; lokal `/impressum.html` aufrufen.

## Deployment

Mit der Vercel-CLI aus diesem Ordner: `npx vercel` (Vorschau), dann
`npx vercel --prod`. Framework-Preset: „Other“, kein Build-Befehl, Output-Ordner
ist das Projektverzeichnis selbst.
