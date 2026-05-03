# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fully rewrite vishnumishra.github.io into a dark, interactive, AI-forward professional portfolio with lead generation focus.

**Architecture:** Single-page HTML site. Rewrite `index.html` completely. Add `css/custom.css` for all dark-theme styles. Add `js/particles.js` for hero particle canvas. Update `js/index.js` for active-nav scroll tracking. All existing JS/CSS vendor files kept as-is.

**Tech Stack:** HTML5, Bootstrap 4, jQuery, Typed.js, Owl Carousel, AOS (CDN), CSS3 custom properties, Canvas API

---

## Task 1: Setup — new files + CDN links

**Files:**
- Create: `css/custom.css`
- Create: `js/particles.js`
- Modify: `index.html` (head section only — add AOS CDN + custom.css link)

- [ ] **Step 1: Create `css/custom.css` with CSS variable skeleton**

```css
/* css/custom.css */
:root {
  --bg-primary: #0a0e1a;
  --bg-secondary: #0f2744;
  --bg-navy: #0f1e38;
  --gold: #f0c040;
  --cyan: #00d4ff;
  --blue-soft: #93c5fd;
  --text-muted-dark: #94a3b8;
  --card-bg: rgba(255,255,255,0.04);
  --card-border: rgba(255,255,255,0.08);
}
```

- [ ] **Step 2: Create `js/particles.js` as empty placeholder**

```js
// js/particles.js — implemented in Task 4
```

- [ ] **Step 3: Verify files exist**

```bash
ls css/custom.css js/particles.js
```
Expected: both files listed.

- [ ] **Step 4: Commit**

```bash
git add css/custom.css js/particles.js
git commit -m "feat: add custom.css and particles.js stubs"
```

---

## Task 2: Rewrite index.html — complete new structure

**Files:**
- Modify: `index.html` (full rewrite)

- [ ] **Step 1: Replace entire contents of `index.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Vishnu Mishra — AI Architect &amp; Full-Stack Lead Developer</title>
  <meta name="description" content="Full-stack lead developer and AI architect at Windward. 10+ years building scalable systems. LangGraph, multi-agent, Node.js, React. Available for consulting." />
  <meta name="keywords" content="Vishnu Mishra, AI Architect, LangGraph, Full Stack Developer, Maritime Intelligence, Node.js, React, Multi-Agent, DeepAgent, Windward" />
  <meta name="author" content="Vishnu Mishra" />
  <link rel="shortcut icon" href="images/favicon.ico">
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/materialdesignicons.min.css">
  <link rel="stylesheet" href="css/mobiriseicons.css">
  <link rel="stylesheet" href="css/magnific-popup.css">
  <link rel="stylesheet" href="css/animate.min.css">
  <link rel="stylesheet" href="css/owl.carousel.css" />
  <link rel="stylesheet" href="css/owl.theme.css" />
  <link rel="stylesheet" href="css/owl.transitions.css" />
  <link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" />
  <link rel="stylesheet" href="css/custom.css">
</head>
<body>

  <!-- PRELOADER -->
  <div id="preloader">
    <div id="status"><div class="spinner">Loading...</div></div>
  </div>

  <!-- NAVBAR -->
  <nav class="navbar navbar-expand-lg fixed-top custom-nav sticky">
    <div class="container">
      <a class="navbar-brand" href="#home">
        <span class="nav-logo">VM</span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <i class="mdi mdi-menu nav-toggler-icon"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active"><a href="#home" class="nav-link">Home</a></li>
          <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
          <li class="nav-item"><a href="#ai-expertise" class="nav-link">AI Expertise</a></li>
          <li class="nav-item"><a href="#projects" class="nav-link">Projects</a></li>
          <li class="nav-item"><a href="#services" class="nav-link">Services</a></li>
          <li class="nav-item"><a href="#experience" class="nav-link">Experience</a></li>
          <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero-section" id="home">
    <canvas id="particles-canvas"></canvas>
    <div class="hero-content">
      <div class="container">
        <div class="row align-items-center min-vh-100">
          <div class="col-lg-7 col-md-8" data-aos="fade-right" data-aos-delay="100">
            <div class="available-badge">
              <span class="pulse-dot"></span> AVAILABLE FOR PROJECTS
            </div>
            <h1 class="hero-name">Vishnu Mishra</h1>
            <h2 class="hero-role">
              I'm a <span class="element" data-elements="Full-Stack Lead Developer.,AI Architect.,Maritime Intelligence Engineer."></span>
            </h2>
            <p class="hero-tagline">Building predictive intelligence @ <span class="text-gold">Windward</span></p>
            <div class="hero-tags">
              <span class="skill-tag">LangGraph</span>
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">React</span>
              <span class="skill-tag">AWS</span>
              <span class="skill-tag">Multi-Agent</span>
            </div>
            <div class="hero-ctas mt-4">
              <a href="mailto:cybercognizant@gmail.com" class="btn btn-gold">Email Me</a>
              <a href="https://www.linkedin.com/in/cyberbaba/" target="_blank" class="btn btn-outline-cyan ml-3">LinkedIn</a>
            </div>
          </div>
          <div class="col-lg-5 col-md-4 text-center d-none d-md-block" data-aos="fade-left" data-aos-delay="200">
            <div class="avatar-circle">
              <span>VM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="scroll_down">
      <a href="#about" class="scroll"><i class="mbri-arrow-down text-white"></i></a>
    </div>
  </section>

  <!-- ABOUT -->
  <section class="section dark-section" id="about">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12" data-aos="fade-up">
          <div class="text-center section-header">
            <span class="section-label">WHO I AM</span>
            <h2>About <span class="text-gold">Me</span></h2>
            <div class="title-divider"></div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-4">
        <div class="col-lg-8 text-center" data-aos="fade-up" data-aos-delay="100">
          <p class="about-bio">
            Full-stack developer and technical lead with 10+ years of experience building products at scale. Currently at <span class="text-gold">Windward</span> — the global leader in Maritime Predictive Intelligence — where I architect AI-driven systems including multi-agent pipelines, LangGraph workflows, and the Maritime Intelligence Chat System. I've shipped for 30M+ users, led teams of 6+, and worked across maritime, InsurTech, gaming, and fintech.
          </p>
        </div>
      </div>
      <div class="row mt-5" id="counter">
        <div class="col-lg-3 col-6" data-aos="fade-up" data-aos-delay="100">
          <div class="stat-card text-center">
            <div><span class="stat-value text-gold" data-count="10">0</span><span class="stat-suffix text-gold">+</span></div>
            <p class="stat-label">Years Experience</p>
          </div>
        </div>
        <div class="col-lg-3 col-6" data-aos="fade-up" data-aos-delay="200">
          <div class="stat-card text-center">
            <div><span class="stat-value text-cyan" data-count="30">0</span><span class="stat-suffix text-cyan">M+</span></div>
            <p class="stat-label">Users Served</p>
          </div>
        </div>
        <div class="col-lg-3 col-6" data-aos="fade-up" data-aos-delay="300">
          <div class="stat-card text-center">
            <div><span class="stat-value text-gold" data-count="6">0</span></div>
            <p class="stat-label">Companies</p>
          </div>
        </div>
        <div class="col-lg-3 col-6" data-aos="fade-up" data-aos-delay="400">
          <div class="stat-card text-center">
            <div><span class="stat-value text-cyan" data-count="5">0</span><span class="stat-suffix text-cyan">+</span></div>
            <p class="stat-label">AI Systems Built</p>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-6" data-aos="fade-right">
          <div class="skill-bar-group">
            <div class="skill-item">
              <div class="d-flex justify-content-between mb-1">
                <span class="skill-name">AI / LLM Integration</span>
                <span class="skill-pct text-cyan">90%</span>
              </div>
              <div class="progress dark-progress">
                <div class="progress-bar cyan-bar" style="width:90%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="d-flex justify-content-between mb-1">
                <span class="skill-name">Software Architecture</span>
                <span class="skill-pct text-gold">85%</span>
              </div>
              <div class="progress dark-progress">
                <div class="progress-bar gold-bar" style="width:85%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="d-flex justify-content-between mb-1">
                <span class="skill-name">Backend Development</span>
                <span class="skill-pct text-cyan">90%</span>
              </div>
              <div class="progress dark-progress">
                <div class="progress-bar cyan-bar" style="width:90%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-left">
          <div class="skill-bar-group">
            <div class="skill-item">
              <div class="d-flex justify-content-between mb-1">
                <span class="skill-name">Frontend / React</span>
                <span class="skill-pct text-gold">80%</span>
              </div>
              <div class="progress dark-progress">
                <div class="progress-bar gold-bar" style="width:80%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="d-flex justify-content-between mb-1">
                <span class="skill-name">DevOps / AWS</span>
                <span class="skill-pct text-cyan">70%</span>
              </div>
              <div class="progress dark-progress">
                <div class="progress-bar cyan-bar" style="width:70%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="d-flex justify-content-between mb-1">
                <span class="skill-name">Multi-Agent Systems</span>
                <span class="skill-pct text-gold">85%</span>
              </div>
              <div class="progress dark-progress">
                <div class="progress-bar gold-bar" style="width:85%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- AI EXPERTISE -->
  <section class="section navy-section" id="ai-expertise">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12" data-aos="fade-up">
          <div class="text-center section-header">
            <span class="section-label">WINDWARD · 2023–PRESENT</span>
            <h2>AI Engineering at <span class="text-gold">Windward</span></h2>
            <div class="title-divider"></div>
            <p class="section-subtitle">Building the brain behind Maritime Predictive Intelligence</p>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div class="ai-card">
            <div class="ai-card-icon"><i class="mdi mdi-graph text-cyan"></i></div>
            <h5>LangGraph Workflows</h5>
            <p>Stateful multi-step AI pipelines with conditional routing, loops, and dynamic branching logic</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div class="ai-card">
            <div class="ai-card-icon"><i class="mdi mdi-brain text-gold"></i></div>
            <h5>DeepAgent Architecture</h5>
            <p>Deep research agents that reason, retrieve, and synthesize complex maritime intelligence</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div class="ai-card">
            <div class="ai-card-icon"><i class="mdi mdi-shield-check text-cyan"></i></div>
            <h5>Evals &amp; Guardrails</h5>
            <p>Automated LLM evaluation frameworks and safety guardrails for production AI systems</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
          <div class="ai-card">
            <div class="ai-card-icon"><i class="mdi mdi-account-check text-gold"></i></div>
            <h5>Human-in-the-Loop (HITL)</h5>
            <p>Approval workflows that keep humans in control of critical maritime operational decisions</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
          <div class="ai-card">
            <div class="ai-card-icon"><i class="mdi mdi-puzzle text-cyan"></i></div>
            <h5>Skills Framework</h5>
            <p>Modular, composable agent skills for reusable AI capabilities across the entire platform</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
          <div class="ai-card">
            <div class="ai-card-icon"><i class="mdi mdi-account-group text-gold"></i></div>
            <h5>Multi-Agent Orchestration</h5>
            <p>Coordinating specialist agents for complex maritime intelligence and deep analytical tasks</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURED PROJECTS -->
  <section class="section dark-section" id="projects">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12" data-aos="fade-up">
          <div class="text-center section-header">
            <span class="section-label">SELECTED WORK</span>
            <h2>Featured <span class="text-gold">Projects</span></h2>
            <div class="title-divider"></div>
          </div>
        </div>
      </div>
      <div class="row mt-5" data-aos="fade-up" data-aos-delay="100">
        <div class="col-lg-12">
          <div class="project-card flagship-card">
            <div class="project-card-header">
              <div>
                <span class="project-tag">Windward · 2023–Present</span>
                <span class="project-tag flagship-tag ml-2">Flagship</span>
              </div>
              <div class="project-tech-tags mt-2">
                <span>LangGraph</span><span>Multi-Agent</span><span>Node.js</span><span>React</span><span>Python</span><span>AWS</span>
              </div>
            </div>
            <h3 class="project-title">Maritime Intelligence Chat System</h3>
            <p class="project-desc">A conversational AI platform enabling maritime professionals to query live vessel data, trigger intelligence playbooks, and receive deep analytical reports — all through natural language.</p>
            <div class="row mt-3">
              <div class="col-md-6">
                <div class="playbook-item"><i class="mdi mdi-check-circle text-cyan mr-2"></i>Playbook orchestration (gather → query → compute → report)</div>
                <div class="playbook-item"><i class="mdi mdi-check-circle text-cyan mr-2"></i>Web search integration for real-time maritime intelligence</div>
                <div class="playbook-item"><i class="mdi mdi-check-circle text-cyan mr-2"></i>Internal system queries (vessel tracking, risk scoring)</div>
              </div>
              <div class="col-md-6">
                <div class="playbook-item"><i class="mdi mdi-check-circle text-cyan mr-2"></i>Computation agents for route analysis and predictions</div>
                <div class="playbook-item"><i class="mdi mdi-check-circle text-cyan mr-2"></i>Deep search report generation</div>
                <div class="playbook-item"><i class="mdi mdi-check-circle text-cyan mr-2"></i>Human-in-the-Loop approval flows</div>
              </div>
            </div>
            <a href="mailto:cybercognizant@gmail.com" class="btn btn-gold mt-4">Learn More</a>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
          <div class="project-card">
            <div class="project-card-header">
              <span class="project-tag">Pocket Aces · 2020</span>
              <div class="project-tech-tags mt-2">
                <span>Node.js</span><span>DynamoDB</span><span>Redis</span><span>Server-Driven UI</span>
              </div>
            </div>
            <h4 class="project-title">Personalized Homefeed API — 30M Users</h4>
            <p class="project-desc">Server-driven homefeed generation API delivering personalized content in under 100ms for 30 million users using configurable recipe functions and multi-level Redis caching.</p>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-left" data-aos-delay="200">
          <div class="project-card">
            <div class="project-card-header">
              <span class="project-tag">FreeUp · 2017–2022</span>
              <div class="project-tech-tags mt-2">
                <span>Node.js</span><span>React.js</span><span>Angular</span><span>Microservices</span>
              </div>
            </div>
            <h4 class="project-title">Scalable Freelance Marketplace Platform</h4>
            <p class="project-desc">Lead engineer for 4.5 years on a US-based freelance marketplace. Designed and built microservices architecture supporting high-volume transactions and a global user base.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section class="section navy-section" id="services">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12" data-aos="fade-up">
          <div class="text-center section-header">
            <span class="section-label">WHAT I OFFER</span>
            <h2>My <span class="text-gold">Services</span></h2>
            <div class="title-divider"></div>
            <p class="section-subtitle">End-to-end software solutions — from architecture to deployment</p>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div class="service-card text-center">
            <div class="service-icon"><i class="mdi mdi-brain"></i></div>
            <h5>AI / LLM Integration</h5>
            <p>Design and build LLM-powered features: agents, RAG pipelines, evals, and guardrails for production systems</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div class="service-card text-center">
            <div class="service-icon"><i class="mbri-website-theme"></i></div>
            <h5>Full-Stack Web Apps</h5>
            <p>End-to-end product development with Node.js, React, and cloud infrastructure built for scale</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div class="service-card text-center">
            <div class="service-icon"><i class="mbri-touch"></i></div>
            <h5>Mobile &amp; Hybrid Apps</h5>
            <p>Cross-platform mobile applications with React Native delivering native performance and experience</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
          <div class="service-card text-center">
            <div class="service-icon"><i class="mbri-database"></i></div>
            <h5>Backend &amp; APIs</h5>
            <p>High-performance RESTful and GraphQL APIs engineered for reliability, speed, and fault tolerance</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
          <div class="service-card text-center">
            <div class="service-icon"><i class="mbri-growing-chart"></i></div>
            <h5>Software Architecture</h5>
            <p>System design, microservices, and serverless architectures — high-level strategy to low-level design</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
          <div class="service-card text-center">
            <div class="service-icon"><i class="mbri-setting"></i></div>
            <h5>Technical Leadership</h5>
            <p>Team lead, code review, agile delivery, and technical roadmap planning for engineering teams</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- EXPERIENCE & EDUCATION -->
  <section class="section dark-section" id="experience">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12" data-aos="fade-up">
          <div class="text-center section-header">
            <span class="section-label">MY JOURNEY</span>
            <h2>Experience &amp; <span class="text-gold">Education</span></h2>
            <div class="title-divider"></div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-6" data-aos="fade-right">
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-year text-gold">2023 – Present</div>
              <h5 class="text-white">Windward</h5>
              <span class="timeline-role">Full-Stack Lead Developer · Maritime AI</span>
              <p>Spearheaded AI microservices, multi-agent systems, and the Maritime Intelligence Chat System. Scaled systems for global maritime operations.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year text-cyan">2022 – 2023</div>
              <h5 class="text-white">Roadzen</h5>
              <span class="timeline-role">Technical Lead · InsurTech AI</span>
              <p>Led a team of 6 building AI-powered risk scoring, video damage detection, and rapid claim settlement systems.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year text-gold">2017 – 2022</div>
              <h5 class="text-white">FreeUp</h5>
              <span class="timeline-role">Lead Software Engineer · Freelance Marketplace</span>
              <p>4.5 years as lead engineer on a US-based freelance marketplace. Microservices, Node.js, React.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year text-cyan">2020</div>
              <h5 class="text-white">Pocket Aces (Loco)</h5>
              <span class="timeline-role">SDE-3 · Game Streaming</span>
              <p>Built personalized homefeed API serving 30M users with sub-100ms response times.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-left">
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-year text-gold">2016 – 2017</div>
              <h5 class="text-white">EQTribe</h5>
              <span class="timeline-role">Full-Stack Developer</span>
              <p>Microservices, serverless architecture, Node.js, IoT, webRTC, and gRPC. Built core product features end-to-end.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year text-cyan">2015 – 2016</div>
              <h5 class="text-white">TECSOL Software</h5>
              <span class="timeline-role">Node.js Developer</span>
              <p>Full-stack development, secure auth systems, RESTful APIs, PostgreSQL, MongoDB, mobile push notifications.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year text-gold">2014 – 2015</div>
              <h5 class="text-white">ThoughtWorks</h5>
              <span class="timeline-role">Application Developer</span>
              <p>Agile development, TDD, refactoring, and engineering best practices at one of the world's top software consultancies.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year text-cyan">2018</div>
              <h5 class="text-white">KonixSoft</h5>
              <span class="timeline-role">Founder</span>
              <p>Founded a software development company building web, mobile, and hybrid applications. <a href="http://konixsoft.com" target="_blank" class="text-gold">konixsoft.com</a></p>
            </div>
          </div>
          <div class="timeline mt-4">
            <div class="timeline-item">
              <div class="timeline-year text-gold">2014 – 2017</div>
              <h5 class="text-white">University of Madras</h5>
              <span class="timeline-role">BCA · Computer Software Engineering</span>
            </div>
            <div class="timeline-item">
              <div class="timeline-year text-cyan">2011 – 2014</div>
              <h5 class="text-white">Guru Nanak Dev Polytechnic</h5>
              <span class="timeline-role">Diploma · Computer Science</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="section bg-client" id="client">
    <div class="bg-overlay"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12" data-aos="fade-up">
          <div class="text-center text-white section-header">
            <span class="section-label" style="color:var(--gold)">WHAT PEOPLE SAY</span>
            <h2>Client <span style="color:var(--gold)">Testimonials</span></h2>
            <div class="title-divider" style="background:var(--gold)"></div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-12">
          <div id="owl-demo" class="owl-carousel">
            <div class="text-white people_says text-center">
              <div class="people_icon"><img src="images/feedback/1.jpeg" alt="Mohit Shukla"></div>
              <div class="people_review_box mt-4">
                <p class="people_name text-white h5 font-weight-bold mb-0">Mohit Shukla</p>
                <p class="h6">EQTribe</p>
                <p class="people_review text-white mx-auto pt-3 mb-0">"Vishnu was one of our star software engineers at EQTribe — our code Ninja. Extremely quick in researching new topics, proactively helps others, and has the capability to understand nuances of intricate software design."</p>
              </div>
            </div>
            <div class="text-white people_says text-center">
              <div class="people_icon"><img src="images/feedback/2.jpeg" alt="Rachna Shukla"></div>
              <div class="people_review_box mt-4">
                <p class="people_name text-white h5 font-weight-bold mb-0">Rachna Shukla</p>
                <p class="h6">EQTribe</p>
                <p class="people_review text-white mx-auto pt-3 mb-0">"Vishnu is a super hacker and EQTribe was very fortunate to have him. Very quick to learn new technologies, always excited about new challenges, the go-to person if anything new had to be cracked. Would love to have him back."</p>
              </div>
            </div>
            <div class="text-white people_says text-center">
              <div class="people_icon"><img src="images/feedback/4.jpeg" alt="Afreen Munawwar"></div>
              <div class="people_review_box mt-4">
                <p class="people_name text-white h5 font-weight-bold mb-0">Afreen Munawwar</p>
                <p class="h6">LEAP Dev</p>
                <p class="people_review text-white mx-auto pt-3 mb-0">"Vishnu is one of those developers who can be an asset to any team. Technically strong, a great learner, eager to pick up new technologies, and always delivers on time with good quality code."</p>
              </div>
            </div>
            <div class="text-white people_says text-center">
              <div class="people_icon"><img src="images/feedback/3.jpeg" alt="Sapna Rajaputra"></div>
              <div class="people_review_box mt-4">
                <p class="people_name text-white h5 font-weight-bold mb-0">Sapna Rajaputra</p>
                <p class="h6">EQTribe</p>
                <p class="people_review text-white mx-auto pt-3 mb-0">"Any problem and Vishnu is more than eager to take up the challenge. A good team player who is always ready to help others in need and knows how to have fun during work."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TRUSTED BY -->
  <section class="section navy-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12" data-aos="fade-up">
          <div class="text-center section-header">
            <span class="section-label">TRUSTED BY</span>
            <h2>Great <span class="text-gold">Companies</span></h2>
            <div class="title-divider"></div>
          </div>
        </div>
      </div>
      <div class="row mt-4 pt-2 justify-content-around align-items-center">
        <div class="col-lg-2 col-md-3 col-4 mt-3 text-center" data-aos="fade-up" data-aos-delay="100">
          <img src="images/clients/eqtribe.png" alt="EQTribe" class="client-logo img-fluid">
        </div>
        <div class="col-lg-2 col-md-3 col-4 mt-3 text-center" data-aos="fade-up" data-aos-delay="200">
          <img src="images/clients/bicycle_ai.jpg" alt="Bicycle AI" class="client-logo img-fluid">
        </div>
        <div class="col-lg-2 col-md-3 col-4 mt-3 text-center" data-aos="fade-up" data-aos-delay="300">
          <img src="images/clients/sac1.png" alt="SAC" class="client-logo img-fluid">
        </div>
        <div class="col-lg-2 col-md-3 col-4 mt-3 text-center" data-aos="fade-up" data-aos-delay="400">
          <img src="images/clients/freeeup.png" alt="FreeUp" class="client-logo img-fluid">
        </div>
        <div class="col-lg-2 col-md-3 col-4 mt-3 text-center" data-aos="fade-up" data-aos-delay="500">
          <img src="images/clients/grub_club.png" alt="Grub Club" class="client-logo img-fluid">
        </div>
      </div>
    </div>
  </section>

  <!-- ALL PROJECTS -->
  <section class="section dark-section" id="all-projects">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12" data-aos="fade-up">
          <div class="text-center section-header">
            <span class="section-label">FULL PORTFOLIO</span>
            <h2>All <span class="text-gold">Projects</span></h2>
            <div class="title-divider"></div>
            <p class="section-subtitle">A complete view of work across the years</p>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div class="mini-project-card">
            <h6>InsurTech AI Platform</h6>
            <p>AI risk scoring (RSA), video damage detection, and rapid claim settlement for multiple insurance brokers.</p>
            <div class="mini-tags"><span>Node.js</span><span>AI</span><span>React</span></div>
            <div class="mini-tag-company">Roadzen · 2022–2023</div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div class="mini-project-card">
            <h6>ShiftAlt Capital Finance App</h6>
            <p>Senior Software Consultant building the company web application in the finance sector.</p>
            <div class="mini-tags"><span>Node.js</span><span>Finance</span><span>React</span></div>
            <div class="mini-tag-company">ShiftAlt Capital · 2017–2018</div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div class="mini-project-card">
            <h6>KonixSoft — Client Projects</h6>
            <p>End-to-end product development for clients across web, mobile, and hybrid platforms.</p>
            <div class="mini-tags"><span>React</span><span>Node.js</span><span>Mobile</span></div>
            <div class="mini-tag-company">KonixSoft · 2018–Present</div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
          <div class="mini-project-card">
            <h6>EQTribe Product Platform</h6>
            <p>Core product features using microservices, serverless, Node.js, webRTC, and gRPC.</p>
            <div class="mini-tags"><span>Microservices</span><span>gRPC</span><span>Node.js</span></div>
            <div class="mini-tag-company">EQTribe · 2016–2017</div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
          <div class="mini-project-card">
            <h6>Coupon &amp; Promotions System</h6>
            <p>Comprehensive coupon management system with RESTful APIs, PostgreSQL, and mobile push notifications.</p>
            <div class="mini-tags"><span>Node.js</span><span>PostgreSQL</span><span>MongoDB</span></div>
            <div class="mini-tag-company">TECSOL · 2015–2016</div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
          <div class="mini-project-card">
            <h6>ThoughtWorks Agile Projects</h6>
            <p>Agile software projects with TDD, automated testing, and debugging modules for enterprise clients.</p>
            <div class="mini-tags"><span>Agile</span><span>TDD</span><span>Java</span></div>
            <div class="mini-tag-company">ThoughtWorks · 2014–2015</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="section navy-section" id="contact">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12" data-aos="fade-up">
          <div class="text-center section-header">
            <span class="section-label">GET IN TOUCH</span>
            <h2>Let's Build <span class="text-gold">Something</span></h2>
            <div class="title-divider"></div>
            <p class="section-subtitle">Available for freelance projects, consulting, and full-time opportunities</p>
          </div>
        </div>
      </div>
      <div class="row mt-5 justify-content-center">
        <div class="col-lg-4 col-md-6 text-center" data-aos="fade-right">
          <div class="contact-item">
            <i class="mbri-letter text-cyan h2 mb-3 d-block"></i>
            <p class="text-muted-light mb-1">Email Me At</p>
            <a href="mailto:cybercognizant@gmail.com" class="contact-link">cybercognizant@gmail.com</a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 text-center" data-aos="fade-left">
          <div class="contact-item">
            <i class="mdi mdi-linkedin text-cyan h2 mb-3 d-block"></i>
            <p class="text-muted-light mb-1">Connect on LinkedIn</p>
            <a href="https://www.linkedin.com/in/cyberbaba/" target="_blank" class="contact-link">linkedin.com/in/cyberbaba</a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 text-center" data-aos="fade-up" data-aos-delay="100">
          <div class="contact-item">
            <i class="mbri-pin text-cyan h2 mb-3 d-block"></i>
            <p class="text-muted-light mb-1">Location</p>
            <span class="contact-link">Bengaluru, India</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="dark-footer">
    <div class="container">
      <div class="row py-4 align-items-center">
        <div class="col-lg-6">
          <p class="mb-0 text-muted-dark">2026 &copy; Vishnu Mishra</p>
        </div>
        <div class="col-lg-6 text-lg-right">
          <ul class="list-inline mb-0 footer-social">
            <li class="list-inline-item"><a href="https://www.linkedin.com/in/cyberbaba/" target="_blank"><i class="mdi mdi-linkedin"></i></a></li>
            <li class="list-inline-item"><a href="https://github.com/vishnumishra" target="_blank"><i class="mdi mdi-github-circle"></i></a></li>
            <li class="list-inline-item"><a href="https://stackoverflow.com/users/4972822/vishnu-mishra" target="_blank"><i class="mdi mdi-stackoverflow"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

  <a href="#" class="back_top"><i class="mbri-arrow-up"></i></a>

  <!-- JS -->
  <script src="js/jquery.min.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/jquery.easing.min.js"></script>
  <script src="js/scrollspy.min.js"></script>
  <script src="js/typed.js"></script>
  <script src="js/jquery.magnific-popup.min.js"></script>
  <script src="js/owl.carousel.min.js"></script>
  <script src="js/particles.js"></script>
  <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
  <script src="js/index.js"></script>
  <script>
    AOS.init({ duration: 700, once: true, offset: 60 });
    $(".element").each(function () {
      var $this = $(this);
      $this.typed({ strings: $this.attr("data-elements").split(","), typeSpeed: 80, backDelay: 2500 });
    });
  </script>
</body>
</html>
```

- [ ] **Step 2: Open in browser to verify HTML structure loads (no CSS yet)**

```bash
open index.html
```
Expected: Page loads, sections visible in unstyled HTML. No JS errors in console.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: rewrite index.html with full new section structure"
```

---

## Task 3: Write css/custom.css — complete dark theme

**Files:**
- Modify: `css/custom.css` (full content)

- [ ] **Step 1: Replace full contents of `css/custom.css`**

```css
/* css/custom.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  --bg-primary: #0a0e1a;
  --bg-secondary: #0f2744;
  --bg-navy: #0f1e38;
  --gold: #f0c040;
  --cyan: #00d4ff;
  --blue-soft: #93c5fd;
  --text-muted-dark: #94a3b8;
  --card-bg: rgba(255,255,255,0.04);
  --card-border: rgba(255,255,255,0.08);
}

/* ===== BASE ===== */
body { background: var(--bg-primary); color: var(--text-muted-dark); font-family: 'Inter', 'Nunito', sans-serif; }
h1,h2,h3,h4,h5,h6 { color: #fff; }
.text-gold { color: var(--gold) !important; }
.text-cyan { color: var(--cyan) !important; }
.text-muted-light { color: var(--text-muted-dark); }
.section { padding: 80px 0; }
.dark-section { background: var(--bg-primary); }
.navy-section { background: var(--bg-navy); }

/* ===== PRELOADER ===== */
#preloader { background: var(--bg-primary); }
#status .spinner { color: var(--gold); }

/* ===== NAVBAR ===== */
.custom-nav { background: transparent; transition: background 0.3s, box-shadow 0.3s; }
.custom-nav.stickyadd { background: rgba(10,14,26,0.97) !important; box-shadow: 0 2px 20px rgba(0,0,0,0.5); }
.nav-logo { font-size: 22px; font-weight: 800; color: var(--gold); letter-spacing: 1px; }
.custom-nav .nav-link { color: rgba(255,255,255,0.75) !important; font-size: 13px; font-weight: 500; letter-spacing: 0.5px; padding: 8px 14px !important; transition: color 0.2s; }
.custom-nav .nav-link:hover, .custom-nav .nav-item.active .nav-link { color: var(--gold) !important; }
.nav-toggler-icon { color: #fff; font-size: 24px; }

/* ===== HERO ===== */
.hero-section { position: relative; background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%); min-height: 100vh; display: flex; align-items: center; overflow: hidden; }
#particles-canvas { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; }
.hero-content { position: relative; z-index: 1; width: 100%; }
.available-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(240,192,64,0.12); border: 1px solid rgba(240,192,64,0.35); color: var(--gold); font-size: 11px; font-weight: 700; letter-spacing: 2px; padding: 6px 16px; border-radius: 20px; margin-bottom: 20px; }
.pulse-dot { width: 8px; height: 8px; background: var(--gold); border-radius: 50%; animation: pulse-anim 1.5s infinite; flex-shrink: 0; }
@keyframes pulse-anim { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.4; transform:scale(1.4); } }
.hero-name { font-size: clamp(42px, 7vw, 72px); font-weight: 800; color: #fff; line-height: 1.1; margin-bottom: 16px; }
.hero-role { font-size: clamp(18px, 3vw, 26px); font-weight: 500; color: var(--blue-soft); margin-bottom: 12px; min-height: 40px; }
.hero-role .element { color: var(--cyan); font-weight: 700; }
.hero-tagline { font-size: 15px; color: var(--text-muted-dark); margin-bottom: 24px; }
.hero-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 8px; }
.skill-tag { background: rgba(0,212,255,0.1); border: 1px solid rgba(0,212,255,0.3); color: var(--cyan); padding: 4px 12px; border-radius: 14px; font-size: 12px; font-weight: 600; }
.btn-gold { background: var(--gold); color: #0a0e1a; font-weight: 700; padding: 10px 28px; border-radius: 6px; border: 2px solid var(--gold); transition: all 0.2s; font-size: 14px; }
.btn-gold:hover { background: transparent; color: var(--gold); }
.btn-outline-cyan { background: transparent; color: var(--cyan); border: 2px solid var(--cyan); font-weight: 700; padding: 10px 28px; border-radius: 6px; transition: all 0.2s; font-size: 14px; }
.btn-outline-cyan:hover { background: var(--cyan); color: var(--bg-primary); }
.avatar-circle { width: 200px; height: 200px; border-radius: 50%; background: linear-gradient(135deg, var(--bg-secondary), var(--bg-navy)); border: 3px solid var(--gold); display: flex; align-items: center; justify-content: center; margin: 0 auto; box-shadow: 0 0 40px rgba(240,192,64,0.2); }
.avatar-circle span { font-size: 64px; font-weight: 800; color: #fff; letter-spacing: -2px; }
.scroll_down { position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); z-index: 2; }
.scroll_down .scroll { font-size: 28px; animation: bounce 2s infinite; display: block; }
@keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(8px)} }

/* ===== SECTION HEADERS ===== */
.section-header { margin-bottom: 10px; }
.section-label { font-size: 11px; font-weight: 700; letter-spacing: 3px; color: var(--gold); text-transform: uppercase; display: block; margin-bottom: 10px; }
.section-header h2 { font-size: clamp(28px, 4vw, 40px); font-weight: 800; color: #fff; margin-bottom: 16px; }
.title-divider { width: 50px; height: 3px; background: var(--cyan); margin: 0 auto 20px; border-radius: 2px; }
.section-subtitle { color: var(--text-muted-dark); font-size: 15px; max-width: 560px; margin: 0 auto; }

/* ===== ABOUT ===== */
.about-bio { font-size: 16px; line-height: 1.8; color: var(--text-muted-dark); }
.stat-card { padding: 30px 20px; }
.stat-value { font-size: 52px; font-weight: 800; line-height: 1; display: inline-block; }
.stat-suffix { font-size: 28px; font-weight: 700; vertical-align: top; margin-top: 8px; display: inline-block; }
.stat-label { font-size: 12px; letter-spacing: 1px; text-transform: uppercase; color: var(--text-muted-dark); margin-top: 8px; }
.skill-bar-group { padding: 10px 0; }
.skill-item { margin-bottom: 22px; }
.skill-name { font-size: 13px; font-weight: 600; color: #fff; }
.skill-pct { font-size: 13px; font-weight: 700; }
.dark-progress { background: rgba(255,255,255,0.07); height: 6px; border-radius: 3px; }
.cyan-bar { background: var(--cyan); }
.gold-bar { background: var(--gold); }

/* ===== AI EXPERTISE CARDS ===== */
.ai-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 10px; padding: 28px 24px; margin-bottom: 24px; transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s; }
.ai-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.4); border-color: rgba(0,212,255,0.3); }
.ai-card-icon { font-size: 32px; margin-bottom: 14px; }
.ai-card h5 { color: #fff; font-weight: 700; font-size: 16px; margin-bottom: 8px; }
.ai-card p { font-size: 13px; color: var(--text-muted-dark); margin: 0; line-height: 1.6; }

/* ===== FEATURED PROJECTS ===== */
.project-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 12px; padding: 30px; margin-bottom: 24px; transition: transform 0.25s, box-shadow 0.25s; }
.project-card:hover { transform: translateY(-3px); box-shadow: 0 16px 48px rgba(0,0,0,0.4); }
.flagship-card { border-color: rgba(240,192,64,0.25); background: rgba(240,192,64,0.03); }
.flagship-card:hover { border-color: rgba(240,192,64,0.5); }
.project-card-header { margin-bottom: 16px; }
.project-tag { display: inline-block; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); color: var(--text-muted-dark); font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 4px; }
.flagship-tag { background: rgba(240,192,64,0.15); border-color: rgba(240,192,64,0.4); color: var(--gold); }
.project-tech-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.project-tech-tags span { background: rgba(0,212,255,0.1); border: 1px solid rgba(0,212,255,0.25); color: var(--cyan); font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 3px; }
.project-title { color: #fff; font-weight: 700; font-size: 20px; margin-bottom: 10px; margin-top: 14px; }
.project-desc { color: var(--text-muted-dark); font-size: 14px; line-height: 1.7; }
.playbook-item { font-size: 13px; color: var(--text-muted-dark); padding: 5px 0; }
.playbook-item .mdi { margin-right: 6px; }

/* ===== SERVICES ===== */
.service-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 10px; padding: 32px 24px; margin-bottom: 24px; transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s; }
.service-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.4); border-color: rgba(240,192,64,0.3); }
.service-icon { font-size: 36px; color: var(--gold); margin-bottom: 16px; }
.service-card h5 { color: #fff; font-weight: 700; font-size: 16px; margin-bottom: 10px; }
.service-card p { font-size: 13px; color: var(--text-muted-dark); margin: 0; line-height: 1.6; }

/* ===== TIMELINE ===== */
.timeline { position: relative; padding-left: 20px; }
.timeline::before { content:''; position:absolute; left:0; top:0; bottom:0; width:2px; background:linear-gradient(to bottom, var(--gold), var(--cyan), var(--gold)); opacity:0.3; border-radius:2px; }
.timeline-item { position: relative; padding: 0 0 32px 24px; }
.timeline-item::before { content:''; position:absolute; left:-5px; top:6px; width:12px; height:12px; border-radius:50%; background:var(--bg-primary); border:2px solid var(--gold); }
.timeline-year { font-size: 12px; font-weight: 700; letter-spacing: 1px; margin-bottom: 4px; }
.timeline-item h5 { color: #fff; font-size: 16px; font-weight: 700; margin: 0 0 2px; }
.timeline-role { font-size: 12px; color: var(--cyan); font-weight: 600; display: block; margin-bottom: 6px; }
.timeline-item p { font-size: 13px; color: var(--text-muted-dark); margin: 0; line-height: 1.6; }

/* ===== TESTIMONIALS ===== */
.bg-client { background: var(--bg-secondary) !important; position:relative; }
.bg-overlay { background: rgba(10,14,26,0.6); position:absolute; top:0;left:0;right:0;bottom:0; }
.people_says { padding: 20px; }
.people_icon img { width: 70px; height: 70px; border-radius: 50%; border: 2px solid var(--gold); object-fit: cover; margin: 0 auto; display: block; }
.people_name { font-size: 16px !important; }
.people_review { max-width: 600px; font-size: 14px !important; line-height: 1.7; font-style: italic; opacity: 0.9; }

/* ===== CLIENT LOGOS ===== */
.client-logo { max-height: 40px; width: auto; opacity: 0.65; filter: grayscale(100%) brightness(200%); transition: opacity 0.2s, filter 0.2s; }
.client-logo:hover { opacity: 1; filter: none; }

/* ===== ALL PROJECTS ===== */
.mini-project-card { background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 8px; padding: 22px; margin-bottom: 20px; transition: transform 0.2s, border-color 0.2s; }
.mini-project-card:hover { transform: translateY(-3px); border-color: rgba(0,212,255,0.25); }
.mini-project-card h6 { color: #fff; font-weight: 700; font-size: 14px; margin-bottom: 8px; }
.mini-project-card p { font-size: 12px; color: var(--text-muted-dark); margin-bottom: 10px; line-height: 1.6; }
.mini-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 8px; }
.mini-tags span { background: rgba(240,192,64,0.1); border: 1px solid rgba(240,192,64,0.2); color: var(--gold); font-size: 10px; padding: 1px 6px; border-radius: 3px; }
.mini-tag-company { font-size: 10px; color: var(--text-muted-dark); letter-spacing: 0.5px; }

/* ===== CONTACT ===== */
.contact-item { padding: 30px 20px; }
.contact-item .h2 { font-size: 36px; }
.text-muted-light { color: var(--text-muted-dark); font-size: 13px; }
.contact-link { color: #fff; font-size: 15px; font-weight: 600; transition: color 0.2s; word-break: break-all; }
.contact-link:hover { color: var(--gold); }

/* ===== FOOTER ===== */
.dark-footer { background: #07090f; border-top: 1px solid rgba(255,255,255,0.06); }
.text-muted-dark { color: var(--text-muted-dark); font-size: 13px; }
.footer-social li { margin-left: 12px; }
.footer-social a { color: var(--text-muted-dark); font-size: 18px; transition: color 0.2s; }
.footer-social a:hover { color: var(--gold); }

/* ===== BACK TO TOP ===== */
.back_top { position:fixed; bottom:24px; right:24px; background:var(--gold); color:var(--bg-primary); width:40px; height:40px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:18px; z-index:999; display:none; }
.back_top:hover { background:#fff; color:var(--bg-primary); }

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .hero-name { font-size: 40px; }
  .hero-role { font-size: 18px; }
  .stat-value { font-size: 38px; }
  .section { padding: 60px 0; }
  .btn-gold, .btn-outline-cyan { padding: 8px 20px; font-size: 13px; }
  .project-card { padding: 20px; }
  .flagship-card .row { flex-direction: column; }
}
```

- [ ] **Step 2: Open `index.html` in browser and verify dark theme is applied**

```bash
open index.html
```
Expected: Dark background (#0a0e1a), gold/cyan accents, all sections styled. Scroll through to verify layout.

- [ ] **Step 3: Commit**

```bash
git add css/custom.css
git commit -m "feat: add complete dark theme CSS"
```

---

## Task 4: Write js/particles.js — hero canvas animation

**Files:**
- Modify: `js/particles.js` (full implementation)

- [ ] **Step 1: Replace contents of `js/particles.js`**

```js
(function () {
  var canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var particles = [];
  var count = 80;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.r = Math.random() * 1.5 + 0.3;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.alpha = Math.random() * 0.5 + 0.1;
    this.color = Math.random() > 0.6 ? '#f0c040' : '#00d4ff';
  }

  Particle.prototype.update = function () {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  };

  Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.alpha;
    ctx.fill();
    ctx.globalAlpha = 1;
  };

  function drawLines() {
    for (var i = 0; i < particles.length; i++) {
      for (var j = i + 1; j < particles.length; j++) {
        var dx = particles[i].x - particles[j].x;
        var dy = particles[i].y - particles[j].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = 'rgba(0,212,255,' + (0.06 * (1 - dist / 120)) + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function init() {
    resize();
    particles = [];
    for (var i = 0; i < count; i++) particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLines();
    for (var i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', function () { resize(); });
  init();
  animate();
})();
```

- [ ] **Step 2: Open `index.html` in browser and verify particles animate in hero**

```bash
open index.html
```
Expected: Floating gold and cyan dots with connecting lines visible in the hero background.

- [ ] **Step 3: Commit**

```bash
git add js/particles.js
git commit -m "feat: add hero particle canvas animation"
```

---

## Task 5: Update js/index.js — active nav + counter fix

**Files:**
- Modify: `js/index.js` (replace entire file)

- [ ] **Step 1: Replace `js/index.js` with updated version**

```js
// Preloader
$("#status").fadeOut();
$("#preloader").delay(350).fadeOut("slow");
$("body").delay(350).css({ overflow: "visible" });

// Sticky navbar
$(window).on("scroll", function () {
  $(window).scrollTop() >= 50
    ? $(".sticky").addClass("stickyadd")
    : $(".sticky").removeClass("stickyadd");
});

// Smooth scroll for nav links
$(".navbar-nav a, .scroll_down a").on("click", function (e) {
  var t = $(this);
  var target = t.attr("href");
  if (target && target.charAt(0) === "#" && $(target).length) {
    $("html, body").stop().animate({ scrollTop: $(target).offset().top - 60 }, 1200, "easeInOutExpo");
    e.preventDefault();
  }
});

// Active nav highlight on scroll
var sections = $("section[id], footer[id]");
$(window).on("scroll", function () {
  var scrollPos = $(this).scrollTop() + 80;
  sections.each(function () {
    var id = $(this).attr("id");
    var top = $(this).offset().top;
    var bottom = top + $(this).outerHeight();
    if (scrollPos >= top && scrollPos < bottom) {
      $(".navbar-nav .nav-item").removeClass("active");
      $(".navbar-nav a[href='#" + id + "']").closest(".nav-item").addClass("active");
    }
  });
});

// Counter animation
var counterFired = false;
$(window).on("scroll", function () {
  if (counterFired) return;
  var counterTop = $("#counter").length ? $("#counter").offset().top - window.innerHeight : Infinity;
  if ($(window).scrollTop() > counterTop) {
    $(".stat-value").each(function () {
      var $el = $(this);
      var target = parseInt($el.attr("data-count"), 10);
      $({ val: 0 }).animate({ val: target }, {
        duration: 2000,
        easing: "swing",
        step: function () { $el.text(Math.floor(this.val)); },
        complete: function () { $el.text(target); }
      });
    });
    counterFired = true;
  }
});

// Owl Carousel
$("#owl-demo").owlCarousel({
  autoPlay: 7000,
  stopOnHover: true,
  navigation: false,
  paginationSpeed: 1000,
  singleItem: true,
  autoHeight: true
});

// Back to top
$(window).on("scroll", function () {
  $(this).scrollTop() > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut();
});
$(".back_top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1000);
  return false;
});
```

- [ ] **Step 2: Open `index.html` in browser and verify**

```bash
open index.html
```
Expected: Scroll down → preloader fades → navbar turns dark → active nav link highlights → scroll to about → counters animate (10, 30, 6, 5) → owl carousel auto-plays testimonials → back-to-top button appears after scrolling 100px.

- [ ] **Step 3: Commit**

```bash
git add js/index.js
git commit -m "feat: update index.js for active nav, counter animation, smooth scroll"
```

---

## Task 6: Final verification, polish, and .gitignore

**Files:**
- Modify: `.gitignore` (add .superpowers/)
- Visual check across all sections

- [ ] **Step 1: Add .superpowers to .gitignore**

```bash
echo ".superpowers/" >> .gitignore
echo ".claude/" >> .gitignore
```

- [ ] **Step 2: Open site and walk through every section**

```bash
open index.html
```

Check each section in order:
1. Hero — particle animation, typed text cycles through roles, avatar visible, "Available for Projects" badge pulses, Email Me + LinkedIn buttons present
2. About — bio text readable, counters animate on scroll, skill bars show correct percentages
3. AI Expertise — 6 cards with icons, hover effect lifts cards
4. Featured Projects — flagship card gold border, tech tags cyan, 2 smaller cards below
5. Services — 6 cards with gold icon, hover effect
6. Experience — two-column timeline, gold/cyan year labels, correct company names
7. Testimonials — owl carousel auto-plays, 4 testimonials
8. Companies — 5 client logos with desaturated filter, hover reveals color
9. All Projects — 6 mini cards visible
10. Contact — email and LinkedIn links, location text
11. Footer — 2026 copyright, 3 social icons, no KonixSoft branding
12. Back to top button appears on scroll

- [ ] **Step 3: Fix any visual issues found during check**

Common things to fix inline: font sizing on mobile, card padding on small screens, navbar collapse on mobile.

- [ ] **Step 4: Commit everything**

```bash
git add .gitignore
git status
git add -A
git commit -m "feat: complete portfolio redesign — dark theme, AI expertise, maritime projects, interactive UI"
```

---

## Spec Coverage Check

| Spec Requirement | Task |
|---|---|
| Dark theme (navy/gold/cyan) | Task 3 |
| Particle canvas hero | Task 4 |
| Typed.js roles | Task 2 (HTML), Task 5 (JS) |
| AOS scroll animations | Task 2 (data-aos attrs) |
| Active nav highlight | Task 5 |
| Animated stat counters | Task 5 |
| Hover effects on cards | Task 3 |
| VM avatar in hero | Task 2 |
| "Available for Projects" badge | Task 2 |
| AI Expertise section (6 cards) | Task 2 |
| Maritime Intelligence Chat System card | Task 2 |
| LangGraph, DeepAgent, Evals, Guardrails, HITL, Skills, Multi-Agent | Task 2 |
| Featured Projects (flagship + 2) | Task 2 |
| Services — real descriptions | Task 2 |
| Updated experience timeline (all companies) | Task 2 |
| Testimonials carousel | Task 2 |
| All Projects section (last before contact) | Task 2 |
| Contact — email + LinkedIn only | Task 2 |
| Footer — no KonixSoft, 2026 copyright | Task 2 |
| Updated SEO meta tags | Task 2 |
| .gitignore for .superpowers | Task 6 |
