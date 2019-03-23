//Shit's broken
alert("My personal website is currently under construction");



//The Welcome sign is going to animate, then the sign underneath will load
const titlelist = document.getElementsByTagName("h1");
const title = titlelist[0];
const blurbs = document.getElementsByTagName("h4");
const blurb = blurbs[0];

// title.addEventListener("animationend", flip); 


function flip(){

    blurb.style.opacity= "1";
}