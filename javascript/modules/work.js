export default () => {
  let rightcol = $(".big .right-container");
  let leftcol  = $(".big .left-container");

  leftcol.css("margin-top",  `-${leftcol.height() + $(window).height()*0.1}px`);
  $(document).scroll(function() {
  	leftcol.css('transform', 'translateY('+ $(this).scrollTop() * 1 +'px)');
  });

  const initialRightChildren = rightcol.children();
  const initialLeftChildren = leftcol.children();

  function paginate() {
    let newRightChildren = initialRightChildren.clone();
    $(newRightChildren).appendTo(rightcol);

    new Waypoint({
      element: newRightChildren[0],
      handler: function() {
        console.log('im new handler')

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
