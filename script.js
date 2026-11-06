(() => {
  const toggle = document.querySelector('.theme-toggle');
  const label = toggle.querySelector('.toggle-label');
  const icon = toggle.querySelector('.toggle-icon');
  const savedTheme = localStorage.getItem('temur-theme');
  if (savedTheme === 'dark') document.body.classList.add('dark');
  const updateButton = () => {
    const isDark = document.body.classList.contains('dark');
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
    label.textContent = `${isDark ? 'Light' : 'Dark'} mode`;
    icon.textContent = isDark ? '☼' : '◐';
  };
  updateButton();
  toggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('temur-theme', isDark ? 'dark' : 'light');
    updateButton();
  });
})();
