let searchBtn = document.querySelector(".searchBtn");
let closeBtn = document.querySelector(".fa-times");
let searchLink = document.querySelector(".search-link");
let searchDropDown = document.querySelector(".right-dropdown");
let searchInp = document.querySelector("input[type='search']");
let barIcon = document.querySelector(".fa-bars");
let hamburgerMenu = document.querySelector(".left-side");
let navbar = document.querySelector(".nav-bottom-item");
let firstBadge = document.querySelector(".first-badge");
let secondBadge = document.querySelector(".second-badge");
let lastBadge = document.querySelector(".last-list-item");
let productIconBox = document.querySelectorAll(".product-icon");
let mailInp = document.querySelector("input[type='email']");
let productIcon = document.querySelectorAll(".fa-heart");
let newsletterForm = document.querySelector(".newsletter-form");
let backToTop = document.querySelector(".backToTop");
let mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nextIcon = '<i class="fas fa-chevron-right"></i>';
const prevIcon = '<i class="fas fa-chevron-left"></i>';

window.addEventListener("scroll", function () {
  if (window.pageYOffset > "400") {
    backToTop.style.opacity = "1";
  } else {
    backToTop.style.opacity = "0";
  }
});

backToTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

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

searchInp.addEventListener("blur", function () {
  searchInp.classList.add("blur");
});

mailInp.addEventListener("blur", function () {
  mailInp.classList.add("blur");
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

productIcon.forEach((item) => {
  item.addEventListener("click", function (e) {
    this.style.transition = "all 0.5s";
    if (e.target.className === "far fa-heart active") {
      e.target.classList.remove("active");
      e.target.parentElement.style.backgroundColor = "#fff";
      e.target.parentElement.style.color = "#000";
    } else {
      e.target.classList.add("active");
      e.target.parentElement.style.backgroundColor = "#152d4b";
      e.target.parentElement.style.color = "#fff";
    }
  });
});

let errMsg = document.createElement("div");

newsletterForm.addEventListener("submit", function (e) {
  errMsg.className = "invalid-feedback";
  if (mailInp.value === "") {
    e.preventDefault();
    errMsg.innerHTML = "Enter an email address!!";
    errMsg.style.display = "block";
    mailInp.style.borderColor = "#dc3545";
    mailInp.parentElement.after(errMsg);
    removeAlert();
  } else if (!mailFormat.test(mailInp.value)) {
    e.preventDefault();
    errMsg.innerHTML = "Please write the e-mail address in the correct format";
    errMsg.style.display = "block";
    mailInp.style.borderColor = "#dc3545";
    mailInp.parentElement.after(errMsg);
    removeAlert();
  }
});

function removeAlert() {
  mailInp.addEventListener("keydown", function () {
    errMsg.style.display = "none";
    mailInp.style.borderColor = "#28a745";
  });
  mailInp.addEventListener("blur", function () {
    if (mailInp.value === "") {
      mailInp.style.borderColor = "";
    }
  });
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 2,
    margin: 30,
    loop: true,
    nav: true,
    navText: [prevIcon, nextIcon],
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
  $(".my-carousel").slick({
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
    ],
  });
});
