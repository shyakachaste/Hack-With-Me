import { useEffect } from 'react';

const set = (name, content) => {
  if (!content) return;
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setCanonical = (href) => {
  if (!href) return;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

export default function useSEO({ title, description, canonical, robots = 'index,follow' }) {
  useEffect(() => {
    if (title) document.title = title;
    set('description', description);
    set('robots', robots);
    setCanonical(canonical);
  }, [title, description, canonical, robots]);
}



