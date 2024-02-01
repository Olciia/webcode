document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const menu = document.querySelector('.menu');
    const formContainer = document.getElementById('formContainer');
    const askForQuoteButton = document.querySelector('.main-button button');
    const cancelButton = document.querySelector('.form-container button[type="button"]');

    mobileMenuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    askForQuoteButton.addEventListener('click', function () {
        formContainer.style.display = 'flex';
    });

    cancelButton.addEventListener('click', function () {
        formContainer.style.display = 'none';
    });
});

function showForm() {
    document.getElementById('formContainer').style.display = 'flex';
  }
  
  function hideForm() {
    document.getElementById('formContainer').style.display = 'none';
  }
  
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function acceptCookies() {
    setCookie("cookieConsent", "accepted", 365);
    document.getElementById("cookieConsentBanner").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    var cookieConsent = getCookie("cookieConsent");
    if (!cookieConsent) {
        document.getElementById("cookieConsentBanner").style.display = "block";
    }
});

// Druga modyfikacja - przykład zapisywania preferencji użytkownika
function saveUserPreferences() {
    var selectedTheme = document.getElementById("themeSelect").value;
    setCookie("userTheme", selectedTheme, 365);
    // Dodaj kod do dostosowania stylów na podstawie preferencji użytkownika
}






