// theme dark and light mode

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")

})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon");
        
    }
})
// color: var(--bg-black-100);
// script

var typed = new Typed(".typing", {
    strings:["", "Full Static Developer", "", "Web Designer", "", "Web Developer", "", "Graphic Designer", ""],
    typeSpeed:110,
    BackSpeed:50,
    loop:true
})

const actives = document.querySelectorAll(".nav li a");

actives.forEach((ele) => {
    ele.onclick = function() {
        actives.forEach((ele) => {
            ele.classList.remove("active");
        })
        this.classList.add("active");
    };
});