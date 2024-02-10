// side menu function
function openNav() {
    document.getElementById("mySidePanel").style.width = "350px";
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
        themeIcon.classList.remove('ph-moon');
        themeIcon.classList.add('ph-sun');
    } else {
        themeIcon.classList.remove('ph-sun');
        themeIcon.classList.add('ph-moon');
    }
}
// change image function

const userImage = document.getElementById("userImage");

function changeImage() {
    const isDarkMode = document.body.classList.contains("darkMode");
    if (isDarkMode) {
        userImage.src = "resource/img/darkMode.webp";
        userImage.alt = "imagem de perfil Dark theme";
    } else {
        userImage.src = "resource/img/lightMode.webp";
        userImage.alt = "imagem de perfil Light theme";
    }
}

changeImage();

// open and close modal function

const modal = document.getElementById("modal");
const modalBtn = document.getElementById("modalBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function openModal() {
    modal.style.display = "block";
    overlay.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
}

// loader function

setTimeout(function () {
    $('#loader').fadeToggle();
}, 1200);