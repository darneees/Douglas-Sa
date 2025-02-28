// side menu function
function openNav() {
    document.getElementById("mySidePanel").style.width = "300px";
}

function closedNav() {
    document.getElementById("mySidePanel").style.width = "0";
}

// toggle theme function

function toggleTheme() {
    let element = document.body;
    let themeIcon = document.getElementById('themeIcon');

    element.classList.toggle("darkMode");

    if (element.classList.contains('darkMode')) {
        themeIcon.classList.remove('iconoir-half-moon');
        themeIcon.classList.add('iconoir-sun-light');

        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('iconoir-sun-light');
        themeIcon.classList.add('iconoir-half-moon');

        localStorage.setItem('theme', 'light');
    }
}

// saved theme function

function apllySavedTheme() {
    const savedTheme = localStorage.getItem('theme');

    if(savedTheme) {
        document.body.classList.add(savedTheme === 'dark' ? 'darkMode' : 'lightMode');
    } else {
        document.body.classList.add('lightMode');
    }
}

apllySavedTheme();

// open and close modal function

const modal = document.getElementById("modal");
const modalBtn = document.getElementById("modalBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function openModal() {
    modal.style.display = "flex";
    overlay.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
}

// loader function

setTimeout(function () {
    $('#code-loader').fadeToggle();
}, 1000);