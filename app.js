const header = document.querySelector(".container");
const header2 = document.querySelector(".container2");
const header3 = document.querySelector(".container3")
const person = document.querySelector("h1");
function home(){
    header.style.opacity = "1";
    header2.style.opacity = "0";
    header3.style.opacity = "0";
}

function aboutUs(){
    header.style.opacity = "0";
    header2.style.opacity = "1";
    header3.style.opacity = "0";
}

function contact(){
    header.style.opacity = "0";
    header2.style.opacity = "0";
    header3.style.opacity = "1";
    
}


