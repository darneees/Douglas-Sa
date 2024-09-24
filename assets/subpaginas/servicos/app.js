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

// loader function

setTimeout(function () {
    $('#code-loader').fadeToggle();
}, 1100);