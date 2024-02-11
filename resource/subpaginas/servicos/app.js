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
        themeIcon.classList.remove('iconoir-half-moon');
        themeIcon.classList.add('iconoir-sun-light');
    } else {
        themeIcon.classList.remove('iconoir-sun-light');
        themeIcon.classList.add('iconoir-half-moon');
    }
}


// loader function

setTimeout(function () {
    $('#code-loader').fadeToggle();
}, 1100);