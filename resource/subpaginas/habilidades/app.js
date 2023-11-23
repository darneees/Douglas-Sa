// side menu function
function openNav () {
    document.getElementById("mySidePanel").style.width = "350px";
}

function closedNav () {
    document.getElementById("mySidePanel").style.width = "0";
}

// toggle function
function toggleTheme() {
    var element = document.body;
    element.classList.toggle("darkMode")
}
