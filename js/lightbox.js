document.addEventListener("DOMContentLoaded", function(event) {
  const project_links = document.querySelectorAll('.project-link');
  const lightbox_bg = document.querySelector('.lightbox-bg');
  const lightbox = document.querySelector('.lightbox');

  project_links.forEach(v => {
    return v.addEventListener('click', function() {
      lightbox_bg.style.display = 'block';
      lightbox.innerHTML = v.querySelector('.lightbox-content').innerHTML;
    })
  });

  lightbox.addEventListener('click', function(event) {
    event.stopPropagation();
  });

  lightbox_bg.addEventListener('click', function() {
    lightbox_bg.style.display = 'none';
  });

  document.addEventListener('keyup', function(event) {
    if(event.key === "Escape") {
      lightbox_bg.style.display = 'none';
    }
  });
});
