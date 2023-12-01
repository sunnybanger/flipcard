// Flip Card
function flipCard() {
    var card = document.querySelector('.flip-card');
    card.classList.toggle('flipped');
    animateFrontText();
    animateFrontButton();
    animateFrontName();
    animateFrontSection();
    animateBackDetails();
}

// Flip Back
function flipBack() {
    var card = document.querySelector('.flip-card');
    card.classList.remove('flipped');
}

// Front Card Text Animation
function animateFrontText() {
    var textElements = document.querySelectorAll('.flip-card-front p');
    textElements.forEach(function (element, index) {
        element.style.animation = `fadeInOut 20s linear ${index * 0.5}s infinite alternate`;
    });
}

// Front Card Button Animation
function animateFrontButton() {
    var button = document.querySelector('.flip-button');
    button.style.animation = 'glowingBorder 7s linear infinite';
}

// Front Card Name Animation
function animateFrontName() {
    var name = document.querySelector('.name');
    name.style.animation = 'glowingBorder 10s linear infinite';
}

// Front Card Section Animation
function animateFrontSection() {
    var sectionElements = document.querySelectorAll('.flip-card-front .section');
    sectionElements.forEach(function (element) {
        element.style.animation = 'glowingBorder 2s linear infinite';
    });
}

// Back Card Text Animation
function animateBackDetails() {
    var details = document.querySelector('.flip-card-back .details');
    details.style.animation = 'textAnimation 4s linear infinite';
}

// Additional animations can be added here if needed

// Rotate on Hover
var card = document.querySelector(".flip-card");
card.addEventListener("mouseenter", function () {
    card.style.transform = "rotate(5deg)";
});

card.addEventListener("mouseleave", function () {
    card.style.transform = "rotate(0deg)";
});

// Scale on Click
card.addEventListener("click", function () {
    card.style.transform = "scale(1.1)";
});

document.body.addEventListener("click", function () {
    card.style.transform = "scale(1)";
});

// Shake on Flip
function shake() {
    card.style.animation = "shake 0.5s";
}

card.addEventListener("animationend", function () {
    card.style.animation = "";
});

// Opacity Fade
function fadeIn(element, duration) {
    var opacity = 0;
    var interval = 50;
    var delta = 1 / (duration / interval);

    var timer = setInterval(function () {
        opacity += delta;
        element.style.opacity = opacity;

        if (opacity >= 1) {
            clearInterval(timer);
        }
    }, interval);
}

var elementsToFade = document.querySelectorAll('.flip-card-front p, .flip-button');
elementsToFade.forEach(function (element, index) {
    fadeIn(element, 1000); // Adjust the duration as needed
});

// Color Cycle Background
var colors = ["#ff9933", "#128807", "#ffffff", "#128807", "#ff9933"];
var currentIndex = 0;

function cycleBackgroundColor() {
    card.style.background = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(cycleBackgroundColor, 2000); // Change color every 2 seconds

// Pulse Effect
function pulse(element) {
    var scale = 1;
    var interval = 500; // milliseconds

    var timer = setInterval(function () {
        scale = scale === 1 ? 1.05 : 1;
        element.style.transform = "scale(" + scale + ")";
    }, interval);
}

var elementsToPulse = document.querySelectorAll('.flip-button, .name');
elementsToPulse.forEach(function (element) {
    pulse(element);
});
