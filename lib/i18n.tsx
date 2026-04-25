"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "th" | "en";

type Dict = {
  brand: {
    name: string;
    tagline: string;
  };
  nav: {
    services: string;
    process: string;
    work: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    h1Before: string;
    h1Accent: string;
    h1After: string;
    lead: string;
    ctaPrimary: string;
    ctaGhost: string;
    stats: { value: string; label: string }[];
  };
  trust: {
    label: string;
    note: string;
  };
  services: {
    label: string;
    h2: string;
    sub: string;
    items: { num: string; name: string; desc: string; tags: string[] }[];
  };
  process: {
    label: string;
    h2: string;
    sub: string;
    steps: { num: string; name: string; weeks: string; desc: string }[];
  };
  work: {
    label: string;
    h2: string;
    sub: string;
    cases: {
      industry: string;
      name: string;
      result: string;
      desc: string;
      stats: { value: string; label: string }[];
    }[];
  };
  cta: {
    eyebrow: string;
    h2Before: string;
    h2Accent: string;
    sub: string;
    placeholder: string;
    button: string;
    note: string;
  };
  footer: {
    desc: string;
    columns: { title: string; items: string[] }[];
    copyright: string;
  };
};

const dict: Record<Lang, Dict> = {
  th: {
    brand: {
      name: "STRATOS",
      tagline: "Software studio for ambitious teams",
    },
    nav: {
      services: "บริการ",
      process: "วิธีทำงาน",
      work: "ผลงาน",
      cta: "ขอใบเสนอราคา",
    },
    hero: {
      eyebrow: "// IT Consulting & Software Development",
      h1Before: "ซอฟต์แวร์ที่ใช้งานได้จริง\n",
      h1Accent: "ทีมที่ scale ได้",
      h1After: "",
      lead: "เราช่วยบริษัทไทยและ enterprise ออกแบบ พัฒนา และ scale ระบบดิจิทัล — ตั้งแต่ MVP ถึงโปรดักต์ที่มีผู้ใช้งานหลักแสน",
      ctaPrimary: "นัดคุยฟรี 30 นาที",
      ctaGhost: "ดูเคสลูกค้า",
      stats: [
        { value: "50+", label: "โปรเจกต์ส่งมอบ" },
        { value: "12", label: "อุตสาหกรรม" },
        { value: "98%", label: "On-time delivery" },
        { value: "5y", label: "ในตลาด" },
      ],
    },
    trust: {
      label: "TRUSTED BY",
      note: "ทีมที่กล้าลงทุนกับเทคโนโลยีจริงจัง",
    },
    services: {
      label: "บริการ",
      h2: "เราช่วยอะไรได้บ้าง",
      sub: "End-to-end — ตั้งแต่ทำ research, ออกแบบ UX, เขียนโค้ด, deploy, ยัน scale",
      items: [
        {
          num: "01",
          name: "Web Applications",
          desc: "Next.js · React · TypeScript — เว็บแอปที่โหลดเร็ว SEO ดี และ scale รับ traffic หนักได้",
          tags: ["Next.js", "TypeScript", "PostgreSQL"],
        },
        {
          num: "02",
          name: "Mobile Development",
          desc: "iOS / Android ด้วย React Native — ส่ง feature ให้ทั้งสอง platform พร้อมกัน ลด cost ครึ่งหนึ่ง",
          tags: ["React Native", "Expo", "Native modules"],
        },
        {
          num: "03",
          name: "Cloud & DevOps",
          desc: "AWS · GCP · Vercel — auto-scaling, CI/CD, observability ตั้งแต่วันแรก ไม่ต้องรอจน scale แล้วค่อยมาแก้",
          tags: ["AWS", "Docker", "GitHub Actions"],
        },
        {
          num: "04",
          name: "AI Integration",
          desc: "LLM · embeddings · RAG — embed AI เข้าโปรดักต์ที่มีอยู่ ไม่ใช่ทำ chatbot สำเร็จรูป",
          tags: ["OpenAI", "LangChain", "Vector DB"],
        },
      ],
    },
    process: {
      label: "วิธีทำงาน",
      h2: "จากไอเดียถึง launch ใน 8 สัปดาห์",
      sub: "Process ที่ shipped มาแล้ว 50+ โปรเจกต์ — ปรับให้เข้ากับ scope ของแต่ละลูกค้า",
      steps: [
        {
          num: "01",
          name: "Discovery",
          weeks: "Week 1-2",
          desc: "คุยเชิงลึกกับ stakeholder, mapping user journey, technical audit ระบบเดิม",
        },
        {
          num: "02",
          name: "Design",
          weeks: "Week 2-3",
          desc: "Wireframe → high-fidelity mockup ใน Figma + design system พร้อม implement",
        },
        {
          num: "03",
          name: "Build",
          weeks: "Week 3-7",
          desc: "Sprint 2 สัปดาห์ · demo ทุกศุกร์ · ลูกค้าเห็น progress จริง ไม่ใช่รอ 3 เดือนแล้วเซอร์ไพรส์",
        },
        {
          num: "04",
          name: "Ship & Scale",
          weeks: "Week 8+",
          desc: "Deploy production, monitoring, knowledge transfer, ดูแลต่อรายเดือนได้",
        },
      ],
    },
    work: {
      label: "ผลงาน",
      h2: "เคสที่เราภูมิใจ",
      sub: "เลือกมาบางส่วน — ดู NDA-friendly summary ก่อน",
      cases: [
        {
          industry: "FinTech",
          name: "ระบบ KYC สำหรับธนาคาร",
          result: "ลดเวลา onboarding 70%",
          desc: "Web app ทำ identity verification + document scan ส่งให้ระบบหลัง — ปัจจุบันใช้กับลูกค้าใหม่ 5,000+ คน/เดือน",
          stats: [
            { value: "70%", label: "เร็วขึ้น" },
            { value: "5K+", label: "users/mo" },
          ],
        },
        {
          industry: "E-commerce",
          name: "Headless storefront + admin",
          result: "Conversion +42%",
          desc: "ย้ายจาก Magento ไป Next.js + Shopify Storefront API — โหลดเร็วขึ้น 4 เท่า",
          stats: [
            { value: "+42%", label: "Conversion" },
            { value: "4x", label: "เร็วขึ้น" },
          ],
        },
        {
          industry: "Logistics",
          name: "Tracking dashboard real-time",
          result: "ลดงาน CS 60%",
          desc: "Live tracking + auto-notification ให้ลูกค้า — แทน workflow ที่ทีมต้องตอบ chat ทีละ ticket",
          stats: [
            { value: "-60%", label: "งาน CS" },
            { value: "24/7", label: "uptime" },
          ],
        },
      ],
    },
    cta: {
      eyebrow: "// READY TO BUILD?",
      h2Before: "เล่าโปรเจกต์ของคุณให้ฟัง — ",
      h2Accent: "เราจะตอบกลับใน 24 ชั่วโมง",
      sub: "ไม่ว่าจะเป็น greenfield หรือ legacy migration — เราเริ่มที่ฟัง ก่อนจะ propose",
      placeholder: "you@company.com",
      button: "ส่งข้อความ",
      note: "ฟรี · ไม่ผูกมัด · NDA available on request",
    },
    footer: {
      desc: "บริษัท software studio ที่ทำงานกับ team ที่กล้า ship จริง",
      columns: [
        { title: "บริการ", items: ["Web Apps", "Mobile", "Cloud", "AI"] },
        { title: "บริษัท", items: ["เกี่ยวกับเรา", "ผลงาน", "Careers"] },
        {
          title: "ติดต่อ",
          items: ["hello@stratos.dev", "+66 02 xxx xxxx", "Bangkok, Thailand"],
        },
      ],
      copyright: "© 2026 Stratos Digital · All rights reserved",
    },
  },
  en: {
    brand: {
      name: "STRATOS",
      tagline: "Software studio for ambitious teams",
    },
    nav: {
      services: "Services",
      process: "Process",
      work: "Work",
      cta: "Get a quote",
    },
    hero: {
      eyebrow: "// IT Consulting & Software Development",
      h1Before: "Software that ships.\n",
      h1Accent: "Teams that scale.",
      h1After: "",
      lead: "We help ambitious companies design, build, and scale digital systems — from MVP to products serving hundreds of thousands.",
      ctaPrimary: "Book a free 30-min call",
      ctaGhost: "See case studies",
      stats: [
        { value: "50+", label: "Projects shipped" },
        { value: "12", label: "Industries" },
        { value: "98%", label: "On-time delivery" },
        { value: "5y", label: "In market" },
      ],
    },
    trust: {
      label: "TRUSTED BY",
      note: "Teams that bet on technology, seriously",
    },
    services: {
      label: "Services",
      h2: "What we build",
      sub: "End-to-end — from research and UX to code, deploy, and scale",
      items: [
        {
          num: "01",
          name: "Web Applications",
          desc: "Next.js · React · TypeScript — fast, SEO-friendly web apps that scale under heavy traffic.",
          tags: ["Next.js", "TypeScript", "PostgreSQL"],
        },
        {
          num: "02",
          name: "Mobile Development",
          desc: "iOS / Android with React Native — ship features to both platforms simultaneously, half the cost.",
          tags: ["React Native", "Expo", "Native modules"],
        },
        {
          num: "03",
          name: "Cloud & DevOps",
          desc: "AWS · GCP · Vercel — auto-scaling, CI/CD, observability from day one. No firefighting later.",
          tags: ["AWS", "Docker", "GitHub Actions"],
        },
        {
          num: "04",
          name: "AI Integration",
          desc: "LLMs · embeddings · RAG — embed AI into your existing product, not just bolt-on chatbots.",
          tags: ["OpenAI", "LangChain", "Vector DB"],
        },
      ],
    },
    process: {
      label: "Process",
      h2: "From idea to launch in 8 weeks",
      sub: "Battle-tested across 50+ projects — adapted to each client's scope",
      steps: [
        {
          num: "01",
          name: "Discovery",
          weeks: "Week 1-2",
          desc: "Stakeholder interviews, user journey mapping, technical audit of existing systems.",
        },
        {
          num: "02",
          name: "Design",
          weeks: "Week 2-3",
          desc: "Wireframe → high-fidelity mockups in Figma + ready-to-implement design system.",
        },
        {
          num: "03",
          name: "Build",
          weeks: "Week 3-7",
          desc: "Two-week sprints · Friday demos · clients see real progress, not surprise launches.",
        },
        {
          num: "04",
          name: "Ship & Scale",
          weeks: "Week 8+",
          desc: "Production deploy, monitoring, knowledge transfer, ongoing maintenance available.",
        },
      ],
    },
    work: {
      label: "Work",
      h2: "Cases we're proud of",
      sub: "Selected — NDA-friendly summaries below",
      cases: [
        {
          industry: "FinTech",
          name: "KYC system for a bank",
          result: "Onboarding 70% faster",
          desc: "Web app for identity verification + document scanning, integrated with core banking — now serves 5,000+ new customers/month.",
          stats: [
            { value: "70%", label: "Faster" },
            { value: "5K+", label: "users/mo" },
          ],
        },
        {
          industry: "E-commerce",
          name: "Headless storefront + admin",
          result: "Conversion +42%",
          desc: "Migrated from Magento to Next.js + Shopify Storefront API — 4× faster page loads.",
          stats: [
            { value: "+42%", label: "Conversion" },
            { value: "4x", label: "Faster" },
          ],
        },
        {
          industry: "Logistics",
          name: "Real-time tracking dashboard",
          result: "CS workload -60%",
          desc: "Live tracking + auto-notifications — replaced a workflow where the team answered tickets one by one.",
          stats: [
            { value: "-60%", label: "CS load" },
            { value: "24/7", label: "uptime" },
          ],
        },
      ],
    },
    cta: {
      eyebrow: "// READY TO BUILD?",
      h2Before: "Tell us about your project — ",
      h2Accent: "we reply within 24 hours",
      sub: "Greenfield or legacy migration — we listen first, propose second.",
      placeholder: "you@company.com",
      button: "Send message",
      note: "Free · No commitment · NDA available on request",
    },
    footer: {
      desc: "A software studio that works with teams brave enough to actually ship.",
      columns: [
        { title: "Services", items: ["Web Apps", "Mobile", "Cloud", "AI"] },
        { title: "Company", items: ["About", "Work", "Careers"] },
        {
          title: "Contact",
          items: ["hello@stratos.dev", "+66 02 xxx xxxx", "Bangkok, Thailand"],
        },
      ],
      copyright: "© 2026 Stratos Digital · All rights reserved",
    },
  },
};

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const I18nContext = createContext<I18nContextValue>({
  lang: "th",
  setLang: () => {},
  t: dict.th,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("th");
  return (
    <I18nContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
