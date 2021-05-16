$(document).ready(function () {
  $(".slide_down_panel").click(function () {
    $("#panel").slideDown(5000);
  });
  $(".up_panel").click(function () {
    $("#panel").slideUp(2000);
  });
  $(".stop").click(function () {
    $("#panel").stop();
  });
});
