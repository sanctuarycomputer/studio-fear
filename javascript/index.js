window.onload = function (){
  var featuredImages = document.querySelectorAll('.index-image');
  var panels = document.querySelectorAll('.panel');
  var projectTitle = document.querySelectorAll('.project-title');
  var menuButton= document.querySelector('.menu-button');
  var menuLinks= document.querySelector('.menu-links');

  featuredImages.forEach(image => {
    image.addEventListener('click', () => {
      document.getElementById(`panel-${image.dataset.panel}`).classList.add('active-panel');
    });
  });
  projectTitle.forEach(title => {
    title.addEventListener('click', () => {
      title.parentNode.classList.remove('active-panel');
  //    panel.classList.remove('active-panel');
    });
  });
  menuButton.addEventListener('click', () => {
      menuLinks.classList.toggle('is-active');
      console.log(menuLinks);
  });
}
