let $ = document,
  mainNav = $.querySelector("#mainNav"),
  logoImg = $.querySelector("img");
document.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop != 0) {
    mainNav.classList.add("bg-black", "txt-white");
    logoImg.style.height = "45px";
  } else {
    mainNav.classList.remove("bg-black", "txt-white");
    logoImg.style.height = "84px";
  }
});
