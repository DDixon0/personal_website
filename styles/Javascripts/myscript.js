//Shit's broken
// alert("My personal website is currently under construction");


// No idea what this does
// function d(temp){
//     console.log(temp + " hey")
// }

// function a(temp){
//     console.assert(temp + " doot")
// }
// function b(temp){
//     console.assert(temp + " denzell")
// }

// let functions = [d,a,b];

/*
    Navbar: copied from w3 school
*/
    window.onscroll = function() {myFunction()};
    // Get the navbar
    var navbar = document.getElementById("navbar");
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    // Add the sticky class to the navbar when you reach its scroll position. Remove "stick" when you leave the scroll position
    function myFunction() {
        console.log(sticky);
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("stick")
    } else {
        navbar.classList.remove("stick");
    }
    }


    //In the event of a window resize
    window.addEventListener('resize', function () { 
        "use strict";
        window.location.reload(); 
    });