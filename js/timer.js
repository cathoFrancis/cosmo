const endTime = '2022-01-01';

function getTimeRemaining(et) {
   const t = Date.parse(et) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60) % 24)),
      minuts = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);
   return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minuts,
      'seconds': seconds
   };
}

function getZero(num) {
   if (num >= 0 && num < 10) {
      return `0${num}`;
   } else {
      return num;
   }
}

function setClock(selector, et) {
   const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);

   updateClock();
   function updateClock() {
      const t = getTimeRemaining(et);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
         clearInterval(timeInterval);
      }
   }
}
setClock('.timer', endTime);