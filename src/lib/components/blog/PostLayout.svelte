<script lang="ts">
  export let title: string = '';
  export let date: string = '';
  export let tags: string[] = [];
  export let excerpt: string = '';
</script>

<article class="post-article">
  <header class="post-header">
    {#if tags.length}
      <div class="post-tags">
        {#each tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
    {/if}
    <h1 class="post-title font-display">{title}</h1>
    {#if excerpt}
      <p class="post-excerpt">{excerpt}</p>
    {/if}
    {#if date}
      <time class="post-date" datetime={date}>
        {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </time>
    {/if}
    <hr class="post-divider" />
  </header>

  <div class="post-body">
    <slot />
  </div>
</article>

<style>
  .post-article {
    max-width: 720px;
    margin: 0 auto;
    padding: 3rem 1.5rem 6rem;
  }

  .post-header {
    margin-bottom: 3rem;
  }

  .post-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .post-title {
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 400;
    color: var(--text);
    line-height: 1.15;
    margin-bottom: 1rem;
  }

  .post-excerpt {
    font-size: 1.1rem;
    color: var(--text-2);
    line-height: 1.65;
    margin-bottom: 1.5rem;
  }

  .post-date {
    font-size: 0.8rem;
    color: var(--text-2);
    letter-spacing: 0.05em;
    display: block;
    margin-bottom: 2rem;
  }

  .post-divider {
    border: none;
    border-top: 1px solid var(--border);
  }

  /* Prose styles */
  .post-body :global(h1),
  .post-body :global(h2),
  .post-body :global(h3) {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-weight: 500;
    color: var(--text);
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .post-body :global(h1) { font-size: 2rem; }
  .post-body :global(h2) { font-size: 1.6rem; }
  .post-body :global(h3) { font-size: 1.3rem; }

  .post-body :global(p) {
    color: var(--text);
    line-height: 1.75;
    margin-bottom: 1.5rem;
    font-size: 1.02rem;
  }

  .post-body :global(a) {
    color: var(--accent);
    text-decoration: underline;
    text-decoration-color: var(--accent-dim);
    text-underline-offset: 3px;
    transition: text-decoration-color var(--t);
  }

  .post-body :global(a:hover) {
    text-decoration-color: var(--accent);
  }

  .post-body :global(ul),
  .post-body :global(ol) {
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .post-body :global(li) {
    line-height: 1.75;
    margin-bottom: 0.4rem;
    color: var(--text);
  }

  .post-body :global(blockquote) {
    border-left: 2px solid var(--accent);
    margin: 2rem 0;
    padding: 0.5rem 0 0.5rem 1.5rem;
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.25rem;
    font-style: italic;
    color: var(--text);
    line-height: 1.6;
  }

  .post-body :global(code) {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85em;
    background: var(--bg-3);
    padding: 0.15em 0.4em;
    border-radius: 3px;
    color: var(--accent);
  }

  .post-body :global(pre) {
    background: var(--bg-3);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 1.5rem;
    overflow-x: auto;
    margin-bottom: 1.5rem;
  }

  .post-body :global(pre code) {
    background: none;
    padding: 0;
    color: var(--text);
    font-size: 0.875rem;
  }

  .post-body :global(hr) {
    border: none;
    border-top: 1px solid var(--border);
    margin: 3rem 0;
  }

  .post-body :global(em) {
    font-style: italic;
  }

  .post-body :global(strong) {
    font-weight: 600;
    color: var(--text);
  }
</style>
