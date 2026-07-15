// =====================================
// FASHION ZONE - SCRIPT.JS
// =====================================

// PAGE LOADER
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 500);

        }, 800);
    }
});

// =====================================
// NAVBAR
// =====================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.style.background = "#000";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.4)";

    } else {

        navbar.style.background = "rgba(0,0,0,.45)";
        navbar.style.boxShadow = "none";

    }

});

// =====================================
// MOBILE MENU
// =====================================

const menuBtn = document.querySelector(".menu");
const navLinks = document.querySelector(".navbar ul");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}

// =====================================
// SMOOTH SCROLL
// =====================================

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (!href) return;

        if (href === "#") return;

        if (!href.startsWith("#")) return;

        const target = document.querySelector(href);

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// =====================================
// SCROLL ANIMATION
// =====================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {

    threshold:0.2

});

document.querySelectorAll(
".category-card,.featured-card,.product-card,.review-card,.highlight-box,.offer,.gallery img"
).forEach(item=>{

    observer.observe(item);

});

// =====================================
// BACK TO TOP
// =====================================

const topBtn=document.createElement("button");

topBtn.id="topBtn";

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="flex";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =====================================
// PROGRESS BAR
// =====================================

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const total=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    const progressValue=(window.scrollY/total)*100;

    progress.style.width=progressValue+"%";

});

// =====================================
// HERO ANIMATION
// =====================================

const heroTitle=document.querySelector(".hero-content h1");

if(heroTitle){

    heroTitle.style.opacity="0";

    heroTitle.style.transform="translateY(30px)";

    setTimeout(()=>{

        heroTitle.style.transition="1s";

        heroTitle.style.opacity="1";

        heroTitle.style.transform="translateY(0)";

    },400);

}

// =====================================
// BUTTON EFFECT
// =====================================

document.querySelectorAll(".btn1,.btn2").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});

// =====================================
// CONSOLE
// =====================================

console.log("Fashion Zone Loaded Successfully");
