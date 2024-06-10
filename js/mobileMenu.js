let bgMobile = document.querySelector(".bgMobile");
let menuMobile = document.querySelector(".menuMobile");
let mobileAcardeon = document.querySelector(".mobileAcardeon");
let downAcardeon = document.querySelector(".downAcardeon");
let menuCover = document.querySelector(".menuCover");
console.log(menuCover);
let flag = 0;
function mobileNavbar() {
  menuMobile.addEventListener("click", function () {
    if (flag % 2 === 0) {
      bgMobile.style.display = "none";
      mobileAcardeon.style.right = "0";
      menuCover.style.display = "block";
    } else {
      bgMobile.style.display = "block";
      mobileAcardeon.style.right = "-200%";
      menuCover.style.display = "none";
    }

    mobileAcardeon.style.transition = "200ms";
    flag++;
  });
}
mobileNavbar();
function hoverFuncion() {
  $(".Title").on("mouseenter", function () {
    $(".subMenu").fadeIn(300);
    $(".subMenu").css({
      display: "flex",
    });
  });
  $(".Title").on("mouseleave", function () {
    $(".subMenu").fadeOut(300);
  });
  $(".Title2").on("mouseenter", function () {
    $(".subMenu-2").fadeIn(300);
    $(".subMenu-2").css({
      display: "flex",
    });
  });
  $(".Title2").on("mouseleave", function () {
    $(".subMenu-2").fadeOut(300);
  });
}
hoverFuncion();
export default {
  bgMobile,
  menuMobile,
  mobileAcardeon,
  downAcardeon,
  hoverFuncion,
};
