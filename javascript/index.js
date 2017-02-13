import _ from 'lodash';
import menu from './modules/menu';
import work from './modules/work';
import { pageScroll } from './modules/utils';

window.onload = function() {
  setTimeout(() => scrollTo(0,0), 100);
}


$(document).ready(function (){
  document.getElementById('lightbox') && lightbox();
  menu();

  const isHomepage = location.pathname === "/";
  if (isHomepage) {
    $('.title').removeClass('is-active');
    pageScroll();
    work();
  }

  objectScroll();
  filters();
  feedIndex();
  feedScroll();
  screenSaver();
});

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
  const hero = document.getElementById('feed-image');
  const waypoints = document.getElementsByClassName('waypoint');
  let waypointsWithValues = [];
  // process the waypoints to find the bounds
  _.forEach(waypoints, (waypoint) => {
    // make an object {} with all the good info
    let processedWaypoint = {
      imageUrl: waypoint.dataset.image,
      // top of image from the start of the page
      yTop: waypoint.offsetTop,
      // bottom position of waypoint
      yBottom: waypoint.offsetHeight + waypoint.offsetTop,
    };
    // add processedWaypoint object to array
    waypointsWithValues.push(processedWaypoint);
  });
  // every time page is scrolled
  document.addEventListener("scroll", function(event) {
    // get the scroll position from the top of the page
    var scrollPosition = window.pageYOffset;
    // on scroll, look through the array of processed waypoints and use lodash's find
    let selectedWaypoint = _.find(waypointsWithValues, (waypoint) => {
      // return the waypoint that is within the range of the scroll position
      return scrollPosition >= waypoint.yTop && scrollPosition < waypoint.yBottom;
    });
    // if it finds a waypoint in the scroll range
    if (selectedWaypoint) {
      // use the selectedWaypoint to set the background image
      hero.style.backgroundImage = "url("+selectedWaypoint.imageUrl+")";
    }
  });
}
function lightbox(){

  var projectpics = document.getElementsByClassName('project-images');
  var i;
  var lightbox = document.getElementById('lightbox');
  for(var i = 0; i < projectpics.length; i++) {
    projectpics[i].addEventListener("click", function (){
      lightbox.style.opacity = 1;
      lightbox.style.zIndex = 10;
    });
  }
  lightbox.addEventListener("click", function (){
    lightbox.style.opacity = 0;
    lightbox.style.zIndex = 0;

  });
}


function filters() {
  var filterObject = document.getElementsByClassName('individual-filter');
  for(var i = 0; i < filterObject.length; i++) {
    filterObject[i].addEventListener('click', (e) => {
      var filter = e.target.dataset.filter;
      var images = document.querySelectorAll('.image');
      var filteredImages = document.getElementsByClassName(filter);
      for(var i = 0; i < images.length; i++) {
        images[i].style.display = "none";
      }
      for(var i = 0; i < filteredImages.length; i++) {
        filteredImages[i].style.display = "flex";
      }
    });
  }
}

function feedIndex(){
  var feedPage = document.querySelector('.feed-page');
  if (feedPage){
    var indexButton = document.querySelector('.index-button');
    var feedGallery = document.querySelector('.feed-hero-container');
    var feedIndex = document.querySelector('.feed-index');
    indexButton.addEventListener('click', () => {
      feedIndex.style.display = "block";
      feedGallery.style.display = "none";
      indexButton.style.display = "none";
      window.scrollTo(0,0);
    });
  }
}
function screenSaver(){
  var s_saver;
  var idletime = 120000;
  $('body').mousemove(function() {
    clearTimeout(s_saver);
    s_saver = setTimeout(function(){
      $('#screensaver').fadeIn(900);
    }, idletime);
    $('#screensaver').fadeOut(100);
  });
  function textMove(){
    var text = document.getElementsByClassName(".screensaver-stuff");
    var loopNumber = 10;
    for(var i = 0; i < text.length; i++) {
      text.style.top = i + 20 + "px";
    }
  }
}
