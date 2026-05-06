<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import education from '$lib/data/education.json';
</script>

<svelte:head>
  <title>Education — Wilkin Santana</title>
  <meta name="description" content="Academic background and certifications of Wilkin Santana." />
</svelte:head>

<div class="page">
  <div class="page-hero container">
    <p class="section-label">Background</p>
    <h1 class="page-title font-display">Education</h1>
    <p class="page-sub">The formal foundations and continued learning that inform my work.</p>
  </div>

  <section class="section">
    <div class="container">
      <div class="edu-grid">
        {#each education as item, i}
          <article use:reveal={{ delay: i * 120 }} class="edu-card glass">
            <div class="edu-inner">
              <header class="edu-header">
                <div class="edu-period font-mono">{item.period}</div>
                <h2 class="edu-degree">{item.degree}</h2>
                {#if item.field && item.field !== item.degree}
                  <div class="edu-field">{item.field}</div>
                {/if}
                <div class="edu-meta">
                  <span class="edu-institution">{item.institution}</span>
                  {#if item.location}
                    <span class="separator" aria-hidden="true">·</span>
                    <span class="edu-location">{item.location}</span>
                  {/if}
                </div>
              </header>

              {#if item.description}
                <p class="edu-desc">{item.description}</p>
              {/if}

              {#if item.honors}
                <div class="edu-honors">
                  <span class="honors-icon" aria-hidden="true">◆</span>
                  {item.honors}
                </div>
              {/if}

              {#if item.relevant.length}
                <div class="edu-relevant">
                  <p class="relevant-label">Relevant coursework</p>
                  <div class="relevant-list">
                    {#each item.relevant as course}
                      <span class="tag">{course}</span>
                    {/each}
                  </div>
                </div>
              {/if}
            </div>
          </article>
        {/each}
      </div>

      <!-- Continuous learning note -->
      <div use:reveal class="learning-note">
        <div class="learning-icon" aria-hidden="true">↻</div>
        <div class="learning-text">
          <strong>Lifelong learner.</strong>
          Education doesn't end with a diploma. I read widely, build constantly,
          and believe the most important knowledge comes from doing.
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .page { padding-top: 64px; }

  .page-hero {
    padding: 5rem 1.5rem 3rem;
    border-bottom: 1px solid var(--border);
  }

  .page-title {
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 400;
    line-height: 1.05;
    margin: 1rem 0;
  }

  .page-sub {
    font-size: 1rem;
    color: var(--text-2);
    max-width: 440px;
    line-height: 1.65;
  }

  .edu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .edu-card {
    border-radius: 5px;
    transition: border-color 0.3s ease, transform 0.3s ease;
  }

  .edu-card:hover {
    border-color: rgba(124, 106, 255, 0.3);
    transform: translateY(-4px);
  }

  .edu-inner {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .edu-period {
    font-size: 0.7rem;
    color: var(--accent);
    letter-spacing: 0.08em;
    margin-bottom: 0.25rem;
  }

  .edu-degree {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text);
    line-height: 1.3;
  }

  .edu-field {
    font-size: 0.85rem;
    color: var(--text-2);
    font-style: italic;
  }

  .edu-meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    flex-wrap: wrap;
  }

  .edu-institution {
    color: var(--text);
    font-weight: 500;
  }

  .separator { color: var(--border-hi); }

  .edu-location { color: var(--text-2); }

  .edu-desc {
    font-size: 0.875rem;
    color: var(--text-2);
    line-height: 1.7;
  }

  .edu-honors {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    color: var(--accent);
    font-weight: 500;
  }

  .honors-icon {
    font-size: 0.6rem;
  }

  .edu-relevant {
    margin-top: 0.25rem;
  }

  .relevant-label {
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-2);
    margin-bottom: 0.6rem;
  }

  .relevant-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  /* Learning note */
  .learning-note {
    display: flex;
    align-items: flex-start;
    gap: 1.25rem;
    padding: 2rem;
    border: 1px solid var(--border);
    border-radius: 4px;
    background: var(--card-bg);
    margin-top: 1rem;
  }

  .learning-icon {
    font-size: 1.5rem;
    color: var(--accent);
    flex-shrink: 0;
    line-height: 1;
    margin-top: 2px;
  }

  .learning-text {
    font-size: 0.9rem;
    color: var(--text-2);
    line-height: 1.65;
  }

  .learning-text strong {
    color: var(--text);
    font-weight: 600;
  }
</style>
