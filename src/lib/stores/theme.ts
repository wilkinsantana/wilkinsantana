import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'dark' | 'light';

function createThemeStore() {
  const initial: Theme = browser
    ? ((localStorage.getItem('theme') as Theme) ??
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    : 'dark';

  const { subscribe, set, update } = writable<Theme>(initial);

  return {
    subscribe,
    toggle() {
      update((current) => {
        const next: Theme = current === 'dark' ? 'light' : 'dark';
        if (browser) {
          localStorage.setItem('theme', next);
          document.documentElement.setAttribute('data-theme', next);
        }
        return next;
      });
    },
    set(theme: Theme) {
      set(theme);
      if (browser) {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
      }
    }
  };
}

export const theme = createThemeStore();
