document.getElementById('color-switch').addEventListener('click', function() {
    const bodyElement = document.body;
    const isDarkMode = bodyElement.classList.toggle('dark-mode');

    // Update button text based on the current mode
    this.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';

    // Optional: Save the mode in localStorage
    localStorage.setItem('dark-mode', isDarkMode);
});

// Load saved preference on page load
window.onload = function() {
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
        document.getElementById('color-switch').textContent = 'Switch to Light Mode';
    }
};