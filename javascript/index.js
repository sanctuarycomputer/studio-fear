import _ from 'lodash';
import skrollr from 'skrollr';

//import Waypoint from 'waypoints';

window.onload = function (){
  var menuButtonL= document.getElementById('lbutt');
  var menuLinksL= document.getElementById('llinks');
    menuButtonL.addEventListener('click', () => {
    menuLinksL.classList.toggle('is-active');
  });
  var menuButtonR= document.getElementById('rbutt');
  var menuLinksR= document.getElementById('rlinks');
  if (menuButtonR){
    menuButtonR.addEventListener('click', () => {
      menuLinksR.classList.toggle('is-active');
    });
  }
  var $grid = $('.index-grid').isotope({
    itemSelector: '.index-grid-item',
    layoutMode: 'fitRows',
  });

  $('.filters').on( 'click', function() {
    var filterValue = $( this ).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  feedScroll();
  objectScroll();
  addSkrollr();
}
const addSkrollr = () => {
 let s = skrollr.init();
}
function objectScroll() {
  var bottoms = document.getElementsByClassName('gallery-bottom');
  var tops = document.getElementsByClassName('object-gallery');
  var textContainers = document.getElementsByClassName('object-text-container');
  $(textContainers[0]).css("visibility", "visible");
  let handler = (i, direction) => {
    let status = direction === "down" ? "hidden" : "visible";
    $(textContainers[i]).css("visibility",status);
  };
  _.forEach(bottoms, (element, i) => {
    new Waypoint({
      element: element,
      handler: handler.bind(this, i),
      offset: '25%',
      group: 'gallery bottoms',
    });
  });
  let handlerTop = (i, direction) => {
    let status = direction === "up" ? "hidden" : "visible";
    $(textContainers[i]).css("visibility",status);
  };
  _.forEach(tops, (element, i) => {
    new Waypoint({
      element: element,
      handler: handlerTop.bind(this, i),
      offset: '25%',
      group: 'gallery tops',
    });
  });
}
function feedScroll() {
  var bottoms = document.getElementsByClassName('image-bottom');
  var images = document.getElementsByClassName('feed-image');
  $(images[0]).css("visibility", "visible");
  let handler = (i, direction) => {
    let status = direction === "down" ? "hidden" : "visible";
    $(images[i]).css("visibility",status);
  };
  _.forEach(bottoms, (element, i) => {
    new Waypoint({
      element: element,
      handler: handler.bind(this, i),
      offset: '0%',
      group: 'image bottoms',
    });
  });
}
