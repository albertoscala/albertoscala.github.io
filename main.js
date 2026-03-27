function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  document.getElementById('theme-toggle').textContent =
    isDark ? '[ light mode ]' : '[ dark mode ]';
}

(function () {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.body.classList.add('dark');
    document.addEventListener('DOMContentLoaded', function () {
      document.getElementById('theme-toggle').textContent = '[ light mode ]';
    });
  }
})();