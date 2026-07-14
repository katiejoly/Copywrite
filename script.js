/* ==========================================
   Katie Joly Website
   script.js
========================================== */

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({

                behavior:'smooth',

                block:'start'

            });

        }

    });

});



// Fade in sections on scroll

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('visible');

        }

    });

},{
    threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("fade-section");

    observer.observe(section);

});



// Hero image subtle zoom

window.addEventListener("load",()=>{

    const hero=document.querySelector(".hero-image img");

    if(hero){

        hero.classList.add("hero-loaded");

    }

});



// Header background on scroll

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>60){

        header.classList.add("header-scroll");

    }

    else{

        header.classList.remove("header-scroll");

    }

});
