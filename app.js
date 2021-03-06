let clock = document.getElementById('clock');
let end = document.getElementById('end');

let now = new Date();
let monthDayYear = getMonth(now.getMonth()) + ' ' + now.getDate() + ', ' + now.getFullYear();

let regexAMPM = /^((1[0-2]|0?[1-9]):([0-5][0-9]) ([AaPp][Mm]))$/;
let regex24 = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])$/;

let timer = null;
end.addEventListener('input', handleEndChange);

let endTime = localStorage.getItem('end');

if (endTime) {
  end.innerText = endTime;
  (handleEndChange.bind(end))();
}
else {
  (resetDisplay.bind(clock))(false);
  clearInterval(timer);
}

// Functions

function handleEndChange() {
  
  if (regexAMPM.test(this.innerText) || regex24.test(this.innerText)) {
    localStorage.setItem('end', this.innerText);
    (resetDisplay.bind(clock))(true);
    timer = createTimer(this.innerText);
  }
  else {
    (resetDisplay.bind(clock))(false);
  }
}

function resetDisplay(show) {
  clearInterval(timer);
  this.innerText = '--:--:--';
  if (show)
    this.hidden = false;
  else
    this.hidden = true;
}

function getMonth(num) {
  switch(num) {
    case 0:{return "Jan";} case 1:{return "Feb";}
    case 2:{return "Mar";} case 3:{return "Apr";}
    case 4:{return "May";} case 5:{return "Jun";}
    case 6:{return "Jul";} case 7:{return "Aug";}
    case 8:{return "Sep";} case 9:{return "Oct";}
    case 10:{return "Nov";} case 11:{return "Dec";}
    default:{return false;}
  }
}

function getTimeRemaining(later) {
  let diff = Math.floor((later - new Date()) / 1000);
  if (diff < 0) {
    diff += 86400;
  }
  else if (diff == 0) {
    clearInterval(timer);
  }
  
  let h = Math.floor(diff / 60 / 60);
  let m = Math.floor((diff / 60) % 60);
  let s = diff % 60;
  return {
    hours: String(h < 10 ? '0' + h + ':': h + ':'),
    minutes: String(m < 10 ? '0' + m : m),
    seconds: String(s < 10 ? ':0' + s : ':' + s)
  }
}

function renderDate(later) {
  let date = new Date();
  let now = date.valueOf();
  let diff = getTimeRemaining(new Date(monthDayYear + ' ' + later));
  let output = diff.hours + diff.minutes + diff.seconds;
  clock.innerHTML = output;
}

function createTimer(later) {
  return setInterval(function() {
    renderDate(later);
  }, 1000)
}
