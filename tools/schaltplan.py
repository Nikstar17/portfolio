"""Erzeugt eine kachelbare Schaltplan-/Platinenzeichnung als SVG.

Schaltzeichen nach DIN EN 60617 (Widerstand als Rechteck usw.).
Aufruf: python schaltplan.py <zielordner>
Schreibt schaltplan-papier.svg (für den Hintergrund) und
schaltplan-blatt.svg (sehr blass, für das Zeichnungsblatt).
"""
import sys

W, H = 1400, 1000
parts = []


def line(x1, y1, x2, y2, dash=False):
    d = ' stroke-dasharray="6 5"' if dash else ''
    parts.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}"{d}/>')


def poly(pts, closed=False, dash=False):
    tag = 'polygon' if closed else 'polyline'
    d = ' stroke-dasharray="6 5"' if dash else ''
    parts.append(f'<{tag} points="{" ".join(f"{x},{y}" for x, y in pts)}"{d}/>')


def rect(x, y, w, h, dash=False, r=0):
    d = ' stroke-dasharray="6 5"' if dash else ''
    parts.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}"{d}/>')


def circle(x, y, r, fill=False):
    f = ' class="f"' if fill else ''
    parts.append(f'<circle cx="{x}" cy="{y}" r="{r}"{f}/>')


def text(x, y, s, size=12, anchor='start'):
    parts.append(f'<text x="{x}" y="{y}" font-size="{size}" text-anchor="{anchor}">{s}</text>')


def dot(x, y):
    circle(x, y, 3, fill=True)


# --- Bauteile ---------------------------------------------------------

def resistor_v(x, y1, y2, name, val):
    m = (y1 + y2) / 2
    line(x, y1, x, m - 28)
    rect(x - 9, m - 28, 18, 56)
    line(x, m + 28, x, y2)
    text(x + 16, m - 4, name)
    text(x + 16, m + 12, val, 11)


def resistor_h(x1, x2, y, name, val):
    m = (x1 + x2) / 2
    line(x1, y, m - 28, y)
    rect(m - 28, y - 9, 56, 18)
    line(m + 28, y, x2, y)
    text(m, y - 16, f'{name} {val}', 11, 'middle')


def capacitor_v(x, y1, y2, name, val):
    m = (y1 + y2) / 2
    line(x, y1, x, m - 5)
    line(x - 16, m - 5, x + 16, m - 5)
    line(x - 16, m + 5, x + 16, m + 5)
    line(x, m + 5, x, y2)
    text(x + 22, m - 2, name)
    text(x + 22, m + 13, val, 11)


def ground(x, y):
    line(x, y, x, y + 10)
    line(x - 14, y + 10, x + 14, y + 10)
    line(x - 9, y + 15, x + 9, y + 15)
    line(x - 4, y + 20, x + 4, y + 20)


def diode_v(x, y1, y2, name, led=False):
    m = (y1 + y2) / 2
    line(x, y1, x, m - 10)
    poly([(x - 12, m - 10), (x + 12, m - 10), (x, m + 10)], closed=True)
    line(x - 12, m + 10, x + 12, m + 10)
    line(x, m + 10, x, y2)
    text(x - 18, m + 4, name, 12, 'end')
    if led:
        for o in (0, 10):
            line(x + 14, m - 4 + o, x + 28, m - 16 + o)
            poly([(x + 22, m - 15 + o), (x + 28, m - 16 + o), (x + 26, m - 10 + o)])


def npn(x, y, name):
    circle(x, y, 22)
    line(x - 8, y - 12, x - 8, y + 12)
    line(x - 30, y, x - 8, y)
    line(x - 8, y - 5, x + 10, y - 20)
    line(x - 8, y + 5, x + 10, y + 20)
    poly([(x + 3, y + 19), (x + 10, y + 20), (x + 7, y + 13)])
    text(x + 28, y + 4, name)


def opamp(x, y, name):
    poly([(x, y - 40), (x, y + 40), (x + 70, y)], closed=True)
    text(x + 8, y - 16, '−', 14)
    text(x + 8, y + 24, '+', 14)
    text(x + 10, y - 48, name)


def gate(x, y, sym, name):
    rect(x, y, 50, 64)
    text(x + 25, y + 37, sym, 15, 'middle')
    line(x - 24, y + 16, x, y + 16)
    line(x - 24, y + 48, x, y + 48)
    line(x + 50, y + 32, x + 74, y + 32)
    text(x, y - 8, name, 11)


def dip(x, y, pins, name):
    w, step = 70, 24
    h = step * (pins // 2) + 8
    rect(x, y, w, h, r=3)
    parts.append(f'<path d="M{x + 25} {y} a10 10 0 0 0 20 0"/>')
    for i in range(pins // 2):
        py = y + 16 + i * step
        line(x - 14, py, x, py)
        line(x + w, py, x + w + 14, py)
        text(x - 18, py + 4, str(i + 1), 9, 'end')
        text(x + w + 18, py + 4, str(pins - i), 9)
    text(x + w / 2, y + h + 16, name, 11, 'middle')


def via(x, y):
    circle(x, y, 7)
    circle(x, y, 2.5)


# --- Schaltung 1: LED-Treiber -------------------------------------------
text(40, 58, 'VCC +5V', 11)
line(40, 70, 560, 70)
dot(150, 70)
dot(320, 70)
resistor_v(150, 70, 210, 'R1', '330')
diode_v(150, 210, 300, 'D1', led=True)
poly([(150, 300), (150, 322), (182, 322), (182, 342)])
npn(172, 362, 'Q1')
line(182, 382, 182, 430)
ground(182, 430)
resistor_h(30, 142, 362, 'R2', '4k7')
capacitor_v(320, 70, 190, 'C1', '100n')
ground(320, 190)

# --- Schaltung 2: Operationsverstärker ---------------------------------
opamp(760, 180, 'U2')
line(700, 160, 760, 160)
line(700, 200, 760, 200)
resistor_h(600, 700, 160, 'R3', '10k')
line(830, 180, 900, 180)
dot(880, 180)
line(880, 180, 880, 100)
line(880, 100, 830, 100)
resistor_h(700, 830, 100, 'R4', '47k')
line(700, 100, 700, 160)
dot(700, 160)
line(700, 200, 700, 240)
ground(700, 240)
text(908, 184, 'OUT', 11)

# --- Logik ---------------------------------------------------------------
gate(1080, 120, '&amp;', 'U3A')
gate(1240, 150, '≥1', 'U4A')
line(1154, 152, 1180, 152)
line(1180, 152, 1180, 166)
line(1180, 166, 1216, 166)
line(1216, 166, 1240, 166)
line(1216, 198, 1240, 198)
text(1050, 140, 'A', 11, 'end')
text(1050, 172, 'B', 11, 'end')
text(1210, 202, 'C', 11, 'end')
text(1318, 186, 'Y', 11)

# --- Platine: Leiterbahnen, Vias, IC -------------------------------------
dip(1000, 520, 16, 'U1 ATmega')
for i, (tx, ty) in enumerate([(820, 470), (790, 560), (840, 650)]):
    py = 536 + i * 48
    poly([(986, py), (940, py), (900 - i * 10, py - 40 + i * 20), (tx, ty)])
    via(tx, ty)
poly([(1084, 560), (1150, 560), (1190, 520), (1300, 520)])
via(1300, 520)
poly([(1084, 632), (1170, 632), (1210, 672), (1320, 672)])
via(1320, 672)
poly([(840, 650), (780, 710), (620, 710)])
via(620, 710)
text(1120, 500, '0x1F', 10)
text(1290, 700, 'GND', 10)

# --- Cluster-Schema --------------------------------------------------------
rect(80, 620, 470, 300, dash=True, r=6)
text(96, 642, 'k8s cluster', 11)
rect(110, 740, 90, 50, r=4)
text(155, 770, 'LB', 13, 'middle')
for i in range(3):
    ny = 668 + i * 82
    rect(330, ny, 150, 54, r=4)
    text(405, ny + 23, f'node-{i + 1}', 12, 'middle')
    text(405, ny + 41, 'pod · pod', 10, 'middle')
    line(200, 765, 328, ny + 27)
    poly([(320, ny + 22), (328, ny + 27), (319, ny + 31)])
line(20, 765, 110, 765)
text(24, 755, 'client', 10)

# --- Einzelteile verstreut ------------------------------------------------
text(620, 860, '01001011 01000100', 11)
capacitor_v(1180, 820, 940, 'C7', '10µ')
resistor_v(1300, 780, 960, 'R9', '1k')
via(1000, 900)
via(1040, 900)
poly([(1000, 893), (1000, 860), (1080, 860), (1120, 820), (1180, 820)])
line(1040, 893, 1040, 875)
dot(560, 70)
line(560, 70, 560, 120)
text(568, 116, 'J1', 11)


def svg(opacity):
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">'
        f'<g fill="none" stroke="#1f4fbf" stroke-width="1.2" stroke-linecap="round" '
        f'stroke-linejoin="round" opacity="{opacity}" font-family="ui-monospace, Consolas, monospace">'
        '<style>text{fill:#1f4fbf;stroke:none}.f{fill:#1f4fbf}</style>'
        + ''.join(parts)
        + '</g></svg>'
    )


out = sys.argv[1]
open(f'{out}/schaltplan-papier.svg', 'w', encoding='utf-8').write(svg(0.16))
open(f'{out}/schaltplan-blatt.svg', 'w', encoding='utf-8').write(svg(0.05))
print('ok', len(parts), 'Elemente')
