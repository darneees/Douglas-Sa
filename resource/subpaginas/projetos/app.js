// side menu function
function openNav() {
    document.getElementById("mySidePanel").style.width = "350px";
}

function closedNav() {
    document.getElementById("mySidePanel").style.width = "0";
}

// toggle theme function

function toggleTheme() {
    var element = document.body;
    element.classList.toggle("darkMode");
}

// popup project

var openButtons = document.querySelectorAll(".open-btn");
var closeButtons = document.querySelectorAll(".close-btn");
var popups = document.querySelectorAll(".popup");

openButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        popups[index].style.display = "block";
    });
});

closeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        popups[index].style.display = "none";
    });
});

