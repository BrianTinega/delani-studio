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
  $(".portfolio2").hover(function() {
    $(this).find(".mighty-ontario").toggle(400);
  });
  $(".portfolio3").hover(function() {
    $(this).find(".yellow-sand").toggle(400);
  });
  $(".portfolio4").hover(function() {
    $(this).find(".brave-mask-project").toggle(400);
  });
  $(".portfolio5").hover(function() {
    $(this).find(".project-elena").toggle(400);
  });
  $(".portfolio6").hover(function() {
    $(this).find(".calculator-project").toggle(400);
  });
  $(".portfolio7").hover(function() {
    $(this).find(".the-burned-project").toggle(400);
  });
  $(".portfolio8").hover(function() {
    $(this).find(".project-twiga").toggle(400);
  });
});
