<div id="clockdiv" style="font-family: sans-serif; color: #fff; width: 100%; display: inline-block; font-weight: 100; text-align: center; font-size: 30px;">
  <div style="display: inline-block;">
    <span class="days" style="padding: 5px; border-radius: 3px; display: inline-block;"></span>
    <div class="smalltext" style="padding-top: 5px; font-size: 12px;">Tage</div>
  </div>
  <div style="display: inline-block;">
    <span class="hours" style="padding: 5px; border-radius: 3px; display: inline-block;"></span>
    <div class="smalltext" style="padding-top: 5px; font-size: 12px;">Stunden</div>
  </div>
  <div style="display: inline-block;">
    <span class="minutes" style="padding: 5px; border-radius: 3px; display: inline-block;"></span>
    <div class="smalltext" style="padding-top: 5px; font-size: 12px;">Minuten</div>
  </div>
  <div style="display: inline-block;">
    <span class="seconds" style="padding: 5px; border-radius: 3px; display: inline-block;"></span>
    <div class="smalltext" style="padding-top: 5px; font-size: 12px;">Sekunden</div>
  </div>
</div>
<script type="text/javascript">
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var timeInMinutes = 10;
var currentTime = Date.parse(new Date());
var deadline = new Date(currentTime + timeInMinutes*60*1000);
initializeClock('clockdiv', deadline);
</script>
