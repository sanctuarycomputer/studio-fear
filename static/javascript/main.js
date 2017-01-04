(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

window.onload = function () {
  var featuredImage = document.querySelectorAll('.index-image');
  var target, targetPanel;
  var i;
  var panel = document.querySelectorAll('.panel');

  for (var i = 0; i < featuredImage.length; i++) {
    target = featuredImage[i];
    targetPanel = panel[i];
    console.log(panel[i], target);
    target.addEventListener("click", function featuredClick() {
      targetPanel.classList.add("active");
      console.log(targetPanel);
    });
    targetPanel.addEventListener("click", function removeClick() {
      targetPanel.classList.remove("active");
      console.log(targetPanel);
    });
  }
};

},{}]},{},[1]);
