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
 //form-input
    $("#submit").click(function() {
      var Name= $("#name").val();
      var Email= $("#email").val();
      var Comment= $("comment");
      if (Name === '' || Email=== '') {
        alert("Kindly fill in all your details.");
      }
      else {
        alert("Hello " + Name + "thank you for contacting us.");
      }
    });
//hover effect
  $(".portfolio1").hover(function() {
    $(this).find(".project-black").toggle(400);
  });
});
