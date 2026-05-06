<script lang="ts">
  import { onMount } from 'svelte';
  import { reveal } from '$lib/actions/reveal';

  let mounted = false;
  onMount(() => { mounted = true; });
</script>

<svelte:head>
  <title>Wilkin Santana — AI Engineer & Veteran Builder</title>
  <meta name="description" content="Retired US Army veteran, AI & agentic systems engineer, and builder of digital products. Currently shipping tend.host and tenddash." />
  <meta property="og:title" content="Wilkin Santana — AI Engineer & Veteran Builder" />
  <meta property="og:description" content="Retired US Army veteran. AI & agentic systems engineer. Currently building tend.host and tenddash." />
  <meta property="og:url" content="https://wilkinsantana.com" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Wilkin Santana" />
  <meta name="twitter:description" content="Veteran. AI Engineer. Builder. Father of four (and one very opinionated cat)." />
</svelte:head>

<!-- ─── HERO ─────────────────────────────────────────────── -->
<section class="hero">
  <!-- Ambient orbs -->
  <div class="ambient" aria-hidden="true">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
  </div>

  <div class="hero-content" class:visible={mounted}>
    <!-- Avatar -->
    <div class="avatar-wrap">
      <div class="avatar-ring" aria-hidden="true"></div>
      <img
        src="https://avatars.githubusercontent.com/u/28665914?s=400&v=4"
        alt="Wilkin Santana"
        class="avatar"
        width="130"
        height="130"
      />
    </div>

    <!-- Text block -->
    <div class="hero-text">
      <p class="eyebrow">Wilkin Santana</p>

      <h1 class="headline">
        <span class="word w1">Creative</span>
        <span class="word w2">Technologist</span>
      </h1>

      <p class="tagline">
        Veteran. AI engineer. Builder of things that actually work.<br />
        Currently shipping <a href="https://tend.host" class="tagline-link" target="_blank" rel="noopener">tend.host</a> &amp; tenddash.
      </p>

      <div class="cta-row">
        <a href="/portfolio" class="btn btn-primary">View Portfolio</a>
        <a href="/about" class="btn btn-ghost">About Me</a>
      </div>
    </div>
  </div>

  <!-- Scroll hint -->
  <div class="scroll-hint" aria-hidden="true">
    <span class="scroll-label">scroll</span>
    <div class="scroll-line"></div>
  </div>
</section>

<!-- ─── INTRO ─────────────────────────────────────────────── -->
<section class="intro-section">
  <div class="container">
    <div class="stats-row">
      <div use:reveal={{ delay: 0 }} class="stat">
        <div class="stat-num">10+</div>
        <div class="stat-label">Army years</div>
      </div>
      <div use:reveal={{ delay: 120 }} class="stat">
        <div class="stat-num">2</div>
        <div class="stat-label">Deployments</div>
      </div>
      <div use:reveal={{ delay: 240 }} class="stat">
        <div class="stat-num">∞</div>
        <div class="stat-label">Liberty's energy</div>
      </div>
    </div>

    <div use:reveal class="quote-block">
      <blockquote>
        "I've been in places where technology meant survival. That shapes
        how I build — with intention, with precision, and with zero
        tolerance for things that don't work."
      </blockquote>
      <cite>— Wilkin Santana</cite>
    </div>
  </div>
</section>

<!-- ─── WORK PREVIEW ─────────────────────────────────────── -->
<section class="section work-section">
  <div class="container">
    <div class="section-head">
      <p use:reveal class="section-label">Selected Work</p>
      <h2 use:reveal={{ delay: 100 }} class="section-title">What I Build</h2>
    </div>

    <div class="cards">
      <div use:reveal class="card glass">
        <span class="card-num">01</span>
        <h3 class="card-title">AI & Agentic Systems</h3>
        <p class="card-body">Agents that do real work. Claude API, MCP servers, and workflows where the AI earns its keep — not just talks about it.</p>
      </div>
      <div use:reveal={{ delay: 120 }} class="card glass">
        <span class="card-num">02</span>
        <h3 class="card-title">SaaS Products</h3>
        <p class="card-body">Full-stack applications built with SvelteKit, TypeScript, and a military-grade intolerance for things that break in production.</p>
      </div>
      <div use:reveal={{ delay: 240 }} class="card glass">
        <span class="card-num">03</span>
        <h3 class="card-title">Aerial & Visual</h3>
        <p class="card-body">360° photography and drone cinematography. Because some perspectives only exist when you're above the noise.</p>
      </div>
    </div>

    <div use:reveal class="cta-center">
      <a href="/portfolio" class="btn btn-primary">See All Projects</a>
      <a href="/experience" class="btn btn-ghost">Experience</a>
    </div>
  </div>
</section>

<style>
  /* ─── Hero ─────────────────────────────────────────────── */
  .hero {
    position: relative;
    min-height: 100svh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 7rem 1.5rem 5rem;
    overflow: hidden;
  }

  .ambient {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
  }

  .orb-1 {
    width: 700px;
    height: 700px;
    top: -200px;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(124, 106, 255, 0.16) 0%, transparent 65%);
    animation: glowPulse 7s ease-in-out infinite;
  }

  .orb-2 {
    width: 400px;
    height: 400px;
    bottom: 0;
    right: -80px;
    background: radial-gradient(circle, rgba(255, 107, 107, 0.08) 0%, transparent 70%);
    animation: glowPulse 9s ease-in-out infinite reverse;
  }

  .orb-3 {
    width: 300px;
    height: 300px;
    bottom: 80px;
    left: -60px;
    background: radial-gradient(circle, rgba(124, 106, 255, 0.07) 0%, transparent 70%);
    animation: glowPulse 11s ease-in-out 2s infinite;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2.5rem;
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 0.9s ease 0.15s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;
  }

  .hero-content.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Avatar */
  .avatar-wrap {
    position: relative;
    width: 130px;
    height: 130px;
    animation: float 7s ease-in-out 1s infinite;
  }

  .avatar-ring {
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    background: conic-gradient(var(--accent), transparent 40%, var(--accent) 60%, transparent 80%, var(--accent));
    animation: spin 10s linear infinite;
    opacity: 0.55;
  }

  .avatar {
    position: relative;
    z-index: 1;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: 3px solid var(--bg);
    box-shadow: 0 0 0 1px var(--border), 0 20px 60px rgba(0,0,0,0.35);
  }

  /* Text */
  .hero-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }

  .eyebrow {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--accent);
    opacity: 0;
    animation: fadeUp 0.8s ease 0.5s forwards;
  }

  .headline {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(4.5rem, 12vw, 8.5rem);
    font-weight: 400;
    line-height: 0.92;
    letter-spacing: -0.02em;
    color: var(--text);
  }

  .word {
    display: block;
    opacity: 0;
  }

  .w1 { animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.55s forwards; }
  .w2 {
    animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.72s forwards;
    -webkit-text-stroke: 1px rgba(232, 232, 248, 0.4);
    color: transparent;
  }

  .tagline-link {
    color: var(--accent);
    text-decoration: underline;
    text-decoration-color: var(--accent-dim);
    text-underline-offset: 3px;
    transition: text-decoration-color var(--t);
  }

  .tagline-link:hover {
    text-decoration-color: var(--accent);
  }

  .tagline {
    font-size: clamp(0.9rem, 2vw, 1.05rem);
    color: var(--text-2);
    line-height: 1.75;
    max-width: 460px;
    opacity: 0;
    animation: fadeUp 0.8s ease 1s forwards;
  }

  .cta-row {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
    opacity: 0;
    animation: fadeUp 0.8s ease 1.2s forwards;
  }

  /* Scroll hint */
  .scroll-hint {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    opacity: 0;
    animation: fadeIn 1s ease 2.2s forwards;
  }

  .scroll-label {
    font-size: 0.62rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--text-2);
  }

  .scroll-line {
    width: 1px;
    height: 46px;
    background: linear-gradient(to bottom, var(--accent), transparent);
    animation: scrollLine 2.2s ease-in-out 2.5s infinite;
  }

  /* ─── Intro ─────────────────────────────────────────────── */
  .intro-section {
    background: var(--bg-2);
    padding: 6rem 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .stats-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    text-align: center;
    margin-bottom: 4rem;
  }

  .stat {
    padding: 2rem 1rem;
  }

  .stat-num {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 3.2rem;
    font-weight: 300;
    color: var(--accent);
    line-height: 1;
    margin-bottom: 0.75rem;
  }

  .stat-label {
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--text-2);
    font-weight: 500;
  }

  .quote-block {
    max-width: 680px;
    margin: 0 auto;
    text-align: center;
    padding: 2.5rem 1.5rem;
    border-top: 1px solid var(--border);
  }

  blockquote {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(1.15rem, 3vw, 1.55rem);
    font-weight: 400;
    font-style: italic;
    line-height: 1.65;
    color: var(--text);
    margin: 0 0 1.25rem;
  }

  cite {
    font-size: 0.78rem;
    letter-spacing: 0.1em;
    color: var(--text-2);
    font-style: normal;
  }

  /* ─── Work section ──────────────────────────────────────── */
  .work-section {
    padding-bottom: 8rem;
  }

  .section-head {
    margin-bottom: 3rem;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.25rem;
    margin-bottom: 3rem;
  }

  .card {
    padding: 2rem;
    border-radius: 4px;
    transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
  }

  .card:hover {
    transform: translateY(-5px);
    border-color: rgba(124, 106, 255, 0.3);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  }

  .card-num {
    display: block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    color: var(--accent);
    letter-spacing: 0.08em;
    margin-bottom: 1rem;
  }

  .card-title {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--text);
    margin-bottom: 0.75rem;
  }

  .card-body {
    font-size: 0.875rem;
    color: var(--text-2);
    line-height: 1.65;
  }

  .cta-center {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 540px) {
    .stats-row { grid-template-columns: 1fr; }
    .avatar-wrap { width: 100px; height: 100px; }
    .avatar { width: 100px; height: 100px; }
  }
</style>
