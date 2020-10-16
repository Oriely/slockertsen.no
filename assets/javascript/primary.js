// When the user scrolls the page, execute myFunction
window.onscroll = function() {floatingNavbar()};

// Get the navbar
var navigation = document.getElementById("header");

// Get the offset position of the navbar
var sticky = navigation.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function floatingNavbar() {
    if (window.pageYOffset >= sticky) {
        navigation.classList.add("sticky")
    } else {
        navigation.classList.remove("sticky");
    }
} 