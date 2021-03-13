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
let loginForm = document.querySelector("#login");
let registerForm = document.querySelector("#register");
let emailInp = document.querySelectorAll("input[type='email']");
let pswInp = document.querySelectorAll("input[type='password']");
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

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  errMsg.className = "invalid-feedback";
  secondErrMsg.className = "invalid-feedback";
  mailErrMsg.className = "invalid-feedback";

  if (emailInp[0].value.trim() === "") {
    errMsg.innerHTML = "Enter an email address!!";
    errMsg.style.display = "block";
    emailInp[0].style.borderColor = "#dc3545";
    emailInp[0].parentElement.after(errMsg);
    removeAlert(emailInp[0], errMsg);
  } else if (!mailFormat.test(emailInp[0].value)) {
    mailErrMsg.innerHTML =
      "Please write the e-mail address in the correct format";
    mailErrMsg.style.display = "block";
    emailInp[0].style.borderColor = "#dc3545";
    emailInp[0].parentElement.after(mailErrMsg);
    removeAlert(emailInp[0], mailErrMsg);
  }
  if (pswInp[0].value.trim() === "") {
    secondErrMsg.innerHTML = "Enter an password!!";
    secondErrMsg.style.display = "block";
    pswInp[0].style.borderColor = "#dc3545";
    pswInp[0].parentElement.after(secondErrMsg);
    removeAlert(pswInp[0], secondErrMsg);
  }
});

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  errMsg.className = "invalid-feedback";
  secondErrMsg.className = "invalid-feedback";
  mailErrMsg.className = "invalid-feedback";

  if (emailInp[1].value.trim() === "") {
    errMsg.innerHTML = "Enter an email address!!";
    errMsg.style.display = "block";
    emailInp[1].style.borderColor = "#dc3545";
    emailInp[1].parentElement.after(errMsg);
    removeAlert(emailInp[1], errMsg);
  } else if (!mailFormat.test(emailInp[1].value)) {
    mailErrMsg.innerHTML =
      "Please write the e-mail address in the correct format";
    mailErrMsg.style.display = "block";
    emailInp[1].style.borderColor = "#dc3545";
    emailInp[1].parentElement.after(mailErrMsg);
    removeAlert(emailInp[1], mailErrMsg);
  }
  if (pswInp[1].value.trim() === "") {
    secondErrMsg.innerHTML = "Enter an password!!";
    secondErrMsg.style.display = "block";
    pswInp[1].style.borderColor = "#dc3545";
    pswInp[1].parentElement.after(secondErrMsg);
    removeAlert(pswInp[1], secondErrMsg);
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
