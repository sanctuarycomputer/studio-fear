import { displayTitle } from './utils';

var menuButtonL = document.getElementById('lbutt');
var menuLinksL  = document.getElementById('llinks');
var menuButtonR = document.getElementById('rbutt');
var menuLinksR  = document.getElementById('rlinks');
var exitButt    = document.querySelector(".exit-button-filter");
var circleR     = document.querySelector(".circleR");
var circleL     = document.querySelector(".circleL");

export default () => {
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
      //  bwImages[i].style.filter = "grayscale(100%)";

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
};
