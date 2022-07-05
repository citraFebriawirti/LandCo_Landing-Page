//smoothscroll
var posY = -10;
var jarak = 10;

function smoothScroll(id) {
    var target = document.getElementById(id).offsetTop
        //jarak antara atas dan div

    var scrollAnimate = setTimeout(function() {
        smoothScroll(id);
    }, 2); //ungsi dan waktu

    posY = posY + jarak;

    if (posY >= target) {
        clearTimeout(scrollAnimate);
        posY = 0;
    } else {
        window.scroll(0, posY); //x dan y
    }

    return false;
}