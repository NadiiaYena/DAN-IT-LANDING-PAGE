window.addEventListener('scroll', function() {
    var header = document.querySelector('.header-menu');
    if (window.scrollY > 0) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});

