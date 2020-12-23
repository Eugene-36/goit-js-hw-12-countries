import refs from "../refs/timer-refs";
//console.log(refs);

let day = `Dec 31 2020`;

function setTime(time) {
  //==============================
  let days = Math.floor(time / 1000 / 60 / 60 / 24);
  let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((time % (1000 * 60)) / 1000);
  return { days, hours, mins, seconds };
}
function reset(...arr) {
  return arr.map((el) => (el.textContent = "00"));
}

function myTimer(date) {
  //============== отрисовка
  let timeBetween = new Date(date) - Date.now();
  let x = setTime(timeBetween);
  //console.log(x);
  refs.days.textContent = x.days;
  refs.hours.textContent = x.hours;
  refs.mins.textContent = x.mins;
  refs.secs.textContent = x.seconds;
}

//! На классе
class Timer {
  constructor(date, obj) {
    this.date = date;
    this.refs = obj;
  }
  count() {
    let x = setTime(new Date(this.date) - Date.now());
    //console.log(x);
    this.refs.days.textContent = x.days;
    this.refs.hours.textContent = x.hours;
    this.refs.mins.textContent = x.mins;
    this.refs.secs.textContent = x.seconds;
  }

  start() {
    setInterval(() => {
      this.count();
    }, 1000);
  }
}
const timer = new Timer(day, refs);
console.log(timer);

timer.start();
