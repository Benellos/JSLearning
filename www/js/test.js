$(function() {
  $("button").click(function(){
    $("p").fadeIn(function(){
      $("button").fadeOut();
    });
  });
  $("p").click(function(){
    $("button").fadeIn(function(){
      $("p").fadeOut();
    });
  });
});
