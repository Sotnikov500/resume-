$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__nav,.header__top-language").toggleClass(
      "active"
    );
    $("body").toggleClass("lock");
  });
});
$(document).ready(function () {
  $(".header__link").click(function (event) {
    $(".header__burger,.header__nav,.header__top-language").removeClass(
      "active"
    );
    $("body").removeClass("lock");
  });
});
// $('.header__burger').toggleClass('active')
