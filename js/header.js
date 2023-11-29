/*------------------
  Header section responsive
---------------------*/
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu-icon.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close-menu-icon.svg";
    }
}