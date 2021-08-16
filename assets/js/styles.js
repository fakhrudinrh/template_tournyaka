// Scrolling navbar
var nav = document.querySelector('nav');
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        nav.classList.add('navbar-scroll');
    } else {
        nav.classList.remove('navbar-scroll');
    }
});
// end Scrolling Navbar