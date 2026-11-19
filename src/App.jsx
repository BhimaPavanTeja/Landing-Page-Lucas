import { useState } from "react";

const paths = {
  "Product design": {
    role: "Product designer",
    match: "Strong match",
    matchValue: "82%",
    skills: [
      { name: "User research", progress: 82, color: "lavender" },
      { name: "Figma systems", progress: 64, color: "blue" },
      { name: "Prototyping", progress: 48, color: "peach" },
    ],
    next: "Build your first case study",
    days: "12 days",
  },
  "Frontend dev": {
    role: "Frontend developer",
    match: "Great foundation",
    matchValue: "76%",
    skills: [
      { name: "JavaScript", progress: 76, color: "lavender" },
      { name: "React", progress: 58, color: "blue" },
      { name: "Accessibility", progress: 42, color: "peach" },
    ],
    next: "Ship an accessible React app",
    days: "18 days",
  },
  "Data analyst": {
    role: "Data analyst",
    match: "Strong match",
    matchValue: "71%",
    skills: [
      { name: "SQL", progress: 71, color: "lavender" },
      { name: "Data storytelling", progress: 52, color: "blue" },
      { name: "Python", progress: 38, color: "peach" },
    ],
    next: "Tell a story with real data",
    days: "15 days",
  },
};

function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Brand({ compact = false, href = "/#top" }) {
  return (
    <a className={`brand${compact ? " brand--compact" : ""}`} href={href} aria-label="Lucas home">
      <img src="/lucas-logo.png" alt="" />
      <span className="orbitron brand__words">
        <strong>SYSTEM</strong>
        <strong>LUCAS</strong>
      </span>
    </a>
  );
}

function Header({ blogPage = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionLink = (section) => blogPage ? `/#${section}` : `#${section}`;

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <Brand href="/#top" />
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <span />
          <span />
        </button>
        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          <a href={sectionLink("approach")} onClick={closeMenu}>The approach</a>
          <a href={sectionLink("pathways")} onClick={closeMenu}>Your path</a>
          <a href={sectionLink("about")} onClick={closeMenu}>About Lucas</a>
          <a href="/blog" onClick={closeMenu}>Explore Blog</a>
          <a className="nav-cta" href={sectionLink("pathways")} onClick={closeMenu}>
            Find your direction <ArrowIcon diagonal />
          </a>
        </nav>
      </div>
    </header>
  );
}

function ProductPreview() {
  const [activePath, setActivePath] = useState("Product design");
  const path = paths[activePath];

  return (
    <div className="preview-wrap" aria-label="Interactive preview of your Lucas career dashboard">
      <div className="preview-orbit preview-orbit--one" />
      <div className="preview-orbit preview-orbit--two" />
      <div className="preview-card">
        <div className="preview-topbar">
          <div className="preview-brand">
            <span className="preview-brand__dot" />
            <span>LUCAS / YOUR SYSTEM</span>
          </div>
          <span className="preview-version">V 1.0</span>
        </div>

        <div className="preview-greeting">
          <div>
            <span className="eyebrow">YOUR CAREER SNAPSHOT</span>
            <h2>Make your next move.</h2>
          </div>
          <div className="profile-mark" aria-hidden="true">
            <img src="/lucas-logo.png" alt="" />
          </div>
        </div>

        <div className="path-picker" role="group" aria-label="Choose a career path">
          {Object.keys(paths).map((name) => (
            <button
              aria-pressed={activePath === name}
              className={activePath === name ? "is-selected" : ""}
              key={name}
              onClick={() => setActivePath(name)}
              type="button"
            >
              {name}
            </button>
          ))}
        </div>

        <div className="match-card">
          <div className="match-info">
            <span className="eyebrow">YOUR DIRECTION</span>
            <strong>{path.role}</strong>
            <span className="match-status"><span />{path.match}</span>
          </div>
          <div className="match-score">
            <span>{path.matchValue}</span>
            <small>fit</small>
          </div>
        </div>

        <div className="skills-block">
          <div className="block-heading">
            <span>SKILLS TO BUILD</span>
            <span>01 — 03</span>
          </div>
          {path.skills.map((skill) => (
            <div className="skill-row" key={skill.name}>
              <span>{skill.name}</span>
              <div className="skill-track" aria-label={`${skill.name}: ${skill.progress}%`}>
                <span className={`skill-fill skill-fill--${skill.color}`} style={{ width: `${skill.progress}%` }} />
              </div>
              <span className="skill-percent">{skill.progress}%</span>
            </div>
          ))}
        </div>

        <div className="next-step">
          <div className="next-step__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="m12 3 2.3 6.7L21 12l-6.7 2.3L12 21l-2.3-6.7L3 12l6.7-2.3L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="next-step__copy">
            <span>NEXT UP · {path.days.toUpperCase()}</span>
            <strong>{path.next}</strong>
          </div>
          <ArrowIcon diagonal />
        </div>
      </div>
      <div className="floating-note">
        <span className="floating-note__spark">✳</span>
        <span><strong>One clear next step.</strong><small>That’s how momentum starts.</small></span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="headtops">
      <div className="hero-copy">
        <div className="status-pill"><span /> AI CAREER ADVISOR · UPSKILLING</div>
        <h1>Make a career <br />in tech <span>like never before.</span></h1>
        <p className="hero-lede">
          The world of work is noisy. Lucas turns what you’re good at and what you care about, into a clear next step.
        </p>
        <div className="hero-actions">
          <a className="button button--primary" href="#pathways">
            Find your direction <ArrowIcon />
          </a>
          <a className="text-link" href="#approach">See how it works <span>↓</span></a>
        </div>
        <div className="hero-footnote">
          <div className="tiny-avatars" aria-hidden="true"><span>J</span><span>M</span><span>A</span></div>
          <p>For the curious, the changing,<br /><strong>and the figuring-it-out.</strong></p>
        </div>
      </div>
      <ProductPreview />
      <div className="hero-index"><span>01</span><i /> A BETTER WAY FORWARD</div>
    </section>
  );
}

function Approach() {
  const steps = [
    { number: "01", label: "Get to know you", title: "Start with what makes you, you.", text: "Your interests, strengths, and values—not somebody else’s definition of success.", mark: "01" },
    { number: "02", label: "See what’s possible", title: "Find work that fits your future.", text: "Explore real roles and the skills people are looking for, with context that makes sense.", mark: "02" },
    { number: "03", label: "Make your next move", title: "Build momentum, one step at a time.", text: "Get a personal learning path that turns “someday” into something you can start today.", mark: "03" },
  ];

  return (
    <section className="approach section-shell" id="approach">
      <div className="section-heading">
        <div>
          <span className="eyebrow section-kicker"><span>01</span> THE LUCAS APPROACH</span>
          <h2>Less guessing.<br /><span>More becoming.</span></h2>
        </div>
        <p className="section-intro">A career isn’t one big decision. It’s a series of small, meaningful next steps. Lucas helps you find them.</p>
      </div>
      <div className="steps-grid">
        {steps.map((step) => (
          <article className="step-card" key={step.number}>
            <div className="step-card__top"><span className="step-mark">{step.mark}</span></div>
            <span className="step-label">{step.label}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <div className="step-line"><span /></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Pathways() {
  return (
    <section className="pathways" id="pathways">
      <div className="pathways-inner section-shell">
        <div className="pathways-copy">
          <span className="eyebrow section-kicker section-kicker--light"><span>02</span> YOUR NEXT CHAPTER</span>
          <h2>There’s no<br />one-size-fits-<em>you.</em></h2>
          <p>Whether you have a plan or just a feeling, start where you are. Lucas helps you connect the dots between who you are and what you could do.</p>
          <a className="button button--light" href="#about">Meet your career co-pilot <ArrowIcon /></a>
        </div>
        <div className="path-map" aria-label="A personal journey from your starting point to what is next">
          <div className="path-map__glow" />
          <div className="path-map__line"><span /><span /><span /></div>
          <div className="path-node path-node--start">
            <span className="path-node__dot" />
            <span>RIGHT HERE</span>
            <strong>Your starting point</strong>
          </div>
          <div className="path-node path-node--middle">
            <span className="path-node__dot" />
            <span>IN YOUR OWN TIME</span>
            <strong>Skills that stack</strong>
          </div>
          <div className="path-node path-node--end">
            <span className="path-node__dot" />
            <span>WHAT’S NEXT</span>
            <strong>A future you choose</strong>
          </div>
          <span className="path-map__caption">YOUR PATH IS YOURS.</span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section-shell" id="about">
      <div className="about-stamp" aria-hidden="true">
        <img src="/lucas-logo.png" alt="" />
        <span>PLAN IT<br />BUILD IT<br />LEVEL UP</span>
      </div>
      <div className="about-copy">
        <span className="eyebrow section-kicker"><span>03</span> A NOTE FROM LUCAS</span>
        <h2>Your career isn’t<br />a checklist. <span>It’s yours.</span></h2>
        <p>Lucas is an AI career advisor and upskilling companion built to help you make sense of what comes next. No pressure to have it all figured out. Just thoughtful guidance, skills worth building, and a little more confidence with every step.</p>
        <a className="text-link text-link--dark" href="/#headtops">Back to the beginning <ArrowIcon diagonal /></a>
      </div>
    </section>
  );
}

function Blog() {
  const features = [
    { number: "01", title: "Career recommendations", description: "Personalized advice to help you discover career directions that fit." },
    { number: "02", title: "Structured paths", description: "A clear route from where you are to where you want to go." },
    { number: "03", title: "Planning tasks", description: "Practical next steps that turn your goals into steady progress." },
    { number: "04", title: "Portfolio maker", description: "Bring your projects and skills together in a portfolio you can share." },
    { number: "05", title: "Leveling system", description: "Track your progress and recognize every skill you build along the way." },
    { number: "06", title: "Learning resources", description: "Find useful resources to support your next step and keep learning." },
    { number: "07", title: "Job trends", description: "Explore changing roles and skills to make more informed career choices." },
  ];

  return (
    <section className="blog-section blog-page-section" id="blog">
      <div className="blog-inner section-shell">
        <div className="blog-heading">
          <span className="eyebrow section-kicker">INSIDE LUCAS — SYSTEM 01</span>
          <h2>One system.<br /><span>Your next steps.</span></h2>
        </div>
        <div className="blog-grid">
          {features.map((feature) => (
            <article className="blog-card" key={feature.number}>
              <span className="blog-card__number">{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
        <hr className="blog-divider" />
        <div className="blog-beta-note">
          <p>BETA registration for users with early access will be available soon. stay tuned!</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer section-shell">
      <Brand compact />
      <span className="footer-version"> systemlucas.tech © 2026</span>
    </footer>
  );
}

export default function App() {
  const isBlogPage = window.location.pathname.replace(/\/+$/, "") === "/blog";

  if (isBlogPage) {
    return (
      <>
        <Header blogPage />
        <main className="blog-page-main">
          <Blog />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="signal-strip">
          <div className="signal-strip__inner section-shell">
            <span>MADE FOR THE IN-BETWEEN</span><i />
            <span>BUILT AROUND YOU</span><i />
            <span>READY WHEN YOU ARE</span>
          </div>
        </div>
        <Approach />
        <Pathways />
        <About />
      </main>
      <Footer />
    </>
  );
}
