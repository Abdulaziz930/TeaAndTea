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
// let firstSmallImg = document.querySelector(".first-small-img");
// let secondSmallImg = document.querySelector(".second-small-img");
let smallImgBox = document.querySelector(".small-img-box");
let firstBigImg = document.querySelector(".first-big-img ");
let secondBigImg = document.querySelector(".second-big-img ");
let numberInp = document.querySelector("input[type='number']");
let totalPrice = document.querySelector(".total");
let price = document.querySelector(".price");
let stock = document.querySelector(".stock");
let buyBtn = document.querySelector(".btn-buy");
let cartBtn = document.querySelector(".btn-add-to-cart");
let checkBox = document.querySelector("#terms");
let formCheck = document.querySelector(".form-check");
let productErrMsg = document.querySelector(".error-msg");
let cartQuantity = document.querySelector(".cart-quantity");
// let productIconBox = document.querySelectorAll(".product-icon");
// let mailInp = document.querySelector("input[type='email']");
// let productIcon = document.querySelectorAll(".fa-heart");
// let newsletterForm = document.querySelector(".newsletter-form");
// let backToTop = document.querySelector(".backToTop");

// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > "400") {
//     backToTop.style.opacity = "1";
//   } else {
//     backToTop.style.opacity = "0";
//   }
// });

// backToTop.addEventListener("click", function () {
//   window.scrollTo(0, 0);
// });

$(document).ready(function () {
  $("#big-img").zoom();
});

smallImgBox.addEventListener("click", changeBigImg);

checkBox.addEventListener("click", function () {
  if (checkBox.getAttribute("checked")) {
    checkBox.removeAttribute("checked");
    buyBtn.style.cursor = "default";
    buyBtn.style.pointerEvents = "none";
  } else {
    checkBox.setAttribute("checked", "checked");
    buyBtn.style.cursor = "pointer";
    buyBtn.style.pointerEvents = "visible";
  }
});

totalPrice.innerText = `Subtotal $${price.innerText}`;

cartBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (parseFloat(numberInp.value) > parseFloat(stock.innerText)) {
    productErrMsg.style.display = "flex";
  } else {
    productErrMsg.style.display = "none";
    stock.innerText = `${
      parseFloat(stock.innerText) - parseFloat(numberInp.value)
    } In Stock`;
    cartQuantity.innerText = `${
      parseFloat(cartQuantity.innerText) + parseFloat(numberInp.value)
    }`;
    numberInp.value = "1";
    totalPrice.innerText = `Subtotal $${price.innerText}`;
  }
});

buyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (parseFloat(numberInp.value) > parseFloat(stock.innerText)) {
    productErrMsg.style.display = "flex";
  } else {
    productErrMsg.style.display = "none";
    stock.innerText = `${
      parseFloat(stock.innerText) - parseFloat(numberInp.value)
    } In Stock`;
    numberInp.value = "1";
    totalPrice.innerText = `Subtotal $${price.innerText}`;
  }
});

numberInp.addEventListener("change", function () {
  totalPrice.innerText = `Subtotal $${(
    parseFloat(numberInp.value) * parseFloat(price.innerText)
  ).toFixed(2)}`;
});

function changeBigImg(e) {
  if (e.target.className === "first-small-img") {
    firstBigImg.style.display = "block";
    secondBigImg.style.display = "none";
    e.target.style.border = "1px solid black";
    e.target.nextElementSibling.style.border = "none";
  } else if ((e.target.className = "second-small-img")) {
    firstBigImg.style.display = "none";
    secondBigImg.style.display = "block";
    e.target.style.border = "1px solid black";
    e.target.previousElementSibling.style.border = "none";
  }
}

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
