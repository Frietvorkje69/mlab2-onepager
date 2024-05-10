// make header sticky
window.addEventListener('scroll', function () {
    let header = document.getElementById('header');
    let navbar = document.getElementById('navbar');
    if (window.pageYOffset > header.offsetHeight) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});
