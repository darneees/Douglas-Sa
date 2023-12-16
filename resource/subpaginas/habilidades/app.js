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