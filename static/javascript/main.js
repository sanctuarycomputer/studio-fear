(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

window.onload = function () {
  var featuredImages = document.querySelectorAll('.index-image');
  var panels = document.querySelectorAll('.panel');
  var projectTitle = document.querySelectorAll('.project-title');
  var menuButton = document.querySelector('.menu-button');
  var menuLinks = document.querySelector('.menu-links');

  featuredImages.forEach(function (image) {
    image.addEventListener('click', function () {
      document.getElementById('panel-' + image.dataset.panel).classList.add('active-panel');
    });
  });
  projectTitle.forEach(function (title) {
    title.addEventListener('click', function () {
      title.parentNode.classList.remove('active-panel');
    });
  });
  menuButton.addEventListener('click', function () {
    menuLinks.classList.toggle('is-active');
    //console.log(menuLinks);
  });
};

},{}]},{},[1]);
