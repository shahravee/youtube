var menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".sidebar");
var Container = document.querySelector(".container");
menuIcon.onclick = function () {
  sideBar.classList.toggle("small-sidebar");
  Container.classList.toggle("large-container");
};
