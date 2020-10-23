const wrapper = document.getElementById("wrapper"); 
const landing = document.getElementById('section-1');
const about = document.getElementById('section-2');
const portfolio = document.getElementById('section-3');
const constact = document.getElementById('section-4');

generateLanding();

function generateLanding(){
    landing.innerHTMl = `
                        <h1></h1>
                        <p1></p>
                    
    `;
}



wrapper.innerHTML += '<button onclick="topFunction()" id="to-top" title="Go to top"><i class="fas fa-arrow-up"></i></button>';

//Get the button:

let rootElement = document.documentElement
let totopButton = document.getElementById("to-top");
var navigation = document.getElementById("header");

totopButton.addEventListener("click", function (){
    rootElement.scrollTo({
        top: 0,
        ehavior: "smooth"
    })
});

document.addEventListener("scroll", function () {
    let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    var sticky = navigation.offsetTop; 
    var stickyfix = sticky + 600;
    if(rootElement.scrollTop / scrollTotal) {

    }
    //console.log(rootElement.scrollHeight);
    // console.log(rootElement.clientHeight);
    if (window.pageYOffset > stickyfix) {
        navigation.classList.add("sticky");
        console.log(sticky + 'sticky');
        console.log(window.pageYOffset + 'yoffset')
    } else {
        navigation.classList.remove("sticky");
    }

});1

// 
window.onscroll = function() {floatingNavbar()};

// Get the navbar


//
var sticky = navigation.offsetTop;

// 
function floatingNavbar() {
    if (window.pageYOffset >= sticky) {
        navigation.classList.add("sticky")
    } else {
        navigation.classList.remove("sticky");
    }
} 
floatingNavbar();

