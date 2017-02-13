import { displayTitle } from './utils';

const menuButtonL = document.getElementById('lbutt');
const menuLinksL  = document.getElementById('llinks');
const menuButtonR = document.getElementById('rbutt');
const menuLinksR  = document.getElementById('rlinks');
const exitButt    = document.querySelector(".exit-button-filter");
const bwImages    = document.querySelectorAll(".bwimage");
const FILL        = "#121212";
const duration    = 200;

/* Left Menu Snap Setup */
var s = Snap('#svg');
var crss = 50;
var crsf = 58;
var cxyss = 75;
var circle_1 = s.circle(cxyss , cxyss , crss);
var bigLine = s.line(135,95,77,64);
var smallLine = s.line(45, 135, 65, 102);
var left = s.group(circle_1, bigLine, smallLine).attr({ fill: "white", stroke: FILL, strokeWidth: 3 });
s.mouseover(() => {
  smallLine.animate({ x1: 0, y1: 120, x2: 33, y2: 131 }, duration);
  circle_1.animate({ r: crsf }, duration);
  bigLine.animate({ x1: 129, y1: 0, x2: 120, y2: 80 }, duration);
});

s.mouseout(() => {
  smallLine.animate({ x1: 45, y1: 135, x2: 65, y2: 102 }, duration);
  circle_1.animate({ r: crss }, duration);
  bigLine.animate({ x1: 135, y1: 95, x2: 77, y2: 64 }, duration);
});

/* Right Menu Snap Setup */
var n, crns, cxyns, circle_2, rightLine, right;
if (menuButtonR) {
  n = Snap('#svg2');
  crns = 35;
  cxyns = 50;
  circle_2 = n.circle(cxyns,cxyns, crns);
  rightLine = n.line(10,2,120,90);
  right = n.group(circle_2, rightLine).attr({ fill: "white", stroke: FILL, strokeWidth: 3 });
  n.mouseover(() => {
    rightLine.animate({ x1: 90, y1: 80, x2: 200, y2: 170 }, duration);
  });
  n.mouseout(() => {
    rightLine.animate({ x1: 10, y1: 2, x2: 120, y2: 90 }, duration);
  });
}

/* Utilities */
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

function scrollRotate() {
  $(document).scroll(function() {
    var divideNumber = Math.PI * 100;
    var theta = $(window).scrollTop() /  divideNumber;
    $('#svg').css({ transform: 'rotate(' + theta + 'rad)' });
    $('#svg2').css({ transform: 'rotate(' + (-theta) + 'rad)' });
  });
}

function toggleObjectFill(bool=true, obj) {
  if (bool) {
    obj.attr({ fill: FILL }, duration);
  } else {
    obj.attr({ fill: "white" }, duration);
  }
}

export default () => {
  /* Setup MenuButtonL */
  menuButtonL.addEventListener('click', () => {
    if (menuLinksL.classList.contains('is-active')) {
      menuLinksL.classList.remove('is-active');
      displayTitle(false);
      toggleObjectFill(false, circle_1)
      removeBW();
      if (menuButtonR){
        toggleObjectFill(false, circle_2)
      }
    } else {
      menuLinksL.classList.add('is-active');
      displayTitle(true);
      toggleObjectFill(true, circle_1)
      addBW();
      if (menuButtonR){
        toggleObjectFill(false, circle_2)
      }
    }
    if (menuButtonR){
      menuLinksR.classList.remove('is-active');
    }
  });

  /* MenuButtonR Isn't always present, setup here */
  if (menuButtonR){
    menuButtonR.addEventListener('click', () => {
      if (menuLinksR.classList.contains('is-active')) {
        menuLinksR.classList.remove('is-active');
        displayTitle(false);
        toggleObjectFill(false, circle_1);
        toggleObjectFill(false, circle_2);
        removeBW();
      } else {
        menuLinksR.classList.add('is-active');
        displayTitle(true);
        toggleObjectFill(false, circle_1);
        toggleObjectFill(true, circle_2);
        addBW();
      }
      menuLinksL.classList.remove('is-active');
    });
  }

  scrollRotate();

  /* If the exit button is on this page, set it up here too */
  if (exitButt){
    exitButt.addEventListener('click', () => {
      menuLinksR.classList.remove('is-active');
      displayTitle(false);
      exitButt.classList.remove('is-active');
   });
  }
};