'use strict';
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const navBar = document.querySelector('.nav-bar');
const blurry = document.querySelector('.blurry');


menuIcon.addEventListener('click', () => {
 navBar.classList.remove('hidden')
 menuIcon.style.display = 'none'
})
closeIcon.addEventListener('click', () => {
 navBar.classList.add('hidden');
 menuIcon.style.display = 'block'

})

// WORKING WITH NAV BAR
const navList = document.querySelector('.nav-list');

navList.addEventListener('click', (e) => {
 e.preventDefault();
 const clicked = e.target.classList.contains('nav-link');
 console.log(clicked);
 if(clicked) {
 const lick = e.target.getAttribute('href');
 document.querySelector(lick).scrollIntoView({
  behavior: 'smooth'
 })
 }
})

// WORKING WITH STICKY NAV BAR using intersection observer
const sectionOne = document.querySelector('#section-one');
const sectionTwo = document.querySelector('#section-two');
const topBar =document.querySelector('.top');
const navLink = document.querySelectorAll('.nav-link');


const topHeight = topBar.getBoundingClientRect().height;
const easyFtn = (entries) => {
 const [entry] =entries;
 // console.log(entry);
 if(!entry.isIntersecting) {
  topBar.classList.add('sticky');
 } else {
  topBar.classList.remove('sticky');
 }
}

const easyObserver = new IntersectionObserver(easyFtn, {
 root: null,
 threshold: 0,
 rootMargin: `-${topHeight}px`
});
easyObserver.observe(sectionOne);

// WORKING WITH SCROLL REVEAL
const allSection = document.querySelectorAll('.section')

const sectionFtn = (entries) => {
 const [entry] =entries;
 console.log(entry)
 if(!entry.isIntersecting) return;

 entry.target.classList.remove('section-hidden')
}

const sectionScroll = new IntersectionObserver(sectionFtn, {
 root: null,
 threshold: 0.2,
});

allSection.forEach(el => {
 sectionScroll.observe(el)
 el.classList.add('section-hidden')
})