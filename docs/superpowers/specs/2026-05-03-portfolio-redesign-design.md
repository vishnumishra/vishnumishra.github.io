# Portfolio Redesign Design Spec
**Date:** 2026-05-03  
**Project:** vishnumishra.github.io  
**Goal:** Transform the existing portfolio into an interactive, professional, lead-generation site that showcases AI/maritime expertise at Windward and attracts freelance/full-time opportunities.

---

## 1. Visual Style

### Color Palette
| Role | Color | Hex |
|------|-------|-----|
| Background (primary) | Near-black | `#0a0e1a` |
| Background (secondary) | Deep navy | `#0f2744` |
| Accent — Headlines & CTAs | Gold | `#f0c040` |
| Accent — Tech/AI elements | Cyan | `#00d4ff` |
| Accent — Supporting text | Soft blue | `#93c5fd` |
| Muted text | Slate | `#64748b` |
| Card backgrounds | Dark glass | `#ffffff08` with `1px solid #ffffff15` border |

### Typography
- Headings: bold, white or gold
- Body: slate-blue (`#94a3b8`)
- Code/tech labels: monospace, cyan
- Section labels: small-caps, gold, letter-spacing: 3px

### Interactivity
- **Particle canvas** on hero section (lightweight, star-field effect)
- **Typed.js** cycling roles in hero headline
- **AOS (Animate On Scroll)** scroll-reveal on all sections
- **Animated counters** triggered when stats scroll into view
- **Hover effects**: lift + glow on project/service cards
- **Sticky navbar** with active section highlight on scroll
- **Smooth scroll** throughout

---

## 2. Page Structure

Sections in order (single-page, anchor-linked):

1. Hero
2. About
3. AI Expertise *(new)*
4. Featured Projects — Maritime AI flagship + top 2 career highlights *(new)*
5. Services
6. Experience & Education
7. Testimonials + Clients
8. All Projects — complete list of older/existing work *(moved to last, before contact)*
9. Contact

> **Rule:** All projects from the existing site are preserved. Featured Projects (section 4) highlights the top 3 most impressive. The full "All Projects" section (section 8) lists everything else — older freelance work, KonixSoft projects, etc. — for completeness without cluttering the lead-gen flow.

---

## 3. Section Specifications

### 3.1 Hero
**Layout:** Two-column split — text left, avatar right.

**Left column:**
- Badge: `● AVAILABLE FOR PROJECTS` (gold, pulsing dot)
- H1: `Vishnu Mishra`
- Typed.js subtitle cycling: `Full-Stack Lead Developer`, `AI Architect`, `Maritime Intelligence Engineer`
- One-line tagline: "Building predictive intelligence @ Windward"
- Skill tags row: `LangGraph` · `Node.js` · `React` · `AWS` · `Multi-Agent`
- CTA buttons: **Email Me** (gold, solid) + **LinkedIn** (outlined)

**Right column:**
- VM initials avatar — large circle, gold border, gradient navy fill, white bold "VM" text

**Background:** Dark gradient (`#0a0e1a` → `#0f2744`) with canvas particle animation (subtle floating dots/stars).

---

### 3.2 About
**Layout:** Centered bio text + 4 animated stat counters below.

**Bio text** (updated from current):
> Full-stack developer and technical lead with 10+ years of experience building products at scale. Currently at Windward — the global leader in Maritime Predictive Intelligence — where I architect AI-driven systems including multi-agent pipelines, LangGraph workflows, and the Maritime Intelligence Chat System. I've shipped for 30M+ users, led teams of 6+, and worked across maritime, InsurTech, gaming, and fintech.

**Stat counters (animated on scroll):**
- `10+` Years Experience
- `30M+` Users Served
- `6` Companies
- `5+` AI Systems Built

**Skills progress bars** (updated):
- Left: AI/LLM Integration (90%), Software Architecture (85%), Backend Development (90%)
- Right: Frontend / React (80%), DevOps / AWS (70%), Multi-Agent Systems (85%)

---

### 3.3 AI Expertise *(new section)*
**Layout:** Section header + 6 cards in 2-row grid (3 per row on desktop, 1 on mobile).

**Section title:** "AI Engineering at Windward"
**Subtitle:** "Building the brain behind Maritime Predictive Intelligence"

**Cards (each with icon + title + one-liner):**
1. **LangGraph Workflows** — Stateful multi-step AI pipelines with conditional routing and loops
2. **DeepAgent Architecture** — Deep research agents that reason, retrieve, and synthesize
3. **Evals & Guardrails** — Automated LLM evaluation frameworks and safety guardrails
4. **Human-in-the-Loop (HITL)** — Approval workflows that keep humans in control of critical decisions
5. **Skills Framework** — Modular, composable agent skills for reusable AI capabilities
6. **Multi-Agent Orchestration** — Coordinating specialist agents for complex maritime intelligence tasks

**Background:** Slightly lighter dark (`#0f1e38`) to create visual separation.

---

### 3.4 Featured Projects *(new section)*
**Layout:** 3 large project cards, stacked or grid.

#### Card 1 — Maritime Intelligence Chat System *(flagship)*
- **Tag:** `Windward · 2023–Present`
- **Title:** Maritime Intelligence Chat System
- **Description:** A conversational AI platform enabling maritime professionals to query live vessel data, trigger intelligence playbooks, and receive deep analytical reports — all through natural language.
- **Capabilities list:**
  - Playbook orchestration (gather → query → compute → report)
  - Web search integration for real-time maritime news
  - Internal system queries (vessel tracking, risk scoring)
  - Computation agents for route analysis and predictions
  - Deep search report generation
  - Human-in-the-Loop approval flows
- **Tech tags:** `LangGraph` `Multi-Agent` `Node.js` `React` `Python` `AWS`
- **CTA:** "Learn More" (scrolls to contact / opens modal)

#### Card 2 — Loco Game Streaming Homefeed
- **Tag:** `Pocket Aces · 2020`
- **Title:** Personalized Homefeed API — 30M Users
- **Description:** Server-driven homefeed generation API delivering personalized content in under 100ms for 30 million users using configurable recipe functions and multi-level Redis caching.
- **Tech tags:** `Node.js` `DynamoDB` `Redis` `Server-Driven UI`

#### Card 3 — FreeUp Freelance Marketplace
- **Tag:** `FreeUp · 2017–2022`
- **Title:** Scalable Freelance Marketplace Platform
- **Description:** Lead engineer for 4.5 years on a US-based freelance marketplace. Designed and built microservices architecture supporting high-volume transactions and a global user base.
- **Tech tags:** `Node.js` `React.js` `Angular` `Microservices`

---

### 3.5 Services
**Layout:** 6 cards in 2-row grid (replaces current Lorem ipsum).

Updated service descriptions:
1. **AI/LLM Integration** — Design and build LLM-powered features: agents, RAG pipelines, evals, guardrails
2. **Full-Stack Web Apps** — End-to-end product development with Node.js, React, and cloud infrastructure
3. **Mobile & Hybrid Apps** — Cross-platform mobile applications with React Native
4. **Backend & APIs** — High-performance RESTful and GraphQL APIs built for scale
5. **Software Architecture** — System design, microservices, serverless — high-level and low-level
6. **Technical Leadership** — Team lead, code review, agile delivery, roadmap planning

---

### 3.6 Experience & Education
**Layout:** Two-column timeline (existing structure kept, content updated).

**Experience (left column):**
- 2023–Present: **Windward** — Full-Stack Lead Developer · Maritime AI
- 2022–2023: **Roadzen** — Technical Lead · InsurTech AI
- 2017–2022: **FreeUp** — Lead Software Engineer · Freelance Marketplace
- 2020–2020: **Pocket Aces (Loco)** — SDE-3 · Game Streaming

**Experience (right column):**
- 2016–2017: **EQTribe** — Full-Stack Developer
- 2015–2016: **TECSOL Software** — Node.js Developer
- 2014–2015: **ThoughtWorks** — Application Developer
- 2018: **KonixSoft** — Founded company

**Education (integrated into timeline or below):**
- 2014–2017: BCA — University of Madras
- 2011–2014: Diploma in Computer Science — Guru Nanak Dev Polytechnic

---

### 3.7 Testimonials + Clients
Keep existing carousel with 4 testimonials (Mohit Shukla, Rachna Shukla, Afreen Munawwar, Sapna Rajaputra). Keep existing client logo row. Add Windward logo to client logos.

---

### 3.8 All Projects *(full list, shown last before contact)*
**Layout:** Grid of smaller project cards or a clean list.

All existing/older projects from the current site and career preserved here:
- KonixSoft products and client work
- Freelance projects from FreeUp era
- Any other notable work not featured in section 3.4

This section appears **after** testimonials so the AI/flagship work leads the page and older work is available for those who scroll deep.

---

### 3.9 Contact
**Layout:** Centered, minimal.

**Content:**
- Section title: "Let's Build Something"
- Subtitle: "Available for freelance projects, consulting, and full-time opportunities"
- Email: `cybercognizant@gmail.com` (icon + link)
- LinkedIn: `linkedin.com/in/cyberbaba` (icon + link)
- Location: Bengaluru, India

**No contact form** — email and LinkedIn links only.

---

## 4. Navigation
Navbar links (updated): Home · About · AI Expertise · Projects · Services · Experience · Contact

Active section highlighted on scroll. Sticky. Logo shows "VM" in gold.

---

## 5. Footer
- Copyright: `2026 © Vishnu Mishra`
- Social icons: LinkedIn, GitHub, Stack Overflow
- Remove KonixSoft branding from footer

---

## 6. Technical Approach

### What changes
- Rewrite `index.html` entirely — keep existing CSS/JS dependency files, add AOS and canvas particle script
- Update `css/style.min.css` or add a new `css/custom.css` for dark theme overrides
- Update `js/index.js` for counter animations, particle canvas, active nav highlight

### Dependencies to add
- **AOS** (Animate On Scroll) — CDN link
- **Canvas particles** — small inline script (~50 lines), no external dependency

### Dependencies kept
- Bootstrap, jQuery, Typed.js, Owl Carousel, Magnific Popup — all kept as-is

### SEO / Meta
- Update `<title>`: `Vishnu Mishra — AI Architect & Full-Stack Lead Developer`
- Update `<meta description>`: "Full-stack lead developer and AI architect at Windward. 10+ years building scalable systems. LangGraph, multi-agent, Node.js, React. Available for consulting."
- Update keywords

---

## 7. Out of Scope
- Backend / server-side contact form processing
- Blog section
- CMS integration
- Calendly / booking widget (can be added later)
- Actual Maritime Intelligence demo (screenshots/description only)
