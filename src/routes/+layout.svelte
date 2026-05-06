<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/layout/Header.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';
</script>

<Header />

{#key $page.url.pathname}
  <main in:fade={{ duration: 220, delay: 60 }}>
    <slot />
  </main>
{/key}

<Footer />

<style>
  main {
    min-height: 100svh;
  }
</style>
