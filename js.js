let property1 = document.querySelector('.time1');
let property2 = document.querySelector('.time2');

let start1 = document.querySelector('.start1');
let pause1 = document.querySelector('.pause1')

let start2 = document.querySelector('.start2');
let pause2 = document.querySelector('.pause2')

let alarm = +prompt("Введите значения для таймера");

//timer//

  let timerId1;
  let time1 = alarm * 60;
  if (alarm < 10) {
    property1.textContent = `0${alarm}:00`
  } else {
    property1.textContent = `${alarm}:00`
  }
  
  function makeTime(){
    let minutes1 = Math.floor (time1/60);
    let seconds1 = time1 % 60;

    if (minutes1 < 10 ) {
      minutes1 = '0' + minutes1;
    }
    if (seconds1 < 10 ) {
      seconds1 = '0' + seconds1;
    }
    if (time1 <= 0) {
      clearInterval(timerId1)
  }
    time1--;
    property1.textContent = `${minutes1}:${seconds1}`;
  }
  
  function changeTimer(){
    timerId1 = setInterval(makeTime,1000)
  }

  start1.addEventListener('click', changeTimer);
  pause1.addEventListener('click', function(){
    clearInterval(timerId1)
  })

//stopwatch//

let timerId2;
let seconds2 = 0;
let minutes2 = 0;

function tic () {
  seconds2++;

  if (seconds2 >= 60) {
    minutes2++;
    seconds2 = seconds2 - 60;
}

  if (seconds2 < 10) {
    seconds2 = "0" + seconds2;
  } 
  property2.textContent = `0${minutes2}:${seconds2}`;
  
  if (minutes2 >= 10) {
    property2.textContent = `${minutes2}:${seconds2}`;
  }
}

function changeWatch(){
  timerId2 = setInterval(tic, 1000);
}

start2.addEventListener('click',changeWatch);
pause2.addEventListener('click', function(){
  clearInterval(timerId2)
})