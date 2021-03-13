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
let rating = document.querySelectorAll(".rating-star");
let reviewFormBox = document.querySelector(".review-form");
let reviewForm = document.querySelector("#r-form");
let reviewInputs = document.querySelectorAll(".form-control:not(:first-child)");
let mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let mailInp = document.querySelector("input[type='email']");
let reviewTitle = document.querySelector("#title");
let reviewTitleBox = document.querySelector(".review-title");
let writeReview = document.querySelector(".content-action");
let reviewContent = document.querySelector("#review-body");
let customerContent = document.querySelector("#customer-content");
let detailListItem = document.querySelectorAll(".detail-list-item");
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

detailListItem.forEach((item) => {
  let boxItem = document.querySelector(`${item.dataset.target}`);
  let content = document.querySelectorAll(".detail-items");
  if (boxItem.classList.contains("active")) {
    boxItem.style.display = "block";
  }
  item.addEventListener("click", function () {
    content.forEach((item) => {
      item.style.display = "none";
    });
    boxItem.classList.add("active");
    if (boxItem.classList.contains("active")) {
      boxItem.style.display = "block";
    }
  });
});

writeReview.addEventListener("click", function () {
  if (reviewFormBox.style.display === "none") {
    reviewFormBox.style.display = "block";
  } else {
    reviewFormBox.style.display = "none";
  }
});

let errMsg = document.createElement("div");
let mailErrMsg = document.createElement("div");

reviewForm.addEventListener("submit", function (e) {
  e.preventDefault();
  errMsg.className = "error-msg";
  mailErrMsg.className = "invalid-feedback";

  reviewInputs.forEach((item, index) => {
    if (item.value.trim() === "") {
      item.style.borderColor = "#dc3545";
      errMsg.innerHTML = "Not all the fields have been filled out correctly!";
      errMsg.style.display = "block";
      item.parentElement.parentElement.prepend(errMsg);
      item.addEventListener("keydown", function () {
        errMsg.style.display = "none";
        item.style.borderColor = "#28a745";
      });
      item.addEventListener("blur", function () {
        if (item.value === "") {
          item.style.borderColor = "";
        }
      });
    } else if (!mailFormat.test(mailInp.value)) {
      mailErrMsg.innerHTML =
        "Please write the e-mail address in the correct format";
      mailErrMsg.style.display = "block";
      mailInp.style.borderColor = "#dc3545";
      mailInp.parentElement.after(mailErrMsg);
      item.addEventListener("keydown", function () {
        mailErrMsg.style.display = "none";
        item.style.borderColor = "#28a745";
      });
      item.addEventListener("blur", function () {
        if (item.value === "") {
          item.style.borderColor = "";
        }
      });
    } else {
      if (index === 0) {
        let reviewBox = document.createElement("div");
        reviewBox.className = "reviewsBox";
        reviewBox.innerHTML = addReview();
        customerContent.append(reviewBox);
      }
    }
  });
});

function addReview() {
  let today = new Date();

  let reviewDate = today.toDateString();
  return `
    <div class="review-rating">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <div class="review-title">
      <h3 class="title-content">${reviewTitle.value.trim()}</h3>
    </div>
    <div class="review-date">
      <span class="date-content">${reviewDate}</span>
    </div>
    <div class="review-content">
      <p class="content-body">${reviewContent.value.trim()}</p>
    </div>
    <div class="review-footer">
      <a href="#">Report as Inappropriate</a>
    </div>
  `;
}

rating.forEach((item, index) => {
  item.addEventListener("click", function (e) {
    for (let i = 0; i <= index; i++) {
      if (rating[i].className === "fas fa-star rating-star active") {
        item.nextElementSibling.classList.remove("active");
        item.nextElementSibling.style.color = "#787878";
      } else {
        rating[i].classList.add("active");
        rating[i].style.color = "#f3bc48";
      }
    }
  });
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
