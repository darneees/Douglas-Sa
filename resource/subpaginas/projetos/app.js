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

// scroll to top function

let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// loader function

setTimeout(function () {
  $('#code-loader').fadeToggle();
}, 1300);