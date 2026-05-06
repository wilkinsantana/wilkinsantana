export interface RevealOptions {
  threshold?: number;
  delay?: number;
}

export function reveal(node: HTMLElement, options: RevealOptions = {}) {
  const { threshold = 0.12, delay = 0 } = options;

  if (delay) {
    node.style.transitionDelay = `${delay}ms`;
  }

  node.classList.add('reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.classList.add('visible');
          observer.unobserve(node);
        }
      });
    },
    { threshold, rootMargin: '0px 0px -40px 0px' }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
