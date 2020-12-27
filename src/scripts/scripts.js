var feedbackPopup = document.querySelector(".modal-write-us");
var btnClose = feedbackPopup.querySelector(".btn-close");
var link = document.querySelector(".contacts__btn");
var overlayPopup = document.querySelector(".modal-overlay");
var form = feedbackPopup.querySelector(".modal-write-us__form");
var promoBg = document.querySelectorAll(".promo__item");

var login = feedbackPopup.querySelector("[name=name]");
var email = feedbackPopup.querySelector("[name=email]");
var feedbackText = feedbackPopup.querySelector("[name=feedback]");
var storageLogin = localStorage.getItem("login");
var storageEmail = localStorage.getItem("email");

link.addEventListener("click", function(event) {
    event.preventDefault();

    feedbackPopup.classList.add("modal-write-us--show");
    overlayPopup.classList.add("modal-overlay--show");

    if (storageLogin) {
        login.value = storageLogin;
        email.focus();
    } else {
        login.focus();
    }

    if (storageLogin && storageEmail) {
        email.value = storageEmail;
        feedbackText.focus();
    }
});

overlayPopup.addEventListener("click", function(event) {
    event.preventDefault();

    feedbackPopup.classList.remove("modal-write-us--show");
    overlayPopup.classList.remove("modal-overlay--show");
    feedbackPopup.classList.remove("modal-write-us--error");
});

btnClose.addEventListener("click", function(event) {
    event.preventDefault();

    feedbackPopup.classList.remove("modal-write-us--show");
    overlayPopup.classList.remove("modal-overlay--show");
    feedbackPopup.classList.remove("modal-write-us--error");
});

form.addEventListener("submit", function(event) {
    if (!login.value || !email.value || !feedbackText.value) {
            event.preventDefault();
            feedbackPopup.classList.remove("modal-write-us--error");
            feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
            feedbackPopup.classList.add("modal-write-us--error");
    } else {
        localStorage.setItem("login", login.value);
        localStorage.setItem("email", email.value);
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) {
        event.preventDefault();
        if (feedbackPopup.classList.contains("modal-write-us--show")) {
            feedbackPopup.classList.remove("modal-write-us--show");
            overlayPopup.classList.remove("modal-overlay--show");
            feedbackPopup.classList.remove("modal-write-us--error");
        }
    }
});

