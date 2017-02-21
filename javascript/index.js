import _ from 'lodash';
import menu from './modules/menu';
import work from './modules/work';
import { feedScroll } from './modules/feed';
import { pageScroll, preloadImages } from './modules/utils';

window.onload = function() {
  setTimeout(() => scrollTo(0,0), 100);
}

$(document).ready(function (){
  document.getElementById('lightbox') && lightbox();
  menu();

  const isHomepage = location.pathname === "/";
  if (isHomepage) {
    setTimeout(() => scrollTo(0,0), 100);
    $('.title').removeClass('is-active');
    // pageScroll();
    work();
  }

  objectScroll();
  filters();
  feedIndex();
  feedScroll();
  preloadImages();
  screenSaver();

  /* Setup Left Nav Links */
  let currentPage = $('body').attr('data-page');
  $(`#llinks a .menu-text:contains("${currentPage}")`).addClass('active');
});

function objectScroll() {
  var bottoms = document.getElementsByClassName('gallery-bottom');
  var tops = document.getElementsByClassName('object-gallery');
  var textContainers = document.getElementsByClassName('object-text-container');
  $(textContainers[0]).css("visibility", "visible");
  let handlerTop = (i, direction) => {
    $(textContainers).css("visibility", "hidden");
    if (direction === "down") {
      $(textContainers[i]).css("visibility", "visible");
    } else {
      if (i === 0) {
        $(textContainers[i]).css("visibility", "visible");
      } else {
        $(textContainers[i-1]).css("visibility", "visible");
        $(textContainers[i]).css("visibility", "hidden");
      }
    }
  };
  _.forEach(tops, (element, i) => {
    new Waypoint({
      element: element,
      handler: handlerTop.bind(this, i),
      group: 'gallery tops',
    });
  });
}

function lightbox(){
  var projectpics = document.getElementsByClassName('project-images');
  var i;
  var lightbox = document.getElementById('lightbox');
  var lightboxExit = document.getElementById('exit');
  for(var i = 0; i < projectpics.length; i++) {
    projectpics[i].addEventListener("click", function (){
      lightbox.style.opacity = 1;
      lightbox.style.zIndex = 10;
    });
  }
  lightboxExit.addEventListener("click", function (){
    lightbox.style.opacity = 0;
    lightbox.style.zIndex = -10;
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
    var feedlinks = document.querySelector('.feed-links');
    var indexButton = document.querySelector('.index-button');
    var feedGallery = document.querySelector('.feed-gallery');
    var feedIndex = document.querySelector('.feed-index');
    indexButton.addEventListener('click', () => {
      feedIndex.style.display = "block";
      feedGallery.style.display = "none";
      indexButton.style.display = "none";
      window.scrollTo(0,0);
    });
    feedlinks.addEventListener('click', () => {
      feedIndex.style.display = "none";
      feedIndex.style.zIndex = "-100";
      feedGallery.style.zIndex = "100";
      feedGallery.style.display = "block";
      indexButton.style.display = "block";
      window.scrollTo(0,0);
    });
  }
}
function screenSaver(){
  var s_saver;
  $('body').mousemove(function() {
    clearTimeout(s_saver);
    s_saver = setTimeout(function(){
      // $('#screensaver').css('opacity', '1');
      $('#screensaver').css('z-index', '500');
      $('#screensaver').css('display', 'flex');

    }, 120000);
    // $('#screensaver').css('opacity', '0');
    $('#screensaver').css('z-index', '-500');
    $('#screensaver').css('display', 'none');

  });
}
