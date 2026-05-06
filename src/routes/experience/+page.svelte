<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import experience from '$lib/data/experience.json';
</script>

<svelte:head>
  <title>Experience — Wilkin Santana</title>
  <meta name="description" content="Professional experience and career history of Wilkin Santana." />
</svelte:head>

<div class="page">
  <div class="page-hero container">
    <p class="section-label">Career</p>
    <h1 class="page-title font-display">Experience</h1>
    <p class="page-sub">The roles and companies that shaped how I build and think.</p>
  </div>

  <section class="section">
    <div class="container">
      <div class="timeline">
        {#each experience as job, i}
          <article use:reveal={{ delay: i * 100 }} class="timeline-item">
            <div class="timeline-marker" aria-hidden="true">
              <div class="dot"></div>
              {#if i < experience.length - 1}
                <div class="line"></div>
              {/if}
            </div>

            <div class="timeline-content glass">
              <header class="job-header">
                <div class="job-title-row">
                  <h2 class="job-role">{job.role}</h2>
                  <span class="job-period font-mono">{job.period}</span>
                </div>
                <div class="job-meta">
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="company-link"
                  >{job.company}</a>
                  <span class="separator" aria-hidden="true">·</span>
                  <span class="job-location">{job.location}</span>
                </div>
              </header>

              <p class="job-desc">{job.description}</p>

              {#if job.achievements.length}
                <ul class="achievements">
                  {#each job.achievements as achievement}
                    <li>{achievement}</li>
                  {/each}
                </ul>
              {/if}

              <div class="tech-row">
                {#each job.tech as t}
                  <span class="tag">{t}</span>
                {/each}
              </div>
            </div>
          </article>
        {/each}
      </div>

      <div use:reveal class="resume-cta">
        <p class="cta-text">Want the full picture?</p>
        <!-- ✏️ EDIT: Update this href to your actual resume/CV link -->
        <a href="/contact" class="btn btn-primary">Get in Touch</a>
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

  /* Timeline */
  .timeline {
    display: flex;
    flex-direction: column;
    gap: 0;
    position: relative;
  }

  .timeline-item {
    display: grid;
    grid-template-columns: 32px 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .timeline-marker {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.75rem;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--accent);
    border: 2px solid var(--bg);
    box-shadow: 0 0 0 2px var(--accent);
    flex-shrink: 0;
    margin-bottom: 0.5rem;
  }

  .line {
    flex: 1;
    width: 1px;
    background: linear-gradient(to bottom, var(--accent-dim), transparent);
    min-height: 40px;
  }

  .timeline-content {
    padding: 1.75rem;
    border-radius: 5px;
    transition: border-color 0.3s ease;
  }

  .timeline-content:hover {
    border-color: rgba(124, 106, 255, 0.3);
  }

  .job-header {
    margin-bottom: 1rem;
  }

  .job-title-row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 0.4rem;
  }

  .job-role {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text);
  }

  .job-period {
    font-size: 0.78rem;
    color: var(--text-2);
    white-space: nowrap;
  }

  .job-meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
  }

  .company-link {
    color: var(--accent);
    font-weight: 500;
    transition: opacity var(--t);
  }

  .company-link:hover { opacity: 0.75; }

  .separator {
    color: var(--border-hi);
  }

  .job-location {
    color: var(--text-2);
  }

  .job-desc {
    font-size: 0.9rem;
    color: var(--text-2);
    line-height: 1.7;
    margin-bottom: 1.25rem;
  }

  .achievements {
    list-style: none;
    padding: 0;
    margin: 0 0 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .achievements li {
    font-size: 0.875rem;
    color: var(--text-2);
    padding-left: 1.25rem;
    position: relative;
    line-height: 1.6;
  }

  .achievements li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--accent);
    font-size: 0.7rem;
    top: 2px;
  }

  .tech-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.25rem;
  }

  /* Resume CTA */
  .resume-cta {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 3rem;
    padding: 2rem;
    border-top: 1px solid var(--border);
    text-align: center;
  }

  .cta-text {
    font-size: 0.95rem;
    color: var(--text-2);
  }

  @media (max-width: 600px) {
    .timeline-item {
      grid-template-columns: 24px 1fr;
      gap: 1rem;
    }
  }
</style>
