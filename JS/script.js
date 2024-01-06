const header = document.querySelector("header")

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

const ml_section = document.querySelector(".milestones");
const ml_counter = document.querySelectorAll(".number span");

const prt_section = document.querySelector(".portfolio");
const zoom_icons = document.querySelectorAll(".zoom-icon");
const modal_overlay = document.querySelector(".modal-overlay");
const images = document.querySelectorAll(".images img");
const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");
const links = document.querySelectorAll('.nav-link');

const togglebtn = document.querySelector(".toggle-btn")
const hamburger = document.querySelector(".hamburger")

const name_i = document.getElementById('name_input')
const email = document.getElementById('email_input')
const textarea = document.getElementById('textarea_input')



// ------------------ Animation for Run----------------



window.addEventListener("scroll", () => {
    activeLink();
    if (!skillsPlayed) { skillsCounter(); }
    if (!mlplayed) { mlCounter(); }

})

// ------------------Stickey Navebar----------------

function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);

}

window.addEventListener("scroll", stickyNavbar)


// ------------------Reveal Animation----------------

// let sr = ScrollReveal({
//     duration: 2500,
//     distance: "60px",
// });

// sr.reveal(".showcase-info", { origin: "left", delay: 500 });
// sr.reveal(".shape", { delay: 500 });
// sr.reveal(".dots", { origin: "left", delay: 700 });
// sr.reveal(".showcase-image", { origin: "top", delay: 600 });

// ------------------Skills progress bar Animation----------------

function hasReached(el) {
    let topPosition = el.getBoundingClientRect().top;
    if (window.innerHeight >= topPosition + el.offsetHeight) {
        return true;
    }
    else {
        return false;
    }
}

function updateCount(num, maxNum) {
    let currentNum = +num.innerText;

    if (currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum);
        }, 12);
    }

}

let skillsPlayed = false;

function skillsCounter() {
    if (!hasReached(first_skill)) return;

    skillsPlayed = true;

    sk_counters.forEach((counter, i) => {
        let target = +counter.dataset.target;
        let strokeValue = 427 - 427 * (target / 100)
        progress_bars[i].style.setProperty("--target", strokeValue)

        setTimeout(() => {
            updateCount(counter, target);
        }, 400);
    })

    progress_bars.forEach((p) => { p.style.animation = 'progress 2s ease-in-out forwards' })

}

// ------------------services counter Animation----------------

let mlplayed = false;

function mlCounter() {
    if (!hasReached(ml_section)) return;
    mlplayed = true;
    ml_counter.forEach((ctr) => {
        let target = +ctr.dataset.target;

        setTimeout(() => {
            updateCount(ctr, target)
        }, 400);
    })
};


// ------------------Portfolio Filter Animation----------------

// let mixer = mixitup('.portfolio-gallery', {
//     selectors: {
//         target: '.blog-item'
//     },
//     animation: {
//         duration: 300
//     }
// });

let btn_1 = document.getElementById("btn-1");
let btn_2 = document.getElementById("btn-2");
let btn_3 = document.getElementById("btn-3");
let btn_4 = document.getElementById("btn-4");
let portfolio = document.querySelector(".portfolio-gallery");
let mix1 = document.querySelector(".mix1");
let mix2 = document.querySelector(".mix2");
let mix3 = document.querySelector(".mix3");
let mix4 = document.querySelector(".mix4");
let mix5 = document.querySelector(".mix5");
let mix6 = document.querySelector(".mix6");

function addition1() {
    portfolio.innerHTML = "";
    mix1.style.animation = "mix--1 2.2s ease"
    mix2.style.animation = "mix--2 2.2s ease"
    mix3.style.animation = "mix--3 2.2s ease"
    mix4.style.animation = "mix--4 2.2s ease"
    mix5.style.animation = "mix--5 2.2s ease"
    mix6.style.animation = "mix--6 2.2s ease"
    portfolio.appendChild(mix1);
    portfolio.appendChild(mix2);
    portfolio.appendChild(mix3);
    portfolio.appendChild(mix4);
    portfolio.appendChild(mix5);
    portfolio.appendChild(mix6);
    btn_1.style.color = "var(--min-color-1)"
    btn_2.style.color = "var(--heading-color)"
    btn_3.style.color = "var(--heading-color)"
    btn_4.style.color = "var(--heading-color)"

}

btn_1.addEventListener("click", () => {
    addition1();
})
function addition2() {
    addition1();
    portfolio.removeChild(mix1);
    portfolio.appendChild(mix2);
    portfolio.removeChild(mix3);
    portfolio.appendChild(mix4);
    portfolio.appendChild(mix5);
    portfolio.removeChild(mix6);
    btn_1.style.color = "var(--heading-color)"
    btn_2.style.color = "var(--min-color-1)"
}

btn_2.addEventListener("click", () => {
    addition2();
})
function addition3() {
    addition1();
    portfolio.appendChild(mix1);
    portfolio.removeChild(mix2);
    portfolio.removeChild(mix3);
    portfolio.removeChild(mix4);
    portfolio.removeChild(mix5);
    portfolio.removeChild(mix6);
    btn_1.style.color = "var(--heading-color)"
    btn_3.style.color = "var(--min-color-1)"
}

btn_3.addEventListener("click", () => {
    addition3();
})
function addition4() {
    addition1();
    portfolio.removeChild(mix1);
    portfolio.removeChild(mix2);
    portfolio.appendChild(mix3);
    portfolio.removeChild(mix4);
    portfolio.removeChild(mix5);
    portfolio.appendChild(mix6);
    btn_1.style.color = "var(--heading-color)"
    btn_4.style.color = "var(--min-color-1)"
}

btn_4.addEventListener("click", () => {
    addition4();
})


// ------------------ Modal pop up Animation----------------

let currentIndex = 0;

zoom_icons.forEach((ico, i) => ico.addEventListener("click", () => {
    prt_section.classList.add("open")
    document.body.classList.add("stopScroll")
    currentIndex = i;
    changeImage(currentIndex);
}))

modal_overlay.addEventListener("click", () => {
    prt_section.classList.remove("open");
    document.body.classList.remove("stopScroll");
})

function changeImage(i) {
    images.forEach(img => { img.classList.remove("showImage") });
    images[i].classList.add("showImage");
    console.log("class is added")


}

prev_btn.addEventListener("click", () => {
    if (currentIndex === 0) (
        currentIndex = 5
    )
    else {
        currentIndex--;
    }
    changeImage(currentIndex)
})
next_btn.addEventListener("click", () => {
    if (currentIndex === 5) (
        currentIndex = 0
    )
    else {
        currentIndex++;
    }
    changeImage(currentIndex)
})



// ------------------ Modal pop up Animation----------------

const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 500,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});



// ------------------ Change Active link on scroll----------------

function activeLink() {
    let section = document.querySelectorAll("section[id]")
    let passedsection = Array.from(section).map((sct, i) => {
        return {
            y: sct.getBoundingClientRect().top - header.offsetHeight,
            id: i,
        }
    }).filter((sct) => sct.y <= 0);

    let currentsectionID = passedsection.at(-1).id;
    links.forEach(l => l.classList.remove("active"))
    links[currentsectionID].classList.add("active")
};

activeLink();

// ------------------ Change Page Theme----------------
let icon = document.querySelector(".uil");

let firstTheme = localStorage.getItem("dark");

changeTheme(+firstTheme);


function changeTheme(isDark) {
    if (isDark) {
        document.body.classList.add("dark");
        icon.classList.remove("uil-moon");
        icon.classList.add("uil-sun");
        localStorage.setItem("dark", 1);
    }
    else {
        document.body.classList.remove("dark");
        icon.classList.remove("uil-sun");
        icon.classList.add("uil-moon");
        localStorage.setItem("dark", 0);
    }
}

togglebtn.addEventListener("click", () => {
    changeTheme(!document.body.classList.contains("dark"));
})


// ------------------ Open and Close menu ----------------
hamburger.addEventListener("click",() =>{
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopScroll");
})

links.forEach(link => link.addEventListener("click",()=>{
    document.body.classList.remove("open");
    document.body.classList.remove("stopScroll");
}))





//------------------------contact page clear after submit form--------------
let form = document.getElementById("conta")
let btn = document.getElementById("btn_id")

let count = localStorage.getItem('less_count')
localStorage.getItem('remove_btn')
document.getElementById('count_num').innerHTML = localStorage.getItem('less_count')
form.classList.add(localStorage.getItem('remove_btn'))
localStorage.getItem('form')



btn.addEventListener('click',()=>{
    
    
    if(document.getElementById('count_num').innerText=3 && form.classList.contains("form1")){
        plus1 = document.getElementById('count_num').innerText='You have remaining 2 messages'
        localStorage.setItem('form',plus1)
        form.classList.remove("form1")
        
    }
    else if(document.getElementById('count_num').innerText=2 && form.classList.contains("form2") && plus1=='You have remaining 2 messages'){
        plus2 = document.getElementById('count_num').innerText='You have remaining 1 messages'
        localStorage.setItem('form',plus2)
        form.classList.remove('form2')
    }
    else if(document.getElementById('count_num').innerText=1 && form.classList.contains("form3") && plus2=='You have remaining 1 messages'){
        plus3 =document.getElementById('count_num').innerText='You have remaining zero messages'
        localStorage.setItem('form',plus3)
        form.classList.remove('form3')
        
    }
    else{
        localStorage.setItem('less_count', `<p class="worning" style=" font-size: larger; text-align: center; margin-bottom:2rem;">Your Limited Messages Completed</p>`) 
        document.getElementById('count_num').innerHTML = localStorage.getItem('less_count')
        localStorage.setItem('remove_btn', "disable")
        form.classList.add(localStorage.getItem('remove_btn'))



        
        
}



})
