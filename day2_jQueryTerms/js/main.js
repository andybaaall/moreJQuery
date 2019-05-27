$('#id');
$('.class');
$('div'); // but this is reallllly bad practice


// add, addClas, append
$( '#pageContainer' ).add( 'p' );
$( "#pageContainer" ).addClass( "myClass myOtherClass" );
$('#demoList').append('<li> this appends to the end of demoList </li><li> this too </li>');

// logging and setting attr
// $('#demoImg').attr('src', 'img2.gif');
console.log($('#demoImg').attr('id'));


// children()
console.log($('#demoList').children());
console.log($('#demoList').children('.odd'));


// .click()


// .clone()
var clonedImage = $('#demoImg').clone();
$('#pageContainer').append(clonedImage);
$(clonedImage).attr('src','img2.gif');
// clones form a 'shallow copy' -- they become a separate entity from the source element
// changes made to the original won't effect the clone, and vice versa

// .css() is for changing CSS, duh

// .data() is useful for working with datasets, duh
console.log($('#pageContainer').data('size'));
console.log($('#pageContainer').data('name'));

// .delay()
// $('#demoList').addClass('red').delay(3000);
// but it's not working? who knows

// .each()
// pretty much the same as a for() loop in vanilla
// this is how we have to loop over JQuery objects; jQuery.fn.init indicates that something was init'd by JQuery
var oddChildren = $('#demoList').children('.odd');
oddChildren.each(function(){
  console.log('loop');
  $(this).text('this is definitely an odd child');
});

// .empty()
// this is for emptying stuff; shocker
// $('#pageContainer').empty();

// .event();
// it's an event listener ; it's triggered by an event
$('#formBtn').click(function(){
  console.log(event);
})
// here it is working with preventDefault, which, amazingly, prevents an element's default behaviour from kicking in
// in this case, it prevents the Submit button from going anywhere
$('#submitBtn').click(function(){
  // event.preventDefault();
});

// .fadeIn()
// .fadeOut()
// .fadeToggle();

// .find()
// it's for if you want to search for a particular child inside of its parent
// imagine if we're looking through a giant, dynamic list, and we're filtering by dataset, or whatever
// ... we could use find() in combination with contains() or hasFoo()
console.log($('#demoList').find('.findMe'));
console.log($('#demoList').find('.findMe.odd')); // find multiple stuff


// first
// if you want to find the first item in a list, without changing its markup in any way, run this bad baby
console.log($('#demoList').find().first());

// focus, blur and change
$('#inputField').focus(function(){
    console.log('this element has focus');
});
$('#inputField').blur(function(){
    console.log('this element is blurred');
});
$('#inputField').change(function(){
    console.log('this has changed');
})


// hasClass()
// what on earth is this bewildering method for
// definitely not returning Booleans

// height()
// remember to use box-sizing : border-box, otherwise we're losing the height of the margin / padding
// ... unless we want to use outerHeight() and innerHeight() I guess?
console.log($('#demoImg').height());
// console.log($('#demoImg').height(1000));
// console.log($('#demoImg').height("600"));

// hide();

// hover ();
// attaches to the hover event
$('#inputField').hover(function(){
  // console.log('got a hover');
})

// .html()
// corresponds to the JS innerHTML property; retrieves it or sets it
// because there's no way to use += with that one, we might think about using append() instead
console.log($('#demoList').html());
// $('#demoList').html('');

// innerHeight();
// ignores border, margin etc.
console.log($('#demoImg').innerHeight());

// keydown() keyup() keypress()
// check out keycode.info
$('#inputField').keydown(function(){
  // console.log(event);
  // console.log('key down')
})
$('#inputField').keyup(function(){
  // console.log(event);
  // console.log('key up')
})
$('#inputField').keypress(function(){
  // console.log(event);
  // console.log('key pressed')
})

// mousedown(), mouseenter() etc
// there are a billion mouse events
// .mouseenter()
// .mouseleave()
// .mousemove()
// .mouseout()
// .mouseover()
// .mouseup();

// parent() and parents()
console.log($('#inputField').parent().find('#demoList').children('.odd').first());
// so here we're selecting the input field, then its parent; we're searching for demo list within that parent, and then the first child 'odd' of that demo list.
//
// console.log($('.odd').first().parent().parent().parent());
// console.log($('.odd').first().parents());
console.log($('.odd').first().parents('#pageContainer').find('input'));

// prepend
$('#demoList').prepend('<li> this prepends to the start of demoList (but do we just say "prepends to the list?" idk)</li><li> this too </li>');

// ready
$(document).ready(function(){
  console.log('document had loaded, and is all good to go, but we\'re logging this last because it\'s right at the bottom of the script');
});
// this is how we might control a loading screen's on and off 'switch'

//removeClass()

//show()
// swaps out display : none; for display : block;

// text()
// corresponds to the JS innerText property
$('.odd').first().text('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
$('.odd').first().text('<ul><li>nested list item</li><li>nested list item</li></ul>');

// toggle()
// toggles through show and hide

// submit()
// triggers when a form is submitted; eg:-
$('#myForm').submit(function(){
  event.preventDefault();
  alert('form has been submitted');
})

$('#myForm').submit(function(){
    event.preventDefault();
    console.log('form has been submitted');
})



// val()
// contains the value of whatever it's attached to
$('#myForm').submit(function(){
    event.preventDefault();
    var value = $('#inputField').val();
    console.log('The value is ' + value);
})
