//Movement 3D animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const profilepic = document.querySelector('.profilepic img');
const addFriend = document.querySelector('.addFriend');
const description = document.querySelector('.info h3');
const tags = document.querySelector('.tags');

//Animation Event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animation In
container.addEventListener('mouseenter', (e) => {
card.style.transition =  "none";
title.style.transform = "translateZ(150px)";
profilepic.style.transform = "translateZ(100px)";
addFriend.style.transform = "translateZ(130px)";
description.style.transform = "translateZ(100px)";
tags.style.transform = "translateZ(100px)";
});

// Animation out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 0.5s ease"
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    profilepic.style.transform = "translateZ(0px) rotate(0deg)";
    addFriend.style.transform = "translateZ(0px)";
    tags.style.transform = "translateZ(0px)";    
    description.style.transform = "translateZ(0px)";
});