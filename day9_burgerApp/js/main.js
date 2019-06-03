// global variables
// -----------------------------------------------------------------------------

var burgerTop = $('#top');
var burgerContents = $('#contents');
var burgerBottom = $('#bottom');

var orderTotal = 0;

// btn functionality

$('button').click(function(){
  var item = $(this).attr('id');
  var img = '<div class="' + item + 'Img">';
  var imgBottom = = '<div class="' + item + 'ImgBottom">';

  if (item === 'white' || item === 'wholemeal' || item === 'rye'){
    burgerTop.empty();
    burgerTop.html(img);
    burgerTop.empty();
    burgerBottom.html(imgBottom);
  } else {
    // do other stuff
  }
})
