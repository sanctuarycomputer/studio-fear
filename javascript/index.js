window.onload = function (){

  var menuButtonR= document.getElementById('rbutt');
  var menuLinksR= document.getElementById('rlinks');
    menuButtonR.addEventListener('click', () => {
    menuLinksR.classList.toggle('is-active');
  });
  var menuButtonL= document.getElementById('lbutt');
  var menuLinksL= document.getElementById('llinks');
    menuButtonL.addEventListener('click', () => {
    menuLinksL.classList.toggle('is-active');
  });

}
