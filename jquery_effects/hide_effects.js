let counter = 0;
$(document).ready(function () {
  $(".my_class").hide();
  $("#hide").click(function () {
    if (counter == 0) {
      counter = 1;
      $(".hide_show_data").hide("slow", function () {
        alert("sentence hide successfully");
      });
      $(".my_class").show();
    } else {
      alert("hide is already occured");
    }
  });
  $("#show").click(function () {
    if (counter == 1) {
      counter = 0;
      $(".hide_show_data").show("slow", function () {
        alert("sentence shown successfuly");
      });
      $(".my_class").hide();
    } else {
      alert("plz click on hide button first");
    }
  });
});
