// let icon = document.querySelector("i");
// let siderBar = document.querySelector(".side-bar");

// icon.addEventListener("click", function () {
//   siderBar.style.transition = "all 0.5s";
//   if (siderBar.classList.contains("active")) {
//     siderBar.classList.remove("active");
//     siderBar.style.width = "0px";
//   } else {
//     siderBar.classList.add("active");
//     siderBar.style.width = "300px";
//   }
// });

let searchBtn = document.querySelector(".fa-search");
let closeBtn = document.querySelector(".fa-times");
let searchLink = document.querySelector(".search-link");
let searchDropDown = document.querySelector(".right-dropdown");
let searchInp = document.querySelector("input[type='search']");

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
