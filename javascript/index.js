import _ from 'lodash';
//import Waypoint from 'waypoints';
$(document).ready(function (){
  document.getElementById('lightbox') && lightbox();

  objectScroll();
  workAnimation();
  menu();
  filters();
  feedIndex();
  feedScroll();
})
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
      console.log("hi");
    });
  }
  lightbox.addEventListener("click", function (){
    lightbox.style.opacity = 0;
    lightbox.style.zIndex = 0;
  });
}
function workAnimation(){
  var leftcol = $(".left-container");
  var imageNumber = leftcol.children().length;
  var leftContainerHeight = imageNumber * (-150) ;
  leftcol.css("margin-top",  `${leftContainerHeight}vh`);
  //var last = $(".right-container").children().last();
  //console.log(last);
  $(document).scroll(function(){
  	leftcol.css('transform', 'translateY('+ $(this).scrollTop() * 1 +'px)');
  });
}
var title = document.querySelector(".title");

function displayTitle(bool=true) {
  if (title){
    if (bool) {
      title.classList.add('is-active');
    } else {
      title.classList.remove('is-active');
    }
  }
}
var menuButtonL= document.getElementById('lbutt');
var menuLinksL= document.getElementById('llinks');
var menuButtonR= document.getElementById('rbutt');
var menuLinksR= document.getElementById('rlinks');
var exitButt = document.querySelector(".exit-button-filter");
function menu(){
  menuButtonL.addEventListener('click', () => {
    // menuLinksL.classList.toggle('is-active');
    if (menuLinksL.classList.contains('is-active')) {
      menuLinksL.classList.remove('is-active');
      displayTitle(false);
      removeBW();
    } else {
      menuLinksL.classList.add('is-active');
      displayTitle(true);
      addBW();
    }
    menuLinksR.classList.remove('is-active');
  });
  if (menuButtonR){
    menuButtonR.addEventListener('click', () => {
      // menuLinksL.classList.toggle('is-active');
      if (menuLinksR.classList.contains('is-active')) {
        menuLinksR.classList.remove('is-active');
        exitButt.classList.remove('is-active');
        displayTitle(false);
        removeBW();
      } else {
        menuLinksR.classList.add('is-active');
        exitButt.classList.add('is-active');
        displayTitle(true);
        addBW();
      }
      menuLinksL.classList.remove('is-active');
    });
  }
  var bwImages = document.querySelectorAll(".bwimage");
  function removeBW() {
    for(var i = 0; i < bwImages.length; i++) {
        bwImages[i].classList.remove('black-and-white');
    }
  }
  function addBW() {
    for(var i = 0; i < bwImages.length; i++) {
        bwImages[i].classList.add('black-and-white');
    }
  }
  scrollRotate();
  function scrollRotate(){
    $(document).scroll(function() {
      var divideNumber = Math.PI * 100;
      var theta = $(window).scrollTop() /  divideNumber;
      $('svg').css({ transform: 'rotate(' + theta + 'rad)' });
    });
  }
  // var images =document.querySelectorAll('.image');
  // for(var i = 0; i < images.length; i++) {
  if (exitButt){
    exitButt.addEventListener('click', () => {
  //     images[i].classList.remove('filter');
      menuLinksR.classList.remove('is-active');
      displayTitle(false);
      exitButt.classList.remove('is-active');
   });
  }
}
function filters() {
  var filterObject = document.getElementsByClassName('individual-filter');
  for(var i = 0; i < filterObject.length; i++) {
    filterObject[i].addEventListener('click', (e) => {
    //  window.scrollTo(0, 0);
      var filter = e.target.dataset.filter;
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
    });
  }
}
