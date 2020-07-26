$(document).ready(function() {
  $(".clickable").click(function() {
    $("#design").toggle();
    $("#design-icon").toggle();
  });
  $(".clickable").click(function() {
    $("#development").toggle();
    $("#development-icon").toggle();
  });
  


//hover effect
  $(".portfolio1").hover(function() {
    $(this).find(".project-6lack").toggle(400);
  })
});
