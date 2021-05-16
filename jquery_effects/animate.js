$(document).ready(function () {
  $(".animate").click(function () {
    $(".animate_div").animate({ left: "250px" });
  });
  $(".reset_animate").click(function () {
    $(".animate_div").animate({ left: "1px" });
  });
});
