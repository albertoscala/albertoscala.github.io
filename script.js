// script.js

document.getElementById('theme-switcher').addEventListener('click', function() {
    const bodyElement = document.body;
    const isLightMode = bodyElement.classList.toggle('light');

    // Update button text based on the current mode
    this.textContent = isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode';

    // Optional: Save the mode in localStorage
    localStorage.setItem('light-mode', isLightMode);
});

// Load saved preference on page load
window.onload = function() {
    if (localStorage.getItem('light-mode') === 'true') {
        document.body.classList.add('light');
        document.getElementById('theme-switcher').textContent = 'Switch to Dark Mode';
    }
};
