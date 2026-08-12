<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import type { PageData } from './$types';

  export let data: PageData;

  function formatDate(d: string) {
    return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
</script>

<svelte:head>
  <title>Blog — Wilkin Santana</title>
  <meta name="description" content="Writing on software engineering, design, and building things that matter — by Wilkin Santana." />
</svelte:head>

<div class="page">
  <div class="page-hero container">
    <p class="section-label">Writing</p>
    <h1 class="page-title font-display">The Blog</h1>
    <p class="page-sub">
      Thoughts on software engineering, design, creative technology, and the craft of building.
    </p>
  </div>

  <section class="section">
    <div class="container">
      {#if data.posts.length === 0}
        <div class="empty-state">
          <p class="empty-icon">✦</p>
          <p class="empty-text">The first post is coming soon.</p>
          <p class="empty-sub">Add markdown files to <code>src/lib/posts/</code> to publish.</p>
        </div>
      {:else}
        <div class="post-list">
          {#each data.posts as post, i}
            <article use:reveal={{ delay: i * 80 }} class="post-row">
              <a href="/blog/{post.slug}" class="post-link">
                <div class="post-date font-mono">{formatDate(post.metadata.date)}</div>
                <div class="post-body">
                  <h2 class="post-title">{post.metadata.title}</h2>
                  <p class="post-excerpt">{post.metadata.excerpt}</p>
                  <div class="post-tags">
                    {#each post.metadata.tags as tag}
                      <span class="tag">{tag}</span>
                    {/each}
                  </div>
                </div>
                <div class="post-arrow" aria-hidden="true">→</div>
              </a>
            </article>
          {/each}
        </div>
      {/if}
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

  /* Post list */
  .post-list {
    display: flex;
    flex-direction: column;
  }

  .post-row {
    border-bottom: 1px solid var(--border);
  }

  .post-link {
    display: grid;
    grid-template-columns: 140px 1fr 32px;
    gap: 2rem;
    align-items: center;
    padding: 2rem 0;
    transition: padding 0.25s ease;
  }

  .post-link:hover {
    padding-left: 0.5rem;
  }

  .post-link:hover .post-title {
    color: var(--accent);
  }

  .post-link:hover .post-arrow {
    color: var(--accent);
    transform: translateX(4px);
  }

  .post-date {
    font-size: 0.72rem;
    color: var(--text-2);
    letter-spacing: 0.04em;
    line-height: 1.4;
  }

  .post-body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .post-title {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--text);
    line-height: 1.35;
    transition: color var(--t);
  }

  .post-excerpt {
    font-size: 0.875rem;
    color: var(--text-2);
    line-height: 1.6;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .post-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-top: 0.25rem;
  }

  .post-arrow {
    font-size: 1.1rem;
    color: var(--text-2);
    transition: color var(--t), transform var(--t);
  }

  /* Empty state */
  .empty-state {
    text-align: center;
    padding: 6rem 1.5rem;
  }

  .empty-icon {
    font-size: 2rem;
    color: var(--accent);
    margin-bottom: 1rem;
  }

  .empty-text {
    font-size: 1.1rem;
    color: var(--text);
    margin-bottom: 0.5rem;
  }

  .empty-sub {
    font-size: 0.85rem;
    color: var(--text-2);
  }

  .empty-sub code {
    font-family: 'JetBrains Mono', monospace;
    background: var(--bg-3);
    padding: 0.15em 0.4em;
    border-radius: 3px;
    color: var(--accent);
    font-size: 0.82em;
  }

  @media (max-width: 640px) {
    .post-link {
      grid-template-columns: 1fr 24px;
      gap: 1rem;
    }

    .post-date {
      display: none;
    }
  }
</style>
