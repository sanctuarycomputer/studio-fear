export default () => {
  let rightcol = $(".double-columns.big .right-container");
  let leftcol  = $(".double-columns.big .left-container");

  leftcol.css("margin-top",  `-${leftcol.height() + $(window).height()*0.1}px`);

  $('.title').removeClass('is-active');

  let scroll = window.requestAnimationFrame ||
               window.webkitRequestAnimationFrame ||
               window.mozRequestAnimationFrame ||
               window.msRequestAnimationFrame ||
               window.oRequestAnimationFrame ||
               // IE Fallback, you can even fallback to onscroll
               function(callback){ window.setTimeout(callback, 1000/60) };

  function loop() {
  	leftcol.css('transform', 'translateY('+ $(document).scrollTop() * 1 +'px) translateZ(0)');
    scroll(loop);
  }
  loop();

  rightcol.removeClass('is-loading');
  leftcol.removeClass('is-loading');
  $('body').css({ overflow: 'auto' });

  const initialRightChildren = rightcol.children();
  const initialLeftChildren = leftcol.children();

  function paginate() {
    let newRightChildren = initialRightChildren.clone();
    $(newRightChildren).appendTo(rightcol);

    new Waypoint({
      element: newRightChildren[0],
      handler: function() {
        this.destroy();
        paginate();
      }
    });

    let newLeftChildren = initialLeftChildren.clone();
    $(newLeftChildren).appendTo(leftcol);
    leftcol.css("margin-top",  `-${leftcol.height() + $(window).height()*0.1}px`);
  }

  new Waypoint({
    element: initialRightChildren[0],
    handler: function() {
      this.destroy();
      paginate();
    }
  });
}
