"""Erzeugt die technischen Hintergrundzeichnungen als kachelbare SVGs.

Enthält Schaltpläne (Schaltzeichen nach DIN EN 60617), Platine, UML
(Aktivität, Klassen, Sequenz), ER-Modell, CPU-Blockschaltbild, Serverrack,
Netzwerk und Cluster. Die Zeichnung liegt fest im Hintergrund (Zeichentisch),
das Blatt scrollt darüber und zeigt dieselbe Zeichnung blasser.

Aufruf (im Projektordner):  python tools/schaltplan.py img
Schreibt img/schaltplan-papier.svg und img/schaltplan-blatt.svg.
"""
import math
import sys

INK = '#1f4fbf'
out = []


# --- Grundformen --------------------------------------------------------

def line(x1, y1, x2, y2, dash=False):
    d = ' stroke-dasharray="6 5"' if dash else ''
    out.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}"{d}/>')


def poly(pts, closed=False, dash=False, fill=False):
    tag = 'polygon' if closed else 'polyline'
    d = ' stroke-dasharray="6 5"' if dash else ''
    f = ' class="f"' if fill else ''
    out.append(f'<{tag} points="{" ".join(f"{x},{y}" for x, y in pts)}"{d}{f}/>')


def rect(x, y, w, h, dash=False, r=0):
    d = ' stroke-dasharray="6 5"' if dash else ''
    out.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}"{d}/>')


def circle(x, y, r, fill=False):
    f = ' class="f"' if fill else ''
    out.append(f'<circle cx="{x}" cy="{y}" r="{r}"{f}/>')


def text(x, y, s, size=12, anchor='start', italic=False):
    st = ' font-style="italic"' if italic else ''
    out.append(f'<text x="{x}" y="{y}" font-size="{size}" text-anchor="{anchor}"{st}>{s}</text>')


def dot(x, y):
    circle(x, y, 3, fill=True)


def arrow(x1, y1, x2, y2, open_head=True, size=8):
    """Linie mit Pfeilspitze am Ende (offen oder gefüllt)."""
    line(x1, y1, x2, y2)
    a = math.atan2(y2 - y1, x2 - x1)
    p1 = (round(x2 - size * math.cos(a - 0.45), 1), round(y2 - size * math.sin(a - 0.45), 1))
    p2 = (round(x2 - size * math.cos(a + 0.45), 1), round(y2 - size * math.sin(a + 0.45), 1))
    if open_head:
        poly([p1, (x2, y2), p2])
    else:
        poly([p1, (x2, y2), p2], closed=True, fill=True)


def place(fn, x, y):
    out.append(f'<g transform="translate({x} {y})">')
    fn()
    out.append('</g>')


# --- Bauteile -------------------------------------------------------------

def resistor_v(x, y1, y2, name, val):
    m = (y1 + y2) / 2
    line(x, y1, x, m - 28); rect(x - 9, m - 28, 18, 56); line(x, m + 28, x, y2)
    text(x + 16, m - 4, name); text(x + 16, m + 12, val, 11)


def resistor_h(x1, x2, y, name, val):
    m = (x1 + x2) / 2
    line(x1, y, m - 28, y); rect(m - 28, y - 9, 56, 18); line(m + 28, y, x2, y)
    text(m, y - 16, f'{name} {val}', 11, 'middle')


def capacitor_v(x, y1, y2, name, val):
    m = (y1 + y2) / 2
    line(x, y1, x, m - 5); line(x - 16, m - 5, x + 16, m - 5)
    line(x - 16, m + 5, x + 16, m + 5); line(x, m + 5, x, y2)
    text(x + 22, m - 2, name); text(x + 22, m + 13, val, 11)


def ground(x, y):
    line(x, y, x, y + 10); line(x - 14, y + 10, x + 14, y + 10)
    line(x - 9, y + 15, x + 9, y + 15); line(x - 4, y + 20, x + 4, y + 20)


def diode_v(x, y1, y2, name, led=False):
    m = (y1 + y2) / 2
    line(x, y1, x, m - 10)
    poly([(x - 12, m - 10), (x + 12, m - 10), (x, m + 10)], closed=True)
    line(x - 12, m + 10, x + 12, m + 10); line(x, m + 10, x, y2)
    text(x - 18, m + 4, name, 12, 'end')
    if led:
        for o in (0, 10):
            line(x + 14, m - 4 + o, x + 28, m - 16 + o)
            poly([(x + 22, m - 15 + o), (x + 28, m - 16 + o), (x + 26, m - 10 + o)])


def npn(x, y, name):
    circle(x, y, 22); line(x - 8, y - 12, x - 8, y + 12); line(x - 30, y, x - 8, y)
    line(x - 8, y - 5, x + 10, y - 20); line(x - 8, y + 5, x + 10, y + 20)
    poly([(x + 3, y + 19), (x + 10, y + 20), (x + 7, y + 13)])
    text(x + 28, y + 4, name)


def gate(x, y, sym, name):
    rect(x, y, 50, 64); text(x + 25, y + 37, sym, 15, 'middle')
    line(x - 24, y + 16, x, y + 16); line(x - 24, y + 48, x, y + 48)
    line(x + 50, y + 32, x + 74, y + 32); text(x, y - 8, name, 11)


def via(x, y):
    circle(x, y, 7); circle(x, y, 2.5)


def dip(x, y, pins, name):
    w, step = 70, 24
    h = step * (pins // 2) + 8
    rect(x, y, w, h, r=3)
    out.append(f'<path d="M{x + 25} {y} a10 10 0 0 0 20 0"/>')
    for i in range(pins // 2):
        py = y + 16 + i * step
        line(x - 14, py, x, py); line(x + w, py, x + w + 14, py)
        text(x - 18, py + 4, str(i + 1), 9, 'end'); text(x + w + 18, py + 4, str(pins - i), 9)
    text(x + w / 2, y + h + 16, name, 11, 'middle')


# --- Diagramme (jeweils lokal ab 0,0) --------------------------------------

def led_driver():  # ~ 580 x 440
    text(0, 18, 'VCC +5V', 11)
    line(0, 30, 520, 30); dot(110, 30); dot(280, 30)
    resistor_v(110, 30, 170, 'R1', '330')
    diode_v(110, 170, 260, 'D1', led=True)
    poly([(110, 260), (110, 282), (142, 282), (142, 302)])
    npn(132, 322, 'Q1'); line(142, 342, 142, 390); ground(142, 390)
    resistor_h(-10, 102, 322, 'R2', '4k7')
    capacitor_v(280, 30, 150, 'C1', '100n'); ground(280, 150)
    dot(520, 30); line(520, 30, 520, 80); text(528, 76, 'J1', 11)


def opamp_circuit():  # ~ 330 x 200
    poly([(160, 70), (160, 150), (230, 110)], closed=True)
    text(168, 94, '−', 14); text(168, 134, '+', 14); text(170, 62, 'U2')
    line(100, 90, 160, 90); line(100, 130, 160, 130)
    resistor_h(0, 100, 90, 'R3', '10k')
    line(230, 110, 300, 110); dot(280, 110); line(280, 110, 280, 30); line(280, 30, 230, 30)
    resistor_h(100, 230, 30, 'R4', '47k')
    line(100, 30, 100, 90); dot(100, 90); line(100, 130, 100, 170); ground(100, 170)
    text(308, 114, 'OUT', 11)


def logic():  # ~ 300 x 130
    gate(30, 30, '&amp;', 'U3A'); gate(190, 60, '≥1', 'U4A')
    poly([(104, 62), (130, 62), (130, 76), (190, 76)])
    line(166, 108, 190, 108)
    text(0, 50, 'A', 11, 'end'); text(0, 82, 'B', 11, 'end'); text(160, 112, 'C', 11, 'end')
    text(268, 96, 'Y', 11)


def pcb():  # ~ 740 x 500
    dip(410, 70, 16, 'U1 ATmega')
    for i, (tx, ty) in enumerate([(230, 20), (200, 110), (250, 200)]):
        py = 86 + i * 48
        poly([(396, py), (350, py), (310 - i * 10, py - 40 + i * 20), (tx, ty)]); via(tx, ty)
    poly([(494, 110), (560, 110), (600, 70), (710, 70)]); via(710, 70)
    poly([(494, 182), (580, 182), (620, 222), (730, 222)]); via(730, 222)
    poly([(250, 200), (190, 260), (30, 260)]); via(30, 260)
    text(530, 50, '0x1F', 10); text(700, 250, 'GND', 10)
    text(30, 410, '01001011 01000100', 11)
    capacitor_v(590, 370, 490, 'C7', '10µ'); resistor_v(710, 330, 510, 'R9', '1k')
    via(410, 450); via(450, 450)
    poly([(410, 443), (410, 410), (490, 410), (530, 370), (590, 370)]); line(450, 443, 450, 425)


def cluster():  # ~ 540 x 320
    rect(70, 10, 470, 300, dash=True, r=6); text(86, 32, 'k8s cluster', 11)
    rect(100, 130, 90, 50, r=4); text(145, 160, 'LB', 13, 'middle')
    for i in range(3):
        ny = 58 + i * 82
        rect(320, ny, 150, 54, r=4)
        text(395, ny + 23, f'node-{i + 1}', 12, 'middle'); text(395, ny + 41, 'pod · pod', 10, 'middle')
        arrow(190, 155, 318, ny + 27)
    line(10, 155, 100, 155); text(14, 145, 'client', 10)


def activity():  # UML-Aktivitätsdiagramm ~ 360 x 480
    cx = 180
    circle(cx, 14, 9, fill=True)
    arrow(cx, 23, cx, 52)
    rect(cx - 70, 52, 140, 36, r=16); text(cx, 75, 'Timer starten', 12, 'middle')
    arrow(cx, 88, cx, 120)
    poly([(cx, 120), (cx + 22, 142), (cx, 164), (cx - 22, 142)], closed=True)
    # Zweig Pause, links neben dem Ablauf, zurück vor die Entscheidung
    line(cx - 22, 142, cx - 150, 142); arrow(cx - 150, 142, cx - 150, 160)
    text(cx - 140, 134, '[Pause]', 10)
    rect(cx - 210, 160, 120, 36, r=16); text(cx - 150, 183, 'pausieren', 12, 'middle')
    poly([(cx - 210, 178), (cx - 236, 178), (cx - 236, 104)])
    arrow(cx - 236, 104, cx - 2, 104, size=7)
    # Zweig fertig, Gabelung
    arrow(cx, 164, cx, 214); text(cx + 8, 194, '[fertig]', 10)
    poly([(cx - 100, 214), (cx + 100, 214), (cx + 100, 220), (cx - 100, 220)], closed=True, fill=True)
    arrow(cx - 80, 220, cx - 80, 262); arrow(cx + 80, 220, cx + 80, 262)
    rect(cx - 150, 262, 140, 36, r=16); text(cx - 80, 285, 'Eintrag speichern', 11, 'middle')
    rect(cx + 15, 262, 130, 36, r=16); text(cx + 80, 285, 'Bericht aktual.', 11, 'middle')
    arrow(cx - 80, 298, cx - 80, 340); arrow(cx + 80, 298, cx + 80, 340)
    poly([(cx - 110, 340), (cx + 110, 340), (cx + 110, 346), (cx - 110, 346)], closed=True, fill=True)
    arrow(cx, 346, cx, 390)
    circle(cx, 402, 12); circle(cx, 402, 7, fill=True)
    poly([(0, 440), (140, 440), (150, 452), (150, 470), (0, 470)], closed=True)
    text(10, 460, 'act Zeit erfassen', 11)


def erm():  # ER-Modell (Krähenfuß) ~ 640 x 300
    def entity(x, y, name, attrs):
        h = 30 + 20 * len(attrs)
        rect(x, y, 170, h, r=2); line(x, y + 26, x + 170, y + 26)
        text(x + 85, y + 18, name, 12, 'middle')
        for i, (a, k) in enumerate(attrs):
            text(x + 10, y + 44 + i * 20, a, 11)
            if k:
                text(x + 160, y + 44 + i * 20, k, 9, 'end')

    entity(0, 20, 'PROJEKT', [('id', 'PK'), ('name', ''), ('stundensatz', ''), ('kunde', '')])
    entity(240, 20, 'AUFGABE', [('id', 'PK'), ('projekt_id', 'FK'), ('titel', ''), ('status', '')])
    entity(470, 150, 'ZEITEINTRAG', [('id', 'PK'), ('aufgabe_id', 'FK'), ('start', ''), ('ende', ''), ('pause_min', '')])

    def one(x, y, d=1):  # genau eins
        line(x + 8 * d, y - 8, x + 8 * d, y + 8); line(x + 14 * d, y - 8, x + 14 * d, y + 8)

    def many(x, y, d=1):  # Krähenfuß
        line(x, y, x + 14 * d, y - 9); line(x, y, x + 14 * d, y + 9); line(x + 14 * d, y - 8, x + 14 * d, y + 8)

    line(170, 70, 240, 70); one(170, 70); many(240, 70, -1)
    poly([(410, 90), (440, 90), (440, 200), (470, 200)]); one(410, 90); many(470, 200, -1)
    text(194, 58, '1', 10, 'middle'); text(222, 58, 'n', 10, 'middle')


def classes():  # UML-Klassendiagramm ~ 560 x 420
    def cls(x, y, name, attrs, ops, stereo=None, w=190):
        top = 40 if stereo else 26
        rect(x, y, w, top + 18 * len(attrs) + 8 + 18 * len(ops) + 8)
        if stereo:
            text(x + w / 2, y + 16, stereo, 10, 'middle')
        text(x + w / 2, y + top - 8, name, 12, 'middle', italic=bool(stereo))
        line(x, y + top, x + w, y + top)
        for i, a in enumerate(attrs):
            text(x + 8, y + top + 16 + i * 18, a, 11)
        sep = y + top + 18 * len(attrs) + 8
        line(x, sep, x + w, sep)
        for i, o in enumerate(ops):
            text(x + 8, sep + 16 + i * 18, o, 11)

    cls(185, 0, 'Deployable', [], ['+deploy(): void'], stereo='«interface»')
    cls(0, 130, 'Server', ['-host: str', '-cpu: int', '-ram_gb: int'], ['+start()', '+stop()'])
    cls(0, 330, 'Node', ['-labels: dict'], ['+drain()'])
    cls(330, 150, 'Cluster', ['-name: str', '-nodes: Node[*]'], ['+scale(n: int)', '+deploy(): void'])
    # Vererbung Node -> Server
    line(95, 330, 95, 268); poly([(85, 268), (105, 268), (95, 252)], closed=True)
    # Realisierung Cluster -> Deployable
    line(425, 150, 425, 40, dash=True); line(425, 40, 391, 40, dash=True)
    poly([(391, 30), (391, 50), (375, 40)], closed=True)
    # Aggregation Cluster <>-- Node
    poly([(330, 250), (318, 258), (306, 250), (318, 242)], closed=True)
    poly([(306, 250), (260, 250), (260, 370), (190, 370)])
    text(198, 362, '1..*', 10); text(312, 236, '1', 10)


def cpu():  # CPU-Blockschaltbild ~ 560 x 350
    rect(0, 0, 340, 250, dash=True, r=4); text(10, 18, 'CPU', 11)
    rect(20, 40, 130, 70); text(85, 70, 'Steuerwerk', 12, 'middle'); text(85, 88, '(CU)', 10, 'middle')
    poly([(190, 40), (240, 40), (255, 70), (270, 40), (320, 40), (290, 110), (220, 110)], closed=True)
    text(255, 96, 'ALU', 12, 'middle')
    for i, r in enumerate(['R0', 'R1', 'R2', 'PC']):
        rect(20 + i * 75, 140, 60, 30); text(50 + i * 75, 160, r, 11, 'middle')
    rect(20, 195, 300, 34); text(170, 217, 'L1-Cache  32 KiB', 11, 'middle')
    rect(380, 40, 140, 60); text(450, 75, 'L2 / L3', 12, 'middle')
    rect(380, 160, 140, 90); text(450, 200, 'RAM', 13, 'middle'); text(450, 220, 'DDR5', 10, 'middle')
    for y, name in ((300, 'Datenbus'), (330, 'Adressbus')):
        line(0, y, 520, y); line(0, y + 6, 520, y + 6); text(526, y + 6, name, 10)
    for x, y0 in ((85, 250), (255, 250), (450, 250)):
        line(x, y0, x, 300)
    poly([(320, 212), (360, 212), (360, 70), (380, 70)])
    arrow(150, 75, 186, 75, size=7)


def rack():  # Serverrack ~ 240 x 540
    rect(0, 0, 240, 540, r=3); rect(12, 12, 216, 516)
    text(120, -10, 'rack-01  42U', 11, 'middle')
    y = 30
    for kind in ['sw', 'srv', 'srv', 'srv', 'gap', 'stor', 'gap', 'srv', 'ups']:
        if kind == 'gap':
            y += 34
            continue
        h = {'sw': 26, 'srv': 34, 'stor': 60, 'ups': 60}[kind]
        rect(22, y, 196, h, r=2)
        if kind == 'sw':
            for i in range(12):
                rect(34 + i * 13, y + 8, 9, 9)
        elif kind == 'srv':
            for i in range(4):
                rect(30 + i * 30, y + 8, 24, h - 16)
            circle(190, y + h / 2, 3); circle(202, y + h / 2, 3, fill=True)
        elif kind == 'stor':
            for r_ in range(2):
                for i in range(6):
                    rect(30 + i * 26, y + 8 + r_ * 24, 20, 18)
        else:
            text(120, y + 36, 'USV', 12, 'middle')
        y += h + 8
    for yy in range(20, 530, 24):
        line(4, yy, 9, yy)


def sequence():  # UML-Sequenzdiagramm ~ 520 x 380
    for x, n in [(40, 'client'), (230, 'api'), (420, 'db')]:
        rect(x - 45, 0, 90, 32); text(x, 21, n, 12, 'middle')
        line(x, 32, x, 380, dash=True)
    rect(225, 70, 10, 230); rect(415, 120, 10, 60)
    arrow(40, 76, 223, 76, open_head=False); text(132, 68, 'GET /projects', 10, 'middle')
    arrow(235, 126, 413, 126, open_head=False); text(325, 118, 'SELECT …', 10, 'middle')
    line(415, 176, 237, 176, dash=True); arrow(260, 176, 237, 176, size=7); text(325, 170, 'rows', 10, 'middle')
    line(225, 296, 42, 296, dash=True); arrow(70, 296, 42, 296, size=7); text(132, 288, '200 OK', 10, 'middle')


def network():  # Netzwerk ~ 480 x 300
    def box(x, y, name, w=110):
        rect(x, y, w, 40, r=4); text(x + w / 2, y + 25, name, 11, 'middle')
    circle(240, 30, 26); text(240, 34, 'WAN', 11, 'middle')
    box(185, 90, 'router'); box(185, 160, 'switch')
    line(240, 56, 240, 90); line(240, 130, 240, 160)
    for i, n in enumerate(['srv-01', 'srv-02', 'srv-03', 'nas']):
        x = i * 125
        box(x, 250, n, 100)
        poly([(240, 200), (240, 222), (x + 50, 222), (x + 50, 250)])
    text(300, 115, '10.0.0.1', 10); text(300, 185, 'VLAN 20', 10)


# --- Anordnungen ------------------------------------------------------------

def compose(layout, w, h, opacity):
    global out
    out = []
    for fn, x, y in layout:
        place(fn, x, y)
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">'
        f'<g fill="none" stroke="{INK}" stroke-width="1.2" stroke-linecap="round" '
        f'stroke-linejoin="round" opacity="{opacity}" font-family="ui-monospace, Consolas, monospace">'
        f'<style>text{{fill:{INK};stroke:none}}.f{{fill:{INK}}}</style>'
        + ''.join(out)
        + '</g></svg>'
    )


PAPIER = [
    (led_driver, 50, 60), (activity, 740, 40), (erm, 1220, 70), (rack, 2020, 70),
    (classes, 60, 640), (cpu, 760, 680), (opamp_circuit, 1460, 470), (sequence, 1420, 800),
    (network, 2030, 780), (cluster, 60, 1200), (pcb, 700, 1190), (logic, 2120, 1380),
]
BLATT = [
    (erm, 80, 60), (pcb, 900, 40), (sequence, 1700, 80), (cpu, 120, 560),
    (activity, 820, 640), (rack, 1340, 600), (classes, 1700, 660), (logic, 140, 1160),
    (cluster, 560, 1220), (network, 1240, 1260), (opamp_circuit, 1820, 1220),
]

target = sys.argv[1]
open(f'{target}/schaltplan-papier.svg', 'w', encoding='utf-8').write(compose(PAPIER, 2600, 1800, 0.16))
# Das Blatt zeigt dieselbe Zeichnung, nur blasser (wie durch Transparentpapier)
open(f'{target}/schaltplan-blatt.svg', 'w', encoding='utf-8').write(compose(PAPIER, 2600, 1800, 0.06))
print('ok')
