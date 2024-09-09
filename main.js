// start cursor
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left = `${posX}px`;;
    cursorOutline.style.top = `${posY}px`;
});

// data contact

var x = 5;
var y = 6;
var z = x + y;
document.getElementById("contact-name").innerHTML =
"The value of z is: " + z;