<script lang="ts">
  const socials = [
    {
      name: 'GitHub',
      href: 'https://github.com/wilkinsantana',
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>`
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/wilkin-santana/',
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
    },
    {
      name: 'X / Twitter',
      href: 'https://x.com/rubiteve',
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
    }
  ];

  const year = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="container footer-inner">
    <div class="footer-left">
      <a href="/" class="footer-logo">
        <span class="logo-mark">WS</span>
      </a>
      <p class="footer-copy">
        &copy; {year} Wilkin Santana.<br />
        <span class="muted">Built with SvelteKit &amp; intention.</span>
      </p>
    </div>

    <div class="footer-right">
      <div class="footer-socials">
        {#each socials as s}
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label={s.name}
          >
            {@html s.icon}
          </a>
        {/each}
      </div>
      <nav class="footer-nav">
        <a href="/about">About</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  </div>

  <div class="footer-line container">
    <span class="muted small">wilkinsantana.com</span>
    <span class="muted small">Creative Technologist</span>
  </div>
</footer>

<style>
  .footer {
    border-top: 1px solid var(--border);
    background: var(--bg-2);
    padding: 3rem 0 2rem;
  }

  .footer-inner {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .footer-left {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .footer-logo {
    flex-shrink: 0;
    margin-top: 2px;
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
  }

  .footer-copy {
    font-size: 0.82rem;
    line-height: 1.6;
    color: var(--text-2);
  }

  .footer-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
  }

  .footer-socials {
    display: flex;
    gap: 0.75rem;
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 1px solid var(--border);
    color: var(--text-2);
    transition: all 0.25s ease;
  }

  .social-link:hover {
    color: var(--accent);
    border-color: var(--accent);
    background: var(--accent-dim);
    transform: translateY(-2px);
  }

  .footer-nav {
    display: flex;
    gap: 1.5rem;
  }

  .footer-nav a {
    font-size: 0.8rem;
    color: var(--text-2);
    transition: color var(--t);
  }

  .footer-nav a:hover {
    color: var(--text);
  }

  .footer-line {
    display: flex;
    justify-content: space-between;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border);
  }

  .muted { color: var(--text-2); }
  .small { font-size: 0.75rem; letter-spacing: 0.04em; }

  @media (max-width: 600px) {
    .footer-inner {
      flex-direction: column;
    }
    .footer-right {
      align-items: flex-start;
    }
  }
</style>
