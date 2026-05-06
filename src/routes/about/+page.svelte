<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import skills from '$lib/data/skills.json';
</script>

<svelte:head>
  <title>About — Wilkin Santana</title>
  <meta name="description" content="Learn about Wilkin Santana — creative technologist, engineer, and builder." />
</svelte:head>

<div class="page">
  <!-- Page header -->
  <div class="page-hero container">
    <p class="section-label">About Me</p>
    <h1 class="page-title font-display">The person<br/>behind the work</h1>
  </div>

  <!-- Story -->
  <section class="section story-section">
    <div class="container story-grid">
      <div class="story-portrait">
        <div use:reveal class="portrait-wrap">
          <img
            src="/images/avatar.svg"
            alt="Wilkin Santana"
            class="portrait"
            width="400"
            height="400"
          />
          <!-- Replace /images/avatar.svg with your actual portrait -->
        </div>
      </div>

      <div class="story-text">
        <p use:reveal class="lead">
          <!-- ✏️ EDIT: Replace with your opening statement -->
          I'm a creative technologist who believes that the best software is made at the intersection of
          rigorous engineering and genuine human understanding.
        </p>

        <div use:reveal class="body-text">
          <p>
            <!-- ✏️ EDIT: Replace with your story -->
            My path into technology wasn't linear. It started with curiosity — about how things work, why
            systems behave the way they do, and what makes a piece of software feel genuinely good to use.
            That curiosity has never left me.
          </p>
          <p>
            Over the years I've built products across the full stack — from pixel-perfect UIs to distributed
            backend systems — always with the same question in mind: <em>does this feel right?</em>
          </p>
          <p>
            Beyond the code, I care deeply about communication, craft, and the long-term health of the
            systems and teams I work with. I believe in writing that a reader can trust, architecture that
            can change, and interfaces that respect the people who use them.
          </p>
        </div>

        <div use:reveal class="values">
          {#each ['Craft over cleverness', 'Systems thinking', 'Human-centered design', 'Continuous learning'] as value}
            <span class="value-chip">{value}</span>
          {/each}
        </div>
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
          <!-- ✏️ EDIT: Replace with your personal mission statement -->
          "To build things that matter — digital experiences that carry
          intention in every detail and leave the world slightly better
          than I found it."
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
  }
</style>
