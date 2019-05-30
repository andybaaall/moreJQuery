$(document).ready(function(){

  var slideContainer = $('.slideContainer');

  $('#next').click(function(){
    var firstSlide = $('.slide').first();
    // first() - gets the first element from a set, defined in a DOM object (here, '.slide').
    //         - then it stores that first matching element as a JQuery objec that we can use later.

    // clone approach ---------------------
    // ------------------------------------
    // var clonedSlide = firstSlide.clone();
    // var clonedSlide = firstSlide.clone();
    // firstSlide.remove();
    // slideContainer.append(clonedSlide);

    // just plain old append() approach ---------------------
    // ------------------------------------------------------
    slideContainer.append(firstSlide);
    // we can just use append() on its own, though, because append removes the
    // object being appended from its original DOM position
    slideContainer.css('transform' , 'translateX(0)');

  });

  setInterval(function(){
    slideContainer.addClass('transition').css('transform' , 'translateX(-1000px)');

    setTimeout(function(){
      var firstSlide = $('.slide').first();
      slideContainer.append(firstSlide);
      slideContainer.removeClass('transition').css('transform' , 'translateX(0)');
   }, 700);
  }, 3000);

  // var slideContainer = $('.slideContainer');
  // setInterval(function(){
  //
  //     slideContainer.addClass('transition').css('transform', 'translateX(-1000px)');
  //
  //     setTimeout(function(){
  //         var firstSlide = $('.slide').first();
  //         slideContainer.append(firstSlide);
  //         slideContainer.removeClass('transition').css('transform', 'translateX(0)');
  //     }, 700)
  // }, 3000)



});
