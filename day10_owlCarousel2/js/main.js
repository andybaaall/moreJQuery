$(document).ready(function(){
  $('#carousel1').owlCarousel({
    items: 4,
    margin: 20,
    loop: true
  });

  $('#carousel2').owlCarousel({
    items: 3,
    margin: 15,
    loop: true,
    stagePadding: 100
  });

  $('#carousel3').owlCarousel({
    items: 4,
    margin: 20,
    loop: true,
    merge: true,
    stagePadding: 100
  });

  $('#carousel4').owlCarousel({
    items: 4,
    margin: 20,
    nav: true,
    // but how do you make a nice smooth scrolling animation?
  });
});
