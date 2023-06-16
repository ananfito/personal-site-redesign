window.addEventListener('scroll', myFunction)

const navbar = document.getElementById('navbar')

const sticky = navbar.offsetTop

function myFunction() {
    if (window.scrollY >= sticky) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky')
    }
}