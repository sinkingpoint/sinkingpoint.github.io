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
});
