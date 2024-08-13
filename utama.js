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

// scroll sections active link

const sections = document.querySelectorAll("section[id]");

function scrollActive()  {
    const scrollY = window.pageXOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight, sectionTop = current.offsetTop - 50, sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <=  sectionTop + sectionHeight) {
        document.querySelector(".nav__menu a [href*=" + sectionId + "]").classList.add("active-link");
        } else {
        document.querySelector(".nav__menu a [href*=" + sectionId + "]").classList.add("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);

// light mode and dark mode 
function scrollHeader() {
    const header = document.getElementById("header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove ("scroll-header");
}

// light dark theme
const themeButton =  document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => (document.body.classList.contains(lightTheme) ? "dark" : "light");
const getCurrentIcon = () => (document.body.classList.contains(iconTheme) ? "bx  bx-moon" : "bx bx-sun");

if(selectedTheme) {
    document.addEventListener[selectedTheme === "dark" ? "add" : "remove"] (lightTheme);
    themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"] (iconTheme);
}
// active and non-active dark mode 
themeButton.addEventListener("click", () => {
    document.body.classList.toggle (lightTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});