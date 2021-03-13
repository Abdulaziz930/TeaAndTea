let searchBtn = document.querySelector(".searchBtn");
let closeBtn = document.querySelector(".fa-times");
let searchLink = document.querySelector(".search-link");
let searchDropDown = document.querySelector(".right-dropdown");
let inputs = document.querySelectorAll("input");
let barIcon = document.querySelector(".fa-bars");
let hamburgerMenu = document.querySelector(".left-side");
let navbar = document.querySelector(".nav-bottom-item");
let firstBadge = document.querySelector(".first-badge");
let secondBadge = document.querySelector(".second-badge");
let lastBadge = document.querySelector(".last-list-item");
let contactForm = document.querySelector("#contactForm  ");
let emailInp = document.querySelector("input[type='email']");
let textarea = document.querySelector("textarea");
let mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

window.addEventListener("scroll", function () {
  navbar.style.transition = "all 0.5s";
  if (window.pageYOffset > "100") {
    navbar.style.position = "fixed";
    navbar.style.width = "100%";
    navbar.style.top = "0";
    firstBadge.classList.add("first-badge-1");
    secondBadge.classList.add("second-badge-1");
    lastBadge.classList.add("last-list-item-1");
  } else {
    navbar.style.position = "";
    firstBadge.classList.remove("first-badge-1");
    secondBadge.classList.remove("second-badge-1");
    lastBadge.classList.remove("last-list-item-1");
  }
});

searchLink.addEventListener("click", function () {
  if (searchBtn.style.display === "none") {
    searchBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
    searchDropDown.style.display = "none";
  } else {
    searchBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
    searchDropDown.style.display = "block";
  }
});

inputs.forEach((item) => {
  item.addEventListener("blur", function () {
    item.classList.add("blur");
  });
});

barIcon.addEventListener("click", function () {
  hamburgerMenu.style.transition = "all 0.5s";
  if (hamburgerMenu.classList.contains("active")) {
    hamburgerMenu.classList.remove("active");
    hamburgerMenu.style.display = "none";
  } else {
    hamburgerMenu.classList.add("active");
    hamburgerMenu.style.display = "block";
  }
});

let errMsg = document.createElement("div");
let secondErrMsg = document.createElement("div");
let mailErrMsg = document.createElement("div");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  errMsg.className = "invalid-feedback";
  secondErrMsg.className = "invalid-feedback";
  mailErrMsg.className = "invalid-feedback";

  if (emailInp.value.trim() === "") {
    errMsg.innerHTML = "Enter an email address!!";
    errMsg.style.display = "block";
    emailInp.style.borderColor = "#dc3545";
    emailInp.parentElement.after(errMsg);
    removeAlert(emailInp, errMsg);
  } else if (!mailFormat.test(emailInp.value)) {
    mailErrMsg.innerHTML =
      "Please write the e-mail address in the correct format";
    mailErrMsg.style.display = "block";
    emailInp.style.borderColor = "#dc3545";
    emailInp.parentElement.after(mailErrMsg);
    removeAlert(emailInp, mailErrMsg);
  }
  if (textarea.value.trim() === "") {
    secondErrMsg.innerHTML = "Enter an comment!!";
    secondErrMsg.style.display = "block";
    textarea.style.borderColor = "#dc3545";
    textarea.parentElement.after(secondErrMsg);
    removeAlert(textarea, secondErrMsg);
  }
});

function removeAlert(input, errMsg) {
  input.addEventListener("keydown", function () {
    errMsg.style.display = "none";
    input.style.borderColor = "#28a745";
  });
  input.addEventListener("blur", function () {
    if (input.value === "") {
      input.style.borderColor = "";
    }
  });
}
