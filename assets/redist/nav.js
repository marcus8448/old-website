// adapted from https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function () {
    var burger = document.querySelector('.navbar-burger');
    var menu = document.querySelector('#' + burger.dataset.target);
    burger.addEventListener('click', function () {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();
