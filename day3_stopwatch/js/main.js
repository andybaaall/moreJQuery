$(document).ready(function(){

  var timerContainer = $('#timerContainer');
  var startBtn = $('#startBtn');
  var resetBtn = $('#resetBtn');
  var minutes = 0;
  var seconds10 = 0;
  var seconds1 = 0;
  var startBtnClicked = false;
  var timerCounter;

  timerContainer.html(minutes + ':' + seconds10 + seconds1);

  startBtn.text('start timer');
  startBtn.addClass('btn-secondary');

  resetBtn.hide();

  startBtn.click(function(){

    var minutes = 0;
    var seconds10 = 0;
    var seconds1 = 0;

    if (startBtnClicked === false) {
      startBtn.text('pause timer');
      startBtn.addClass('bg-red');

      timerCounter = setInterval(function(){
        seconds = (seconds1 ++ );

        if(seconds1 === 10){
          seconds ++ ;
          seconds10 ++;
          seconds1 = 0;
        }

        if(seconds10 === 6){
          minutes ++ ;
          seconds10 = 0;
        }

        timerContainer.html(minutes + ':' + seconds10 + seconds1);
      } , 1000);

      startBtnClicked = true;
    } else if (startBtnClicked === true) {

    // console.log('btn clicked = true');
    // console.log(seconds1);
    // console.log(seconds10);
    // console.log(minutes);

    clearInterval(timerCounter);
    startBtn.text('resume timer');
    startBtn.removeClass('bg-red');

    startBtnClicked = false;
    }

    resetBtn.fadeIn(300);
    resetBtn.text('reset timer');
    resetBtn.click(function(){
      clearInterval(timerCounter);
      timerContainer.html(0 + ':' + 0 + 0);

      resetBtn.fadeOut(300);

      startBtn.text('start timer');
      startBtn.removeClass('bg-red');

      startBtnClicked = false;

    })
  }); // startBtn onclick
}); // document ready





// setInterval()
// setTimeout()

// these guys take two parameters - the function to be executed, and the time to elapse before its execution
// setTimeout(function(){
//     myName = 'andy';
//     console.log('this has happened after 5 seconds');
// }, 5000);
// setTimeout(function(){
//     console.log(myName)
//     console.log('this has happened after 6 seconds');
// }, 6000);

// var int = setInterval(function(){
//   console.log('this is happening after 2 seconds');
// }, 2000);
//
// clearTimeout()
// we can't pause and resume an interval counter; we can only clear them
//
// setTimeout(function(){
//   clearTimeout(int);
//   console.log('timeout has been cleared ');
// }, 10000)
