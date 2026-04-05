// JavaScript functionality for the gym website

document.addEventListener('DOMContentLoaded', () => {
    // Example functionality: Toggle visibility of a section
    const toggleButton = document.getElementById('toggle-section');
    const section = document.getElementById('section-to-toggle');

    toggleButton.addEventListener('click', () => {
        section.classList.toggle('hidden'); // use CSS class to hide/show
    });

    // More gym-related functionality can be added here
});
