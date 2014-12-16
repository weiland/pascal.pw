(function() {
  // i know that there is no raf and i do "animate" left & top instead of using transform
  var
    stateMouseDown = false,
    offset = {x:0, y:0},
    leMe = document.getElementsByClassName('photo')[0];

  leMe.addEventListener ('mousedown' , eleMouseDown , false);
  //leMe.addEventListener ('touchmove' , eleTouchMove , false);

  function eleMouseDown(e) {
    stateMouseDown = true;
    document.addEventListener('mousemove' , eleMouseMove , false);
    e = e || window.event;
    offset.x = e.pageX - leMe.offsetLeft;
    offset.y = e.pageY - leMe.offsetTop;
    pauseEvent(e);
  }

  function eleTouchMove(e) {
    var t = e.targetTouches[0];
    moveMe(t.pageX, t.pageY - offset.y);
    e.preventDefault();
  }

  function eleMouseMove(e) {
    moveMe(e.pageX - offset.x + 100, e.pageY - offset.y - 30);
    document.addEventListener('mouseup' , eleMouseUp , false);
    e = e || window.event;
    pauseEvent(e);
  }

  function moveMe(pX, pY) {
    leMe.style.left = pX + 'px';
    leMe.style.top = pY + 'px';
  }

  function eleMouseUp() {
    document.removeEventListener('mousemove' , eleMouseMove , false);
    document.removeEventListener('mouseup' , eleMouseUp , false);
  }

  function pauseEvent(e){
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    e.cancelBubble=true;
    e.returnValue=false;
    return false;
  }
})();
