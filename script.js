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
    document.getElementById('formContainer-2--1').style.display = 'flex';
}
  
function hideForm() {
    document.getElementById('formContainer-2--1').style.display = 'none';
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


const pytaniaOdpowiedzi = document.querySelector('.pytania_odpowiedzi');
    pytaniaOdpowiedzi.addEventListener('click', (event) => {
        if (event.target.tagName === 'STRONG') {
            const pytanie = event.target.closest('.pytanie');
            const paragraph = pytanie.querySelector('p');
            const arrowIcon = pytanie.querySelector('.arrow-icon');

            paragraph.style.display = paragraph.style.display === 'none' ? 'block' : 'none';
            arrowIcon.classList.toggle('open');
        }
    });


    const informacjeMarketingowe = document.querySelector('.informacje_marketingowe');
    informacjeMarketingowe.addEventListener('click', (event) => {
        const strongElement = event.target.closest('strong');
        
        if (strongElement) {
            const pytanie = strongElement.closest('.pytanie');
            const paragraph = pytanie.querySelector('p');
            const arrowIcon = pytanie.querySelector('.arrow-icon');
    
            paragraph.style.display = paragraph.style.display === 'none' ? 'block' : 'none';
            arrowIcon.classList.toggle('open');
        }
    });
    
    document.addEventListener("DOMContentLoaded", function(){
        var menuToggle = document.getElementById('mobile-menu');
        var menu = document.querySelector('.menu');
        var offerToggle = document.querySelector('.offer-toggle');

        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        });

        offerToggle.addEventListener('click', function(e) {
            e.preventDefault();
            var submenu = document.querySelector('.submenu');
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            menu.style.marginTop = submenu.style.display === 'block' ? '200px' : '0'; /* Przesuwa resztę menu w dół */
        });
    });

