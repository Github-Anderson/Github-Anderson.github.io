function updateFaviconForScheme(scheme) {
  const LIGHT_ICON = '/assets/icon/terminal-16-light.ico';
  const DARK_ICON = '/assets/icon/terminal-16-dark.ico';

  const isDark = scheme === 'slate' || scheme === 'dark';

  const href = isDark ? DARK_ICON : LIGHT_ICON;

  let link = document.querySelector('link[rel="icon"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  if (link.href.endsWith(href)) {
    return;
  }
  link.href = href;
}

function getCurrentScheme() {
  return document.body.getAttribute('data-md-color-scheme') || 'default';
}

function initFaviconThemeSwitcher() {
  if (!document.body) return;

  updateFaviconForScheme(getCurrentScheme());

  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === 'attributes' && m.attributeName === 'data-md-color-scheme') {
        updateFaviconForScheme(getCurrentScheme());
      }
    }
  });

  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['data-md-color-scheme'],
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFaviconThemeSwitcher);
} else {
  initFaviconThemeSwitcher();
}