import skrollr from 'skrollr';
import _ from 'lodash';
//import Waypoint from 'waypoints';

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

  var bottoms = document.getElementsByClassName('gallery-bottom');
  var textContainers = document.getElementsByClassName('object-text-container');
  let handler = (i, direction) => {
    let status = direction === "down" ? "hidden" : "visible";
    $(textContainers[i]).css("visibility",status);
    //$(textContainers[i]).css("background-color","white");
  };
  _.forEach(bottoms, (element, i) => {
    new Waypoint({
      element: element,
      handler: handler.bind(this, i),
      offset: 'bottom-in-view',
      group: 'gallery bottoms',
    });
  });

  addSkrollr();
}
const addSkrollr = () => {
  let s = skrollr.init();
}
