<script lang="ts">
  import type { PageData } from './$types';
  import PostLayout from '$lib/components/blog/PostLayout.svelte';

  export let data: PageData;

  $: ({ content: Content, metadata } = data);
</script>

<svelte:head>
  <title>{metadata.title} — Wilkin Santana</title>
  <meta name="description" content={metadata.excerpt} />
  <meta property="og:title" content={metadata.title} />
  <meta property="og:description" content={metadata.excerpt} />
  <meta property="og:type" content="article" />
  {#if metadata.hero}
    <meta property="og:image" content={metadata.hero} />
  {/if}
</svelte:head>

<div class="post-page">
  <nav class="back-nav container">
    <a href="/blog" class="back-link">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"/>
        <polyline points="12 19 5 12 12 5"/>
      </svg>
      All posts
    </a>
  </nav>

  <PostLayout
    title={metadata.title}
    date={metadata.date}
    tags={metadata.tags ?? []}
    excerpt={metadata.excerpt}
  >
    <svelte:component this={Content} />
  </PostLayout>
</div>

<style>
  .post-page {
    padding-top: 64px;
  }

  .back-nav {
    padding-top: 2rem;
    padding-bottom: 0;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.82rem;
    color: var(--text-2);
    transition: color var(--t);
  }

  .back-link:hover {
    color: var(--accent);
  }
</style>
