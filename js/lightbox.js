$(document).ready(function(){
  $(".project-link").click(function(){
    $(".lightbox-bg").css('display', 'block');
    $(".lightbox").html($(this).children('.lightbox-content').html());
  });

  $(".lightbox").click(function(e){
    e.stopPropagation()
  })

  $(".lightbox-bg").click(function(){
    $(".lightbox-bg").css('display', 'none');
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`
      $(".lightbox-bg").css('display', 'none');
    }
  });
});
