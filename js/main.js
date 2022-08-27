// theme dark and light mode

const nav_active = document.querySelectorAll(".nav li a");
const buttons_active = document.querySelectorAll(".button");
const text_hover_active = document.querySelectorAll(".hover-text");

const aside = document.querySelector(".aside");
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

const active_skill = document.querySelectorAll(".skill svg circle");
const cards_activate = document.querySelectorAll(".experience-item");
const active_concate = document.querySelectorAll(".card-us");

let php = document.getElementById("php");
let js = document.getElementById("js");
let python = document.getElementById("python");
let django = document.getElementById("django");
let git = document.getElementById("git");
let java = document.getElementById("java");
let flutter = document.getElementById("flutter");
let mysql = document.getElementById("mysql");

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



// Navbar change color by scroll and click




nav_active.forEach((ele) => {
    ele.onclick = function () {
        nav_active.forEach((ele) => {
            ele.classList.remove("active");
            
        });
        this.classList.add("active");
        menuBtn.classList.remove('open');
        if(menuOpen) {
            aside.style.left = -800+"px";

        }else if (!menuBtn.classList.contains('hidden')) {
            aside.style.left = 0+"px";

        }
    };
});

window.onscroll = function () {
// console.log(window.screenX)

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
    if (sY >= 1370) {
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

    if (sY >= 1100) {
    
        if(active_skill[0].classList.contains("active")) {

        }else {
            active_skill.forEach((ele) => {
                ele.classList.add("active");
            })

        }
    }

    if (sY >= 2400) {
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
    if (sY >= 3400) {
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

cards_activate.forEach((ele) => {
    ele.onclick = function () {
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            cards_activate.forEach((ele) => {
                ele.classList.remove("active");
            })
            this.classList.add("active");
        }
    };
});



// Skills 










let php_count = 0;
let js_count = 0;
let python_count = 0;
let django_count = 0;
let git_count = 0;
let java_count = 0;
let flutter_count = 0;
let mysql_count = 0;

setInterval(() => {
    if (php_count === 65) {
        clearInterval();
    } else {
        php_count += 1;
        php.innerHTML = php_count + "%";
    }
}, 28);
setInterval(() => {
    if (js_count === 80) {
        clearInterval();
    } else {
        js_count += 1;
        js.innerHTML = js_count + "%";
    }
}, 26);

setInterval(() => {
    if (python_count == 82) {
        clearInterval();
    } else {
        python_count += 1;
        python.innerHTML = python_count + "%";
    }
}, 24);
setInterval(() => {
    if (django_count == 70) {
        clearInterval();
    } else {
        django_count += 1;
        django.innerHTML = django_count + "%";
    }
}, 24);

setInterval(() => {
    if (git_count == 72) {
        clearInterval();
    } else {
        git_count += 1;
        git.innerHTML = git_count + "%";
    }
}, 26);
setInterval(() => {
    if (java_count == 87) {
        clearInterval();
    } else {
        java_count += 1;
        java.innerHTML = java_count + "%";
    }
}, 22);

setInterval(() => {
    if (flutter_count == 40) {
        clearInterval();
    } else {
        flutter_count += 1;
        flutter.innerHTML = flutter_count + "%";
    }
}, 50);
setInterval(() => {
    if (mysql_count == 78) {
        clearInterval();
    } else {
        mysql_count += 1;
        mysql.innerHTML = mysql_count + "%";
    }
}, 24);



// concate







active_concate.forEach((ele) => {
    ele.onclick = function () {
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            active_concate.forEach((ele) => {
                ele.classList.remove("active");
                
            })
            this.classList.add("active");
        }
    };
});


try {
// toggle

menuBtn.addEventListener('click', () => {
    // if(menuBtn.classList.contains('hidden')) {
        if(!menuOpen) {
            aside.style.left = 0+"px";
            menuBtn.classList.add('open');
            menuOpen = true;
          } else {
            menuBtn.classList.remove('open');
            aside.style.left = -800+"px";
            menuOpen = false;
          }

    // }else {
    // }

});
}catch {
console.log("error")
}




// Send message by email

function sendEmail() {
    Email.send({
        SecureToken : "a9f610d1-1f39-4e4c-9295-b2df961fd87a",
        To : 'muhammadaaa727@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact",
        Body : "Name: "+ document.getElementById("name").value
        + "<br> Email: "+ document.getElementById("email").value
        + "<br> Message: "+ document.getElementById("message").value,
    }).then(
      message => alert("Message Sent Successfully")
    );
}