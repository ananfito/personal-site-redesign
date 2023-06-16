const navbar = document.getElementById('navbar')
const sticky = navbar.offsetTop

// Listen for scroll on the window
window.addEventListener('scroll', stickyNavbar)

function stickyNavbar() {
    if (window.scrollY >= sticky) { // If the scroll gets longer then the top of the navbar, add 'sticky' class to element
        navbar.classList.add('sticky')
    } else { // if not, then remove 'sticky' class
        navbar.classList.remove('sticky')
    }
}