// 1. Existing Menu Toggle Logic
document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('active');
});

// 2. NEW: Auto-Close Logic for Mobile
// This selects all links inside your navigation
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // This removes the 'active' class, hiding the menu immediately after a click
        document.getElementById('nav-links').classList.remove('active');
    });
});
