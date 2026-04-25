# Stratos Digital — Landing Page

B2B corporate landing page สำหรับบริษัท IT / Software house (case study)
สไตล์ **Modern corporate** — navy + indigo accent · single-page long scroll · TH/EN

ใช้เป็น **เคสที่ 4** ใน portfolio ของ fifa-freelance — โชว์ skill ทำเว็บบริษัทระดับ enterprise

## Stack

- Next.js 14 (App Router)
- TypeScript 5
- Tailwind CSS 3 — custom design tokens (navy / accent / slate)
- React Context i18n (TH/EN)

## Run locally

```bash
npm install
npm run dev
```

เปิด http://localhost:3000

## Sections

1. **Nav** — sticky · diamond logo · TH/EN · "Get a quote" CTA
2. **Hero** — bold headline + animated gradient + 4-stat row (50+ projects · 12 industries · 98% on-time · 5y)
3. **Trust bar** — animated marquee logo strip (8 fictional clients)
4. **Services** — 4 cards (Web / Mobile / Cloud / AI) + tech tags
5. **Process** — 4-step timeline (Discovery → Design → Build → Ship & Scale)
6. **Work** — 3 case studies with metric cards (FinTech / E-com / Logistics)
7. **CTA** — email form + glow background
8. **Footer** — 4-col grid + "All systems operational" status

## Folder structure

```
stratos-landing/
├── app/
│   ├── globals.css           # Tailwind + grid-bg + marquee + stat-shine
│   ├── layout.tsx            # Metadata, fonts, I18nProvider
│   └── page.tsx              # Page assembly
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx              # incl. stats grid
│   ├── Trust.tsx             # marquee logo strip
│   ├── Services.tsx          # 4-card grid
│   ├── Process.tsx           # timeline
│   ├── Work.tsx              # case study cards
│   ├── CTA.tsx               # email form
│   └── Footer.tsx
├── lib/
│   └── i18n.tsx              # All copy + TH/EN dict
├── tailwind.config.ts        # custom navy + accent palette
└── package.json
```

## แก้ content / เปลี่ยนชื่อแบรนด์

ทุกอย่างอยู่ที่ `lib/i18n.tsx` ไฟล์เดียว — แก้ `dict.th` กับ `dict.en` ตรง section ที่ต้องการ
ชื่อบริษัท `STRATOS` แก้ที่ `brand.name` (มีใช้ใน Nav + Footer)

## Color tokens

- Background: `navy-900` (#0a0e1a) / `navy-950` (#070a14)
- Accent: `accent` (#6366f1 indigo) / `accent-light` (#a5b4fc) / `accent-glow` (#818cf8)
- Text: `slate-100` / `slate-200` / `slate-300`
- Border: `white/5`, `white/10`

แก้ค่าได้ที่ `tailwind.config.ts`

## Push to GitHub + deploy

```powershell
cd D:\Codeing\claude\project\stratos-landing
git init
git add .
git commit -m "feat: initial commit - stratos digital landing"
git branch -M main
git remote add origin https://github.com/phurimart14/stratos-landing.git
git push -u origin main
```

จากนั้น import เข้า Vercel — จะได้ URL `stratos-landing-xxx.vercel.app`

## เพิ่มเข้า fifa-freelance portfolio

เปิด `D:\Codeing\claude\project\fifa-portfolio\components\Projects.tsx`
และ `lib/i18n.tsx` แล้ว:

1. เพิ่ม screenshot เข้า `public/projects/stratos.png`
2. เพิ่ม project entry ใน i18n dict (`stratos: { name, meta, desc }`)
3. เพิ่ม `<ProjectCard ... />` ใน grid (จะกลายเป็น 4 cards = 2×2 grid อัตโนมัติ)
