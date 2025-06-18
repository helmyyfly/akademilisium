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

function sendToWhatsapp() {
    let number = "+6285759735490";
    let name = document.getElementById('contact-name').value;
    let pesan = document.getElementById('contact-project').value;

    var url = "https://wa.me/" + number + '?pesan='
    + "Nama : " +name+ "%0a";
    + "Pesan : " +pesan+ "%0a%0a";

    window.open(url, '_blank').focus();
}