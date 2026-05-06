<script lang="ts">
  import { reveal } from '$lib/actions/reveal';

  const socials = [
    {
      name: 'GitHub',
      href: 'https://github.com/wilkinsantana',
      handle: '@wilkinsantana',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>`
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/wilkinsantana',
      handle: 'wilkinsantana',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
    },
    {
      name: 'X / Twitter',
      href: 'https://x.com/wilkinsantana',
      handle: '@wilkinsantana',
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
    }
  ];
</script>

<svelte:head>
  <title>Contact — Wilkin Santana</title>
  <meta name="description" content="Get in touch with Wilkin Santana — for collaboration, consulting, or conversation." />
</svelte:head>

<div class="page">
  <div class="page-hero container">
    <p class="section-label">Contact</p>
    <h1 class="page-title font-display">Let's talk</h1>
  </div>

  <section class="section">
    <div class="container contact-grid">
      <!-- Left: message -->
      <div class="contact-message">
        <div use:reveal>
          <h2 class="font-display message-head">
            Have a project in mind?<br/>
            A problem to solve?<br/>
            Just want to say hello?
          </h2>
          <p class="message-body">
            I'm always open to thoughtful conversations — whether it's a consulting
            engagement, a collaboration, a job opportunity, or just an interesting idea
            you want to talk through.
          </p>
          <p class="message-body">
            The best way to reach me is via email. I read everything and reply to
            genuine messages.
          </p>
        </div>

        <div use:reveal class="email-cta">
          <!-- ✏️ EDIT: Replace with your actual email address -->
          <a href="mailto:contact@wilkinsantana.com" class="email-link">
            contact@wilkinsantana.com
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Right: socials -->
      <div class="contact-socials">
        <p use:reveal class="socials-label">Find me online</p>
        <div class="social-list">
          {#each socials as s, i}
            <div use:reveal={{ delay: i * 100 }}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                class="social-row glass"
              >
                <span class="social-icon">{@html s.icon}</span>
                <div class="social-info">
                  <span class="social-name">{s.name}</span>
                  <span class="social-handle">{s.handle}</span>
                </div>
                <span class="social-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          {/each}
        </div>

        <!-- Availability note -->
        <div use:reveal class="avail-badge">
          <div class="avail-dot" aria-hidden="true"></div>
          <span>Currently building tend.host &amp; tenddash — open to AI consulting</span>
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

  /* Grid */
  .contact-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 5rem;
    align-items: start;
  }

  /* Left side */
  .message-head {
    font-size: clamp(1.4rem, 3vw, 2rem);
    font-weight: 400;
    line-height: 1.35;
    color: var(--text);
    margin-bottom: 1.5rem;
  }

  .message-body {
    font-size: 0.95rem;
    color: var(--text-2);
    line-height: 1.75;
    margin-bottom: 1rem;
  }

  .email-cta {
    margin-top: 2rem;
  }

  .email-link {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1.05rem;
    font-weight: 500;
    color: var(--accent);
    border-bottom: 1px solid var(--accent-dim);
    padding-bottom: 2px;
    transition: all var(--t);
  }

  .email-link:hover {
    border-bottom-color: var(--accent);
    gap: 1rem;
  }

  /* Right side */
  .contact-socials {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .socials-label {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-2);
    margin-bottom: 0.5rem;
  }

  .social-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .social-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.25rem;
    border-radius: 4px;
    transition: all 0.25s ease;
  }

  .social-row:hover {
    border-color: rgba(124, 106, 255, 0.3);
    transform: translateX(4px);
  }

  .social-row:hover .social-arrow {
    color: var(--accent);
  }

  .social-icon {
    display: flex;
    align-items: center;
    color: var(--text-2);
    flex-shrink: 0;
  }

  .social-info {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    flex: 1;
  }

  .social-name {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text);
  }

  .social-handle {
    font-size: 0.78rem;
    color: var(--text-2);
    font-family: 'JetBrains Mono', monospace;
  }

  .social-arrow {
    font-size: 1rem;
    color: var(--text-2);
    transition: color var(--t);
  }

  /* Availability badge */
  .avail-badge {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.9rem 1.25rem;
    border-radius: 4px;
    border: 1px dashed rgba(124, 106, 255, 0.3);
    background: var(--accent-dim);
    margin-top: 0.5rem;
    font-size: 0.82rem;
    color: var(--text-2);
    line-height: 1.4;
  }

  .avail-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
    flex-shrink: 0;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2); }
    50%       { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0.1); }
  }

  @media (max-width: 768px) {
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }
</style>
