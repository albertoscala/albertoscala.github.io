function changeTheme() {
    const root = document.documentElement;
    const currentTheme = root.classList.contains('light') ? 'light' : 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    root.classList.toggle('light', newTheme === 'light');
    document.getElementById('mode-toggle').textContent = newTheme === 'light' ? '☀️' : '🌙';
}