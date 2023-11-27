// side menu function
function openNav () {
    document.getElementById("mySidePanel").style.width = "350px";
}

function closedNav () {
    document.getElementById("mySidePanel").style.width = "0";
}

// toggle theme function

function toggleTheme() {
    var element = document.body;
    element.classList.toggle("darkMode");
    changeImage();
}

// change image function

const userImage = document.getElementById("userImage");

function changeImage() {
    const isDarkMode = document.body.classList.contains("darkMode");
    if (isDarkMode) {
        userImage.src = "resource/img/userDarkTheme.webp";
        userImage.alt = "imagem de perfil Dark theme";
    } else {
        userImage.src = "resource/img/userLightTheme.webp";
        userImage.alt = "imagem de perfil Light theme";
    }
}

changeImage();

