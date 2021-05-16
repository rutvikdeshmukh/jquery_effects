$(document).ready(function () {
  $(".slide_up_panel").click(function () {
    $("#panel1").slideUp(5000);
  });
  $(".down_panel").click(function () {
    $("#panel1").slideDown(5000);
  });
  $(".stop1").click(function () {
    $("#panel1").stop();
  });
});
