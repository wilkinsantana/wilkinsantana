<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import skills from '$lib/data/skills.json';
</script>

<svelte:head>
  <title>About — Wilkin Santana</title>
  <meta name="description" content="Retired US Army veteran, AI engineer, track & field champion, father of four, and man with a cat named Bailey. The full story." />
</svelte:head>

<div class="page">
  <!-- Page header -->
  <div class="page-hero container">
    <p class="section-label">About Me</p>
    <h1 class="page-title font-display">From El Campo<br/>to the cloud.</h1>
  </div>

  <!-- Story -->
  <section class="section story-section">
    <div class="container story-grid">
      <div class="story-portrait">
        <div use:reveal class="portrait-wrap">
          <img
            src="https://avatars.githubusercontent.com/u/28665914?s=400&v=4"
            alt="Wilkin Santana"
            class="portrait"
            width="400"
            height="400"
          />
        </div>
        <div use:reveal class="portrait-meta">
          <div class="meta-item">
            <span class="meta-label">Origin</span>
            <span class="meta-val">El Campo, Dominican Republic</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Based</span>
            <span class="meta-val">United States</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Service</span>
            <span class="meta-val">US Army — Retired</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Currently building</span>
            <span class="meta-val">tend.host &amp; tenddash</span>
          </div>
        </div>
      </div>

      <div class="story-text">
        <p use:reveal class="lead">
          I grew up in El Campo in the Dominican Republic, moved to the States in 2000,
          deployed to Afghanistan twice, won track &amp; field championships in Puerto Rico,
          and somehow ended up building AI agents for a living.
          Life is not linear — and that's the interesting part.
        </p>

        <div use:reveal class="body-text">
          <p>
            Before I wrote a single line of production code, I spent over a decade in the United States Army.
            Two combat deployments to Afghanistan. Signal operations, drone programs, satellite communications,
            SIGINT. The Army has a way of teaching you that <em>systems either work or people get hurt</em> —
            and that lesson never left me.
          </p>
          <p>
            After hanging up the uniform, I pursued what I'd always loved: technology — formally this time.
            I studied Business Administration with an Information Systems concentration at
            Universidad del Turabo in Gurabo, Puerto Rico (now part of SUAGM / Ana G. Méndez University).
            And while I was there, I also happened to win Triple Jump and Long Jump at
            <em>Las Justas</em> every year I competed, took silver in the Decathlon, and represented the
            Dominican Republic nationally as a track &amp; field athlete. You know, casually.
          </p>
          <p>
            These days my sprint is in AI and agentic systems. I'm deep in Claude API, MCP servers,
            and building products where agents do <em>real work</em> — not just generate text.
            Currently: tend.host (AI-driven hosting operations) and tenddash (infrastructure command center).
            Both are shipping. Both are ambitious. That's how I like it.
          </p>
          <p>
            Life also gave me four great kids: Catherine, whom I had when I was 17
            (life had its own timeline — I've made peace with it and turned it into a story I'm proud of),
            and then Wilkin Jr., Alex, and my youngest, Liberty, who has declared my free time a
            nationally protected territory under her jurisdiction. My cat Bailey is currently
            filing diplomatic complaints about Liberty's monopoly on my attention.
            Negotiations are ongoing.
          </p>
          <p>
            When I'm not building or being drafted into tea parties, I fly drones, shoot 360° photography,
            and hit the gym. The camera and the barbell are the two things that reliably clear my head.
          </p>
        </div>

        <div use:reveal class="values">
          {#each [
            'Veteran. Builder. Dad.',
            'Systems that actually work',
            'AI with real-world purpose',
            'Aerial perspective',
            'Always learning',
            'Two deployments. Zero drama.'
          ] as value}
            <span class="value-chip">{value}</span>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Fun facts strip -->
  <section class="facts-strip">
    <div class="container facts-row">
      <div use:reveal class="fact">
        <div class="fact-num">10+</div>
        <div class="fact-label">Years in the Army</div>
      </div>
      <div use:reveal={{ delay: 100 }} class="fact">
        <div class="fact-num">2</div>
        <div class="fact-label">Combat deployments</div>
      </div>
      <div use:reveal={{ delay: 200 }} class="fact">
        <div class="fact-num">4</div>
        <div class="fact-label">Kids (and one cat)</div>
      </div>
      <div use:reveal={{ delay: 300 }} class="fact">
        <div class="fact-num">∞</div>
        <div class="fact-label">Liberty's energy</div>
      </div>
    </div>
  </section>

  <!-- Skills -->
  <section class="section skills-section">
    <div class="container">
      <p use:reveal class="section-label">Expertise</p>
      <h2 use:reveal={{ delay: 80 }} class="section-title">Skills &amp; Tools</h2>

      <div class="skills-grid">
        {#each skills.categories as cat, i}
          <div use:reveal={{ delay: i * 80 }} class="skill-cat glass">
            <h3 class="cat-name">{cat.name}</h3>
            <div class="skill-list">
              {#each cat.skills as skill}
                <span class="tag">{skill}</span>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Mission statement -->
  <section class="mission-section">
    <div class="container">
      <div use:reveal class="mission-block">
        <p class="mission-label">Mission</p>
        <blockquote class="mission-quote font-display">
          "I've operated in places where technology meant survival. That shapes
          how I build — with intention, with clarity, and with total intolerance
          for things that don't work."
        </blockquote>
        <a href="/contact" class="btn btn-primary">Work With Me</a>
      </div>
    </div>
  </section>
</div>

<style>
  .page {
    padding-top: 64px;
  }

  .page-hero {
    padding: 5rem 1.5rem 3rem;
    border-bottom: 1px solid var(--border);
  }

  .page-title {
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 400;
    color: var(--text);
    line-height: 1.05;
    margin-top: 1rem;
  }

  /* Story section */
  .story-section {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .story-grid {
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    gap: 4rem;
    align-items: start;
  }

  .portrait-wrap {
    border-radius: 4px;
    overflow: hidden;
    aspect-ratio: 1;
    max-width: 340px;
    background: var(--bg-3);
    border: 1px solid var(--border);
  }

  .portrait {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  .portrait-meta {
    margin-top: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    max-width: 340px;
  }

  .meta-item {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 0.5rem;
    padding: 0.4rem 0;
    border-bottom: 1px solid var(--border);
  }

  .meta-label {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-2);
    flex-shrink: 0;
  }

  .meta-val {
    font-size: 0.82rem;
    color: var(--text);
    text-align: right;
  }

  .lead {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(1.25rem, 2.5vw, 1.65rem);
    font-weight: 400;
    line-height: 1.55;
    color: var(--text);
    margin-bottom: 1.75rem;
  }

  .body-text p {
    font-size: 1rem;
    line-height: 1.8;
    color: var(--text-2);
    margin-bottom: 1.25rem;
  }

  .body-text em {
    color: var(--text);
    font-style: italic;
  }

  .values {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 2rem;
  }

  .value-chip {
    padding: 0.35rem 0.85rem;
    border-radius: 2px;
    font-size: 0.78rem;
    font-weight: 500;
    background: var(--bg-3);
    border: 1px solid var(--border);
    color: var(--text-2);
    letter-spacing: 0.02em;
  }

  /* Facts strip */
  .facts-strip {
    background: var(--bg-2);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    padding: 3.5rem 0;
  }

  .facts-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    text-align: center;
  }

  .fact-num {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 400;
    color: var(--accent);
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .fact-label {
    font-size: 0.78rem;
    color: var(--text-2);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  /* Skills */
  .skills-section {
    background: var(--bg-2);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.25rem;
    margin-top: 3rem;
  }

  .skill-cat {
    padding: 1.75rem;
    border-radius: 4px;
    transition: border-color 0.3s ease;
  }

  .skill-cat:hover {
    border-color: rgba(124, 106, 255, 0.3);
  }

  .cat-name {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--text-2);
    margin-bottom: 1rem;
  }

  .skill-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  /* Mission */
  .mission-section {
    padding: 6rem 0;
  }

  .mission-block {
    max-width: 760px;
    margin: 0 auto;
    text-align: center;
    padding: 3rem 1.5rem;
    border: 1px solid var(--border);
    border-radius: 4px;
    background: var(--card-bg);
  }

  .mission-label {
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 1.5rem;
  }

  .mission-quote {
    font-size: clamp(1.25rem, 3vw, 1.8rem);
    font-weight: 400;
    font-style: italic;
    line-height: 1.55;
    color: var(--text);
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    .story-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .portrait-wrap {
      max-width: 240px;
    }

    .facts-row {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
