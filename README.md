# stratos-landing

> Modern corporate landing page for **Stratos Digital** — a fictional B2B software studio
> Built as a portfolio case study for [@phurimart14](https://github.com/phurimart14)

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](#license)

**Live:** [stratos-landing.vercel.app](https://stratos-landing.vercel.app) <!-- เปลี่ยนหลัง deploy -->

---

## ✨ Features

- 🎨 **Modern corporate aesthetic** — navy `#0a0e1a` + indigo `#6366f1` accent
- 🌐 **Bilingual TH/EN** — toggle ที่มุมขวาบน · default ภาษาอังกฤษ (B2B audience)
- 📊 **Hero stats row** — 4 metrics ที่ใช้สร้าง trust ทันทีตอนเข้าหน้า
- 🎢 **Animated trust marquee** — logo strip เคลื่อนต่อเนื่อง (CSS-only)
- 🔄 **4-step process timeline** — Discovery → Design → Build → Ship
- 📋 **3 case study cards** — FinTech / E-commerce / Logistics พร้อม metric stats
- 📧 **Email capture form** — ลูกค้ากรอก email ตรงหน้า CTA
- ⚡ **Static-rendered** — 94 kB First Load JS · ดี SEO

---

## 🎯 ใช้ทำอะไร

โปรเจกต์นี้เป็น **case study ที่ 4** ใน portfolio ของ ([fifa-freelance](https://github.com/phurimart14/fifa-freelance))
จุดประสงค์: โชว์ skill ทำเว็บบริษัท B2B ระดับ enterprise — เป็นตลาดที่ลูกค้า Fastwork ต้องการบ่อยที่สุด ("รับทำเว็บบริษัท 3-5 หน้า")

แตกต่างจาก case study อื่นใน portfolio:
| Project | Vibe | Color |
|---------|------|-------|
| Paid | SaaS / startup | Emerald |
| Glow Clinic | B2C / lifestyle | Pink |
| Amber Brew | Local business | Amber |
| **Stratos Digital** ⭐ | **B2B / corporate** | **Navy + Indigo** |

---

## 📚 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5.5 |
| Styling | Tailwind CSS 3.4 — custom design tokens (navy / accent / slate) |
| UI | React 18.3 |
| i18n | React Context (typed Dict) |
| Fonts | Inter · JetBrains Mono · Noto Sans Thai |
| Hosting | Vercel |

---

## 🚀 Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server (hot reload) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint |

---

## 📂 Folder Structure

```
stratos-landing/
├── app/
│   ├── globals.css              # Tailwind + grid-bg + marquee + stat-shine
│   ├── layout.tsx               # Metadata · Google Fonts · I18nProvider
│   └── page.tsx                 # Page assembly
├── components/
│   ├── Nav.tsx                  # Sticky · diamond logo · TH/EN · "Get a quote" CTA
│   ├── Hero.tsx                 # Eyebrow + bold gradient headline + 4-stat row
│   ├── Trust.tsx                # Animated marquee logo strip
│   ├── Services.tsx             # 4-card grid (Web · Mobile · Cloud · AI)
│   ├── Process.tsx              # 4-step timeline with glow badges
│   ├── Work.tsx                 # 3 case study cards + metric stats
│   ├── CTA.tsx                  # Email form + glow background
│   └── Footer.tsx               # 4-col grid + status indicator
├── lib/
│   └── i18n.tsx                 # All copy (TH/EN) + typed Dict
├── tailwind.config.ts           # Custom palette + marquee/glow keyframes
├── tsconfig.json
├── next.config.mjs
└── package.json
```

---

## 🛠️ Sections Breakdown

| # | Section | What's inside |
|---|---------|---------------|
| 1 | **Nav** | Diamond logo with glow · "STRATOS / digital" stack · sticky blur · TH/EN toggle · CTA pill |
| 2 | **Hero** | Animated eyebrow ping · gradient headline · lead · 2 CTAs · **4-stat grid** (50+ projects · 12 industries · 98% on-time · 5y) |
| 3 | **Trust** | "Trusted by" · animated marquee with 8 fictional logos · edge-fade masks |
| 4 | **Services** | 4 cards · 2×2 grid · tech tags · hover gradient |
| 5 | **Process** | 4 numbered steps · weeks badge · connecting line (desktop) · glow ring |
| 6 | **Work** | 3 case study cards · industry pill · metric grid · NDA-friendly summaries |
| 7 | **CTA** | Eyebrow pill · gradient h2 · email form with submit state · "NDA available" note |
| 8 | **Footer** | Brand column + 3 link columns + "All systems operational" indicator |

---

## ✏️ Customization

### แก้ copy / ชื่อบริษัท / ตัวเลข

ทุกอย่างอยู่ที่ **`lib/i18n.tsx` ไฟล์เดียว** — แก้ `dict.th` กับ `dict.en` ตรง section ที่ต้องการ
- ชื่อบริษัท `STRATOS` → แก้ที่ `brand.name`
- Hero stats → `hero.stats` (array of 4 items)
- Services / Process / Work → ชื่อตรงกัน

### แก้สี (palette)

แก้ที่ `tailwind.config.ts`:

```ts
accent: {
  DEFAULT: "#6366f1",   // indigo — main accent
  dark: "#4f46e5",
  light: "#a5b4fc",
  glow: "#818cf8",
},
navy: {
  900: "#0a0e1a",       // background
  950: "#070a14",       // deeper
  ...
}
```

### แก้ logo strip ใน Trust section

แก้ที่ `components/Trust.tsx` → `LOGOS` array

```ts
const LOGOS = ["NORTHWIND", "AURORA·CO", "QUANTAM", ...];
```

---

## 🌍 Deployment (Vercel)

```bash
# 1. Push to GitHub
git init && git add .
git commit -m "feat: initial commit"
git branch -M main
git remote add origin https://github.com/phurimart14/stratos-landing.git
git push -u origin main

# 2. Import to Vercel
# → ไป vercel.com/new → select repo → Deploy
```

หรือใช้ Vercel CLI:

```bash
npm i -g vercel
vercel
```

---

## 🔗 Linked Project

โปรเจกต์นี้ embed อยู่ใน [fifa-freelance portfolio](https://github.com/phurimart14/fifa-freelance) — เป็น project card ใบที่ 4

ถ้าจะใช้ codebase นี้เป็น template สำหรับลูกค้าจริง — แก้ที่:
1. **Brand**: `lib/i18n.tsx` → `brand.name` + `metadata` ใน `layout.tsx`
2. **Color**: `tailwind.config.ts` → `accent` palette
3. **Stats / cases**: `lib/i18n.tsx` → `hero.stats` + `work.cases`
4. **Contact**: `components/CTA.tsx` → wire email form ไปยัง API จริง (เช่น Resend / SendGrid)

---

## 📝 Notes

- หน้านี้เป็น **single-page** — ทุก section อยู่หน้าเดียวกัน · scroll-anchor (`#services`, `#process`, ฯลฯ)
- รูปแบบ Stratos = **fictional company** สำหรับ portfolio — ตัวเลข stats, case studies เป็นข้อมูลสมมุติ
- Email form ใน CTA ตอนนี้แค่ `setSubmitted(true)` — production ต้อง wire ไปยัง API endpoint จริง
- Responsive ครบ — มี `md:` / `lg:` breakpoints สำหรับ tablet + desktop

---

## 📄 License

MIT © 2026 Phurimart Sudanich

ใช้เป็น template ต่อยอดได้ — แก้ชื่อ Stratos กับ stats ให้ตรงกับลูกค้าจริงก่อน deploy ครับ
