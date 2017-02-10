import _ from 'lodash';
//import Waypoint from 'waypoints';
$(document).ready(function (){
  document.getElementById('lightbox') && lightbox();

  objectScroll();
  workAnimation();
  filters();
  feedIndex();
  feedScroll();
  screenSaver();
  menu();

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
  var leftContainerHeight = imageNumber * (-100);
  leftcol.css("margin-top",  `${leftContainerHeight}vh`);
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
var circleR = document.querySelector(".circleR");
var circleL = document.querySelector(".circleL");
function menu(){
  menuButtonL.addEventListener('click', () => {
    if (menuLinksL.classList.contains('is-active')) {
      menuLinksL.classList.remove('is-active');
      displayTitle(false);
      orangeleft(false);
      orangeright(false);
      removeBW();
    } else {
      menuLinksL.classList.add('is-active');
      displayTitle(true);
      orangeleft(true);
      orangeright(false);
      addBW();
    }
    menuLinksR.classList.remove('is-active');
  });
  if (menuButtonR){
    menuButtonR.addEventListener('click', () => {
      if (menuLinksR.classList.contains('is-active')) {
        menuLinksR.classList.remove('is-active');
        displayTitle(false);
        orangeright(false);
        orangeleft(false);
        removeBW();
      } else {
        menuLinksR.classList.add('is-active');
        displayTitle(true);
        orangeright(true);
        orangeleft(false);
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
      $('#svg').css({ transform: 'rotate(' + theta + 'rad)' });
      $('#svg2').css({ transform: 'rotate(' + (-theta) + 'rad)' });
    });
  }
  if (exitButt){
    exitButt.addEventListener('click', () => {
      menuLinksR.classList.remove('is-active');
      displayTitle(false);
      exitButt.classList.remove('is-active');
   });
  }
  // navigationAnimation();
  // function navigationAnimation(){
    var s = Snap('#svg');
    var crss = 50;
    var crsf = 58;
    var cxyss = 75;
    var circle_1 = s.circle(cxyss , cxyss , crss);
    var bigLine = s.line(135,95,77,64);
    var smallLine = s.line(45, 135, 65, 102);
    var duration = 200;

    var left = s.group(circle_1, bigLine, smallLine).attr({
        fill: "white",
        stroke: "orange",
        strokeWidth: 3
    });
    s.mouseover(
      function mouseOverLeft(){
        smallLine.animate({
          x1: 0,
          y1: 120,
          x2: 33,
          y2: 131,
        }, duration);
        circle_1.animate({
          r: crsf,
        }, duration);
        bigLine.animate({
          x1: 129,
          y1: 0,
          x2: 120,
          y2: 80,
        }, duration);
      },
    );
    s.mouseout(
      function mouseOutLeft(){
        smallLine.animate({
          x1: 45,
          y1: 135,
          x2: 65,
          y2: 102,
        }, duration);
        circle_1.animate({
          r: crss,
        }, duration);
        bigLine.animate({
          x1: 135,
          y1: 95,
          x2: 77,
          y2: 64,
        }, duration);
      },
    );
    function orangeleft(bool=true) {
        if (bool) {
          circle_1.attr({
            fill: "orange",
          }, duration);
        } else {
          circle_1.attr({
            fill: "white",
          }, duration);
        }
    }
    var n = Snap('#svg2');
    var crns = 35;
    var cxyns = 50;
    var circle_2 = n.circle(cxyns,cxyns, crns);
    var rightLine = n.line(10,2,120,90);
    var right = n.group(circle_2, rightLine).attr({
        fill: "white",
        stroke: "orange",
        strokeWidth: 3
    });
    n.mouseover(
      function (){
      rightLine.animate({
          x1: 90,
          y1: 80,
          x2: 200,
          y2: 170,
        }, duration);
      },
    );
    n.mouseout(
       function (){
      rightLine.animate({
          x1: 10,
          y1: 2,
          x2: 120,
          y2: 90,
        }, duration);
      },
    );
    function orangeright(bool=true) {
        if (bool) {
          circle_2.attr({
            fill: "orange",
          }, duration);

        } else {
          circle_2.attr({
            fill: "white",
          }, duration);
        }
    }
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
