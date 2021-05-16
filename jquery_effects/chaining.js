let color_flag = 0;
$(document).ready(function () {
  $(".chaining").click(function () {
    $("#chaining_para").css("color", "red").slideUp(2000).slideDown(2000);
    color_flag = 1;
  });
  $(".stop_operation").click(function () {
    if (color_flag == 1) {
      color_flag = 0;
      $("#chaining_para").css("color", "black");
    } else {
      alert("plz. click on the start effects first");
    }
  });
});
