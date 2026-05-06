<script lang="ts">
  import type { PageData } from './$types';
  import { reveal } from '$lib/actions/reveal';

  export let data: PageData;

  const featured = data.projects.filter((p) => p.featured);
  const others   = data.projects.filter((p) => !p.featured);
</script>

<svelte:head>
  <title>Portfolio — Wilkin Santana</title>
  <meta name="description" content="Projects and work by Wilkin Santana — web apps, systems, and design." />
</svelte:head>

<div class="page">
  <div class="page-hero container">
    <p class="section-label">Portfolio</p>
    <h1 class="page-title font-display">Selected<br/>projects</h1>
    <p class="page-sub">
      A curated collection of things I've built — side projects, open source,
      and professional work worth sharing.
    </p>
  </div>

  <!-- Featured -->
  <section class="section">
    <div class="container">
      <p use:reveal class="group-label">Featured</p>
      <div class="featured-grid">
        {#each featured as project, i}
          <article use:reveal={{ delay: i * 100 }} class="project-card glass">
            <div class="project-inner">
              <header class="project-header">
                <h2 class="project-title">{project.title}</h2>
                <div class="project-links">
                  {#if project.live}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="link-icon"
                      aria-label="Live site"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  {/if}
                  {#if project.url}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="link-icon"
                      aria-label="GitHub"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </a>
                  {/if}
                </div>
              </header>

              <p class="project-desc">{project.description}</p>

              <footer class="project-footer">
                <div class="project-tags">
                  {#each project.tags as tag}
                    <span class="tag">{tag}</span>
                  {/each}
                </div>
                {#if project.stars > 0}
                  <span class="stars">★ {project.stars}</span>
                {/if}
              </footer>
            </div>
          </article>
        {/each}
      </div>

      <!-- Other projects -->
      {#if others.length}
        <p use:reveal class="group-label" style="margin-top: 3.5rem;">More Work</p>
        <div class="other-grid">
          {#each others as project, i}
            <article use:reveal={{ delay: i * 80 }} class="mini-card glass">
              <div class="mini-inner">
                <h3 class="mini-title">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">{project.title}</a>
                </h3>
                <p class="mini-desc">{project.description}</p>
                <div class="project-tags" style="margin-top: 1rem;">
                  {#each project.tags as tag}
                    <span class="tag">{tag}</span>
                  {/each}
                </div>
              </div>
            </article>
          {/each}
        </div>
      {/if}

      <!-- GitHub CTA -->
      <div use:reveal class="github-cta">
        <p class="github-text">See everything I've built on GitHub</p>
        <a
          href="https://github.com/wilkinsantana"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-ghost"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          @wilkinsantana
        </a>
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
    max-width: 480px;
    line-height: 1.65;
  }

  .group-label {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-2);
    margin-bottom: 1.5rem;
  }

  /* Featured grid */
  .featured-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.25rem;
    margin-bottom: 1rem;
  }

  .project-card {
    border-radius: 5px;
    transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
  }

  .project-card:hover {
    transform: translateY(-5px);
    border-color: rgba(124, 106, 255, 0.35);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  }

  .project-inner {
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
  }

  .project-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }

  .project-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text);
  }

  .project-links {
    display: flex;
    gap: 0.5rem;
    flex-shrink: 0;
  }

  .link-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 4px;
    border: 1px solid var(--border);
    color: var(--text-2);
    transition: all 0.2s ease;
  }

  .link-icon:hover {
    color: var(--accent);
    border-color: var(--accent);
    background: var(--accent-dim);
  }

  .project-desc {
    font-size: 0.875rem;
    color: var(--text-2);
    line-height: 1.65;
    flex: 1;
  }

  .project-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    margin-top: auto;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .stars {
    font-size: 0.78rem;
    color: var(--text-2);
    white-space: nowrap;
  }

  /* Other grid */
  .other-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1rem;
  }

  .mini-card {
    border-radius: 4px;
    transition: border-color 0.3s ease, transform 0.3s ease;
  }

  .mini-card:hover {
    border-color: rgba(124, 106, 255, 0.3);
    transform: translateY(-3px);
  }

  .mini-inner {
    padding: 1.5rem;
  }

  .mini-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .mini-title a {
    color: var(--text);
    transition: color var(--t);
  }

  .mini-title a:hover { color: var(--accent); }

  .mini-desc {
    font-size: 0.85rem;
    color: var(--text-2);
    line-height: 1.6;
  }

  /* GitHub CTA */
  .github-cta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    flex-wrap: wrap;
    margin-top: 4rem;
    padding: 2.5rem;
    border: 1px dashed var(--border-hi);
    border-radius: 4px;
    text-align: center;
  }

  .github-text {
    font-size: 0.9rem;
    color: var(--text-2);
  }
</style>
