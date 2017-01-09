window.onload = function (){
  var menuButton= document.querySelector('.menu-button');
  var menuLinks= document.querySelector('.menu-links');
  menuButton.addEventListener('click', () => {
    menuLinks.classList.toggle('is-active');
    //console.log(menuLinks);
  });
}
