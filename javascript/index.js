import _ from 'lodash';
import menu from './modules/menu';
import work from './modules/work';
import { feedScroll } from './modules/feed';
import { pageScroll, preloadImages } from './modules/utils';
import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './views/feed/Feed';

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
  feedScroll();
  preloadImages();
  screenSaver();
  reactFeedInitialize();

  /* Setup Left Nav Links */
  let currentPage = $('body').attr('data-page');
  $(`#llinks a .menu-text:contains("${currentPage}")`).addClass('active');
});

const reactFeedInitialize = () => {
  const feedElement = document.getElementById('react-feed');
  if (feedElement) {
    ReactDOM.render(<Feed images={JSON.parse(feedElement.dataset.images)} />, feedElement);
  }
};

const objectScroll = () => {
  var bottoms = document.getElementsByClassName('gallery-bottom');
  var tops = document.getElementsByClassName('object-gallery');
  var textContainers = document.getElementsByClassName('object-text-container');
  let title = document.getElementById('static-title');
  let titleMobile = document.getElementById('static-title-mobile');
  let text = document.getElementById('static-text');
  $(textContainers[0]).css("visibility", "visible");
  let handlerTop = (i, data, direction) => {
    // title.innerHTML = data.title;
    // text.innerHTML = data.text;
    // titleMobile.innerHTML = data.text;
    if (direction === "down") {
      title.innerHTML = data.title;
      text.innerHTML = data.text;
      titleMobile.innerHTML = data.text;
    }
  };
  _.forEach(tops, (element, i) => {
    new Waypoint({
      element: element,
      handler: handlerTop.bind(this, i, element.dataset),
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
  linkFunctions();
  function linkFunctions(){
    for(var i = 0; i < filterObject.length; i++) {
      filterObject[i].addEventListener('click', (e) => {
        let clickedItemIsCurrentlyActive = e.target.classList.contains('active');
        linkState(e.target, clickedItemIsCurrentlyActive);

        let currentlyActiveFilters = $(e.target).parent().children('.active').map((i, e) => e.dataset.filter);
        var filter = e.target.dataset.filter;
        var images = document.querySelectorAll('.content-container');
        for (let i = 0; i < images.length; i++) {
          let image = images[i];
          if (currentlyActiveFilters.length === 0) {
            image.style.display = "flex";
          } else {
            let imageConsideredActive = _.some(currentlyActiveFilters, c => image.classList.contains(c));
            if (imageConsideredActive){
              image.style.display = "flex";
            } else {
              image.style.display = "none";
            }
          }
        }
      });
    }
  }
  function linkState(clicked, forceOff=false){
    for(var i = 0; i < filterObject.length; i++) {
      filterObject[i].classList.remove('active');
    }
    if (!forceOff) {
      clicked.classList.add('active');
    }
  }
}

function screenSaver(){
  let s_saver;
  let $mq = $('.marquee');
  $('body').mousemove(function() {
    clearTimeout(s_saver);
    s_saver = setTimeout(function(){
      displayMq();
    }, 120000);
    destroyMq();
  });

  function destroyMq() {
    $mq.marquee('destroy');
    $('#screensaver').css('display', 'none');
  }
  function displayMq() {
    $('#screensaver').css('display', 'block');
    $('.marquee').marquee({
      duplicated: true,
      delayBeforeStart: 0
    });
  }
}
