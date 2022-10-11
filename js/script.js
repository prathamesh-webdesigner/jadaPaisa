console.log('connected');

// $(document).ready(function () {
//     $(".banner_2-4").fadeIn(2000);
//     $(".banner_1-5").fadeIn(4000);
// });

// typing effect for Learn Desktop
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["Your Self", "Your Interests", "Your Environment"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});
// typing effect for Learn end

// typing effect for Learn Mobile
const typedTextSpanMobile = document.querySelector(".typed-text-Learn-mobile");
const cursorSpanMobile = document.querySelector(".cursor-learn-mobile");
const textArrayMobile = ["Your Self", "Your Interests", "Your Environment"];
const typingDelayMobile = 200;
const erasingDelayMobile = 100;
const newTextDelayMobile = 2000; // Delay between current and next text
let textArrayIndexMobile = 0;
let charIndexMobile = 0;

function typeMobile() {
    if (charIndexMobile < textArrayMobile[textArrayIndexMobile].length) {
        if (!cursorSpanMobile.classList.contains("typing")) cursorSpanMobile.classList.add("typing");
        typedTextSpanMobile.textContent += textArrayMobile[textArrayIndexMobile].charAt(charIndexMobile);
        charIndexMobile++;
        setTimeout(typeMobile, typingDelayMobile);
    }
    else {
        cursorSpanMobile.classList.remove("typing");
        setTimeout(eraseMobile, newTextDelayMobile);
    }
}

function eraseMobile() {
    if (charIndexMobile > 0) {
        if (!cursorSpanMobile.classList.contains("typing")) cursorSpanMobile.classList.add("typing");
        typedTextSpanMobile.textContent = textArrayMobile[textArrayIndexMobile].substring(0, charIndexMobile - 1);
        charIndexMobile--;
        setTimeout(eraseMobile, erasingDelayMobile);
    }
    else {
        cursorSpanMobile.classList.remove("typing");
        textArrayIndexMobile++;
        if (textArrayIndexMobile >= textArrayMobile.length) textArrayIndexMobile = 0;
        setTimeout(typeMobile, typingDelayMobile + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArrayMobile.length) setTimeout(typeMobile, newTextDelayMobile + 250);
});
// typing effect for Learn Mobile end 


// typing effect for Earn
const typedTextSpanEarn = document.querySelector(".typed-text-earn");
const cursorSpanEarn = document.querySelector(".cursor-earn");
const textArrayEarn = ["Offers", "Deals", "Coupons", "Promos", "Discounts"];
const typingDelayEarn = 200;
const erasingDelayEarn = 100;
const newTextDelayEarn = 2000; // Delay between current and next text
let textArrayIndexEarn = 0;
let charIndexEarn = 0;

function typeEarn() {
    if (charIndexEarn < textArrayEarn[textArrayIndexEarn].length) {
        if (!cursorSpanEarn.classList.contains("typing")) cursorSpanEarn.classList.add("typing");
        typedTextSpanEarn.textContent += textArrayEarn[textArrayIndexEarn].charAt(charIndexEarn);
        charIndexEarn++;
        setTimeout(typeEarn, typingDelayEarn);
    }
    else {
        cursorSpanEarn.classList.remove("typing");
        setTimeout(eraseEarn, newTextDelayEarn);
    }
}

function eraseEarn() {
    if (charIndexEarn > 0) {
        if (!cursorSpanEarn.classList.contains("typing")) cursorSpanEarn.classList.add("typing");
        typedTextSpanEarn.textContent = textArrayEarn[textArrayIndexEarn].substring(0, charIndexEarn - 1);
        charIndexEarn--;
        setTimeout(eraseEarn, erasingDelayEarn);
    }
    else {
        cursorSpanEarn.classList.remove("typing");
        textArrayIndexEarn++;
        if (textArrayIndexEarn >= textArrayEarn.length) textArrayIndexEarn = 0;
        setTimeout(typeEarn, typingDelayEarn + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArrayEarn.length) setTimeout(typeEarn, newTextDelayEarn + 250);
});
// typing effect for Earn end 

// typing effect for Earn Mobile
const typedTextSpanEarnMobile = document.querySelector(".typed-text-earn-mobile");
const cursorSpanEarnMobile = document.querySelector(".cursor-earn-mobile");
const textArrayEarnMobile = ["Offers", "Deals", "Coupons", "Promos", "Discounts"];
const typingDelayEarnMobile = 200;
const erasingDelayEarnMobile = 100;
const newTextDelayEarnMobile = 2000; // Delay between current and next text
let textArrayIndexEarnMobile = 0;
let charIndexEarnMobile = 0;

function typeEarnMobile() {
    if (charIndexEarnMobile < textArrayEarnMobile[textArrayIndexEarnMobile].length) {
        if (!cursorSpanEarnMobile.classList.contains("typing")) cursorSpanEarnMobile.classList.add("typing");
        typedTextSpanEarnMobile.textContent += textArrayEarnMobile[textArrayIndexEarnMobile].charAt(charIndexEarnMobile);
        charIndexEarnMobile++;
        setTimeout(typeEarnMobile, typingDelayEarnMobile);
    }
    else {
        cursorSpanEarnMobile.classList.remove("typing");
        setTimeout(eraseEarnMobile, newTextDelayEarnMobile);
    }
}

function eraseEarnMobile() {
    if (charIndexEarnMobile > 0) {
        if (!cursorSpanEarnMobile.classList.contains("typing")) cursorSpanEarnMobile.classList.add("typing");
        typedTextSpanEarnMobile.textContent = textArrayEarnMobile[textArrayIndexEarnMobile].substring(0, charIndexEarnMobile - 1);
        charIndexEarnMobile--;
        setTimeout(eraseEarnMobile, erasingDelayEarnMobile);
    }
    else {
        cursorSpanEarnMobile.classList.remove("typing");
        textArrayIndexEarnMobile++;
        if (textArrayIndexEarnMobile >= textArrayEarnMobile.length) textArrayIndexEarnMobile = 0;
        setTimeout(typeEarnMobile, typingDelayEarnMobile + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArrayEarnMobile.length) setTimeout(typeEarnMobile, newTextDelayEarnMobile + 250);
});

// owl 
$('.Services_for_mobile').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay:true,
    dots:false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

// navbar mobile 

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }