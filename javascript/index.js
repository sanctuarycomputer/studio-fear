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

  var $grid = $('.index-grid').isotope({
    itemSelector: '.index-grid-item',
    layoutMode: 'fitRows',
  });

  $('.filters').on( 'click', function() {
    var filterValue = $( this ).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

}
