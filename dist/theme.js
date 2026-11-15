(() => {
  const root = document.documentElement;
  const key = 'ee-calendar.theme';
  let mode = 'dark';
  try { if (localStorage.getItem(key) === 'light') mode = 'light'; } catch {}
  root.dataset.theme = mode;
  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('themeToggle');
    const sun = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg>';
    const moon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"/></svg>';
    function update() {
      const light = root.dataset.theme === 'light';
      toggle.innerHTML = (light ? moon : sun) + '<span>' + (light ? 'Dark mode' : 'Light mode') + '</span>';
      toggle.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
      toggle.title = light ? 'Switch to dark mode' : 'Switch to light mode';
    }
    toggle.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
      try { localStorage.setItem(key, root.dataset.theme); } catch {}
      update();
    });
    update();
  });
})();
