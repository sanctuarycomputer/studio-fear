// import scrollspy from 'scrollspy';
import skrollr from 'skrollr';


window.onload = function (){
  var menuButtonR= document.getElementById('rbutt');
  var menuLinksR= document.getElementById('rlinks');
    menuButtonR.addEventListener('click', () => {
    menuLinksR.classList.toggle('is-active');
  });
  var menuButtonL= document.getElementById('lbutt');
  var menuLinksL= document.getElementById('llinks');
    menuButtonL.addEventListener('click', () => {
    menuLinksL.classList.toggle('is-active');
  });

  var $grid = $('.index-grid').isotope({
    itemSelector: '.index-grid-item',
    layoutMode: 'fitRows',
  });

  $('.filters').on( 'click', function() {
    var filterValue = $( this ).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  addSkrollr();
  // addScrollspy();
}

// const addScrollspy = () => {
//   $('.feed-image').each(function() {
//     var me = this
//     var $me = $(me)
//     console.log(me)
//
//    scrollspy.add(me, {
//      scrollIn: function() {
//        console.log('im here!')
//        $me.addClass('show')
//      },
//      scrollOut: function() {
//        $me.removeClass('show')
//      }
//    })
//  })
// }

const addSkrollr = () => {
  let s = skrollr.init();
}
