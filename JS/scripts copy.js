$(document).ready(function() {
    $("h1").click(function() {
      alert("This is a header.");
    });
  
    $("p").click(function() {
      alert("This is a paragraph.");
    });
  
    $("img").click(function() {
      alert("This is an image.");
    });
  });
  $(document).ready(function() {
    $("p").click(function() {
      $(".Walnar-showing").show();
    });
  });
  $(document).ready(function() {
    $(".clickable").click(function() {
      $(".walnar-showing").toggle();
      $(".walnar-hidden").toggle();
    });
  });