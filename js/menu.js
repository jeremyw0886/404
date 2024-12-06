'use strict';

/**
 * Event listener for the menu toggle button.
 * Opens the dropdown menu with a slight delay to trigger the transition.
 */
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.style.display = 'flex'; // Ensure it is visible
    setTimeout(() => {
        dropdownMenu.classList.add('open');
    }, 10); // Slight delay to trigger the transition
});

/**
 * Event listener for the close menu button.
 * Closes the dropdown menu.
 */
document.getElementById('close-menu').addEventListener('click', function() {
    closeDropdownMenu();
});

/**
 * Event listeners for each link in the dropdown menu.
 * Closes the dropdown menu when a link is clicked.
 */
document.querySelectorAll('.dropdown-menu ul li a').forEach(link => {
    link.addEventListener('click', function() {
        closeDropdownMenu();
    });
});

/**
 * Closes the dropdown menu with a smooth transition.
 * Removes the 'open' class and adds the 'closing' class.
 * Hides the menu after the transition duration.
 */
function closeDropdownMenu() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.remove('open');
    dropdownMenu.classList.add('closing');
    setTimeout(() => {
        dropdownMenu.style.display = 'none'; // Hide it after the transition
        dropdownMenu.classList.remove('closing');
    }, 700); // Match the transition duration
}
