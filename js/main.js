// theme dark and light mode

const dayNight = document.querySelector(".day-night");
const logo_dark = document.querySelector(".logo-img-dark");
const logo_white = document.querySelector(".logo-img-white");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
    if (logo_white.classList.contains("hidden")) {
        logo_white.classList.remove("hidden");
        logo_dark.classList.add("hidden");
    } else {
        logo_white.classList.add("hidden");
        logo_dark.classList.remove("hidden");
    }

})



window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }

})


// JS typing
// var typed = new Typed(".typing", {
//     strings: ["", "Full Static Developer", "", "Web Designer", "", "Web Developer", "", "Graphic Designer", ""],
//     typeSpeed: 110,
//     BackSpeed: 50,
//     loop: true
// })


// Navbar change color by scroll and click
const nav_active = document.querySelectorAll(".nav li a");
const buttons_active = document.querySelectorAll(".button");
const text_hover_active = document.querySelectorAll(".hover-text");

nav_active.forEach((ele) => {
    ele.onclick = function () {
        nav_active.forEach((ele) => {
            ele.classList.remove("active");
        })
        this.classList.add("active");
    };
});

window.onscroll = function () {
    let sY = window.scrollY;
    if (sY <= 715) {
        nav_active.forEach((ele) => {
            ele.classList.remove("active");
        });
        buttons_active.forEach((ele) => {
            ele.classList.remove("active");
        });
        text_hover_active.forEach((ele) => {
            ele.classList.remove("active");
        });
        nav_active[0].classList.add("active");
    }

    if (sY >= 700) {
        nav_active.forEach((ele) => {
            ele.classList.remove("active");
        });
        buttons_active.forEach((ele) => {
            ele.classList.remove("active");
        });
        text_hover_active.forEach((ele) => {
            ele.classList.remove("active");
        });
        nav_active[1].classList.add("active");
        buttons_active[0].classList.add("active");
        text_hover_active[0].classList.add("active");
    }
    if (sY >= 2240) {
        nav_active.forEach((ele) => {
            ele.classList.remove("active");
        });
        buttons_active.forEach((ele) => {
            ele.classList.remove("active");
        });
        text_hover_active.forEach((ele) => {
            ele.classList.remove("active");
        });
        nav_active[2].classList.add("active");
        buttons_active[1].classList.add("active");
        text_hover_active[1].classList.add("active");
    }
    if (sY >= 3200) {
        nav_active.forEach((ele) => {
            ele.classList.remove("active");
        });
        buttons_active.forEach((ele) => {
            ele.classList.remove("active");
        });
        text_hover_active.forEach((ele) => {
            ele.classList.remove("active");
        });
        nav_active[3].classList.add("active");
        buttons_active[2].classList.add("active");
        text_hover_active[2].classList.add("active");
    }
    if (sY >= 4200) {
        nav_active.forEach((ele) => {
            ele.classList.remove("active");
        });
        buttons_active.forEach((ele) => {
            ele.classList.remove("active");
        });
        text_hover_active.forEach((ele) => {
            ele.classList.remove("active");
        });
        nav_active[4].classList.add("active");
        buttons_active[3].classList.add("active");
        text_hover_active[3].classList.add("active");
    }
}




// Activate cards
const cards_activate = document.querySelectorAll(".service-item");


cards_activate.forEach((ele) => {
    ele.onclick = function () {
        if(this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            cards_activate.forEach((ele) => {
                ele.classList.remove("active");
            })
            this.classList.add("active");
        }
    };
});



