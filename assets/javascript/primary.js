const landing = document.getElementById('section-1');
const about = document.getElementById('section-2');
const portfolio = document.getElementById('section-3');
const constact = document.getElementById('section-4');

function generate()






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
floatingNavbar();

