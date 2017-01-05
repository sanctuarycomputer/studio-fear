window.onload = function (){
  var featuredImages = document.querySelectorAll('.index-image');
  var panels = document.querySelectorAll('.panel');

  featuredImages.forEach(image => {
    image.addEventListener('click', () => {
      document.getElementById(`panel-${image.dataset.panel}`).classList.add('active-panel');
    });
  });

  panels.forEach(panel => {
    panel.addEventListener('click', () => {
      panel.classList.remove('active-panel');
    });
  });
}
