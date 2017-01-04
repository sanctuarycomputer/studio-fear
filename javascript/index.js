window.onload = function (){
  var featuredImage = document.querySelectorAll('.index-image');
  var target, targetPanel;
  var i;
  var panel = document.querySelectorAll('.panel');

  for (var i = 0; i < featuredImage.length; i++) {
    target =featuredImage[i];
    targetPanel = panel[i];
    console.log(panel[i], target);
    target.addEventListener("click", function featuredClick(){
      targetPanel.classList.add("active");
      console.log(targetPanel)
  });
  targetPanel.addEventListener("click", function removeClick(){
    targetPanel.classList.remove("active");
    console.log(targetPanel)
  });
  }

}
