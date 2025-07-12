

function toggleMenu(){
    const menu = document.getElementById("menu-links");
    const icon = document.querySelector(".scroll-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Close menu when clicking on a navigation link
function closeMenu() {
    const menu = document.getElementById("menu-links");
    const icon = document.querySelector(".scroll-icon");
    menu.classList.remove("open");
    icon.classList.remove("open");
}

// Add event listeners to all navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#menu-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});

// Alternative approach: Close menu when clicking outside of it
document.addEventListener('click', function(event) {
    const menu = document.getElementById("menu-links");
    const icon = document.querySelector(".scroll-icon");
    const nav = document.querySelector("nav");
    
    // Check if the click is outside the navigation area
    if (!nav.contains(event.target) && menu.classList.contains("open")) {
        closeMenu();
    }
});