<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import ThemeToggle from '$lib/components/ui/ThemeToggle.svelte';

  let scrolled = false;
  let menuOpen = false;

  const links = [
    { href: '/about',      label: 'About' },
    { href: '/portfolio',  label: 'Portfolio' },
    { href: '/experience', label: 'Experience' },
    { href: '/blog',       label: 'Blog' },
    { href: '/contact',    label: 'Contact' }
  ];

  onMount(() => {
    const onScroll = () => { scrolled = window.scrollY > 48; };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  function closeMenu() { menuOpen = false; }

  $: activeHref = $page.url.pathname;
</script>

<header class="header" class:scrolled>
  <nav class="nav container">
    <!-- Logo -->
    <a href="/" class="logo" on:click={closeMenu}>
      <span class="logo-mark">WS</span>
      <span class="logo-name">Wilkin Santana</span>
    </a>

    <!-- Desktop links -->
    <ul class="links">
      {#each links as { href, label }}
        <li>
          <a
            {href}
            class="nav-link"
            class:active={activeHref === href || activeHref.startsWith(href + '/')}
          >{label}</a>
        </li>
      {/each}
    </ul>

    <!-- Right side -->
    <div class="actions">
      <ThemeToggle />
      <button
        class="hamburger"
        class:open={menuOpen}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        on:click={() => (menuOpen = !menuOpen)}
      >
        <span /><span /><span />
      </button>
    </div>
  </nav>
</header>

<!-- Mobile drawer -->
{#if menuOpen}
  <div class="backdrop" on:click={closeMenu} aria-hidden="true" />
  <div class="drawer" class:open={menuOpen}>
    <ul class="drawer-links">
      {#each links as { href, label }}
        <li>
          <a
            {href}
            class="drawer-link"
            class:active={activeHref === href}
            on:click={closeMenu}
          >{label}</a>
        </li>
      {/each}
    </ul>
    <a href="/contact" class="btn btn-primary drawer-cta" on:click={closeMenu}>Let's Talk</a>
  </div>
{/if}

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
    border-bottom: 1px solid transparent;
  }

  .header.scrolled {
    background: rgba(8, 8, 18, 0.8);
    border-bottom-color: var(--border);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 1px 30px rgba(0, 0, 0, 0.3);
  }

  :global([data-theme="light"]) .header.scrolled {
    background: rgba(250, 250, 250, 0.82);
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 2rem;
    height: 64px;
    padding-top: 0;
    padding-bottom: 0;
  }

  /* Logo */
  .logo {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    flex-shrink: 0;
  }

  .logo-mark {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 6px;
    background: var(--accent);
    color: #fff;
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.03em;
    flex-shrink: 0;
  }

  .logo-name {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text);
    letter-spacing: 0.01em;
  }

  /* Nav links */
  .links {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    list-style: none;
    margin: 0 auto;
    padding: 0;
  }

  .nav-link {
    padding: 0.4rem 0.75rem;
    font-size: 0.83rem;
    font-weight: 400;
    color: var(--text-2);
    border-radius: 3px;
    position: relative;
    transition: color var(--t);
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 18px;
    height: 1px;
    background: var(--accent);
    transition: transform 0.25s ease;
    border-radius: 2px;
  }

  .nav-link:hover,
  .nav-link.active {
    color: var(--text);
  }

  .nav-link.active::after,
  .nav-link:hover::after {
    transform: translateX(-50%) scaleX(1);
  }

  /* Actions */
  .actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-shrink: 0;
  }

  /* Hamburger */
  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    padding: 6px;
    cursor: pointer;
  }

  .hamburger span {
    display: block;
    width: 22px;
    height: 1.5px;
    background: var(--text);
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  .hamburger.open span:nth-child(1) {
    transform: translateY(6.5px) rotate(45deg);
  }
  .hamburger.open span:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
  }
  .hamburger.open span:nth-child(3) {
    transform: translateY(-6.5px) rotate(-45deg);
  }

  /* Mobile drawer */
  .backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 90;
    animation: fadeIn 0.2s ease;
  }

  .drawer {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    background: var(--bg-2);
    border-bottom: 1px solid var(--border);
    z-index: 95;
    padding: 1.5rem;
    animation: slideDown 0.25s ease;
  }

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .drawer-links {
    list-style: none;
    margin: 0 0 1.5rem;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .drawer-link {
    display: block;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    font-weight: 400;
    color: var(--text-2);
    border-radius: 4px;
    transition: all var(--t);
  }

  .drawer-link:hover,
  .drawer-link.active {
    color: var(--text);
    background: var(--card-bg);
  }

  .drawer-cta {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .links { display: none; }
    .hamburger { display: flex; }
    .logo-name { display: none; }
  }
</style>
