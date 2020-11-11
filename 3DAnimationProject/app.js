//Movement 3D animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes')

//Animation Event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animation In
container.addEventListener('mousemove', (e) => {
card.style.transition =  "none";
title.style.transform = "translateZ(100px)";
sneaker.style.transform = "translateZ(100px) rotate(-45deg)";
purchase.style.transform = "translateZ(100px)";
description.style.transform = "translateZ(100px)";
sizes.style.transform = "translateZ(100px)";
});

// Animation out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 0.5s ease"
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotate(0deg)";
    purchase.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";    
    description.style.transform = "translateZ(0px)";
})