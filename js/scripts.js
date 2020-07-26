$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#design").toggle();
    $("#design-icon").toggle();
  });
  $(".clickable2").click(function() {
    $("#development").toggle();
    $("#development-icon").toggle();
  });
  $(".clickable3").click(function() {
    $("#product-management").toggle();
    $(".product-management-icon").toggle();
  });
    

  


//hover effect
  $(".portfolio1").hover(function() {
    $(this).find(".project-black").toggle(400);
  })
});
