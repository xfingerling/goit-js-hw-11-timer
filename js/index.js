class CountdownTimer {
  constructor(selector, date) {
    this.selector = selector;
    this.targetDate = new Date(date);
  }

  getTimeRemaining() {
    const time = this.targetDate - new Date();

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return {
      endTime: Math.floor(time / 1000),
      days: days,
      hours: hours,
      mins: mins,
      secs: secs,
    };
  }

  createClock() {
    const clock = document.querySelector(this.selector);

    const daysSpan = clock.querySelector("span[data-value='days']");
    const hoursSpan = clock.querySelector("span[data-value='hours']");
    const minsSpan = clock.querySelector("span[data-value='mins']");
    const secsSpan = clock.querySelector("span[data-value='secs']");

    const updateClock = () => {
      const timeLeft = this.getTimeRemaining();

      daysSpan.innerHTML = timeLeft.days;
      hoursSpan.innerHTML = timeLeft.hours;
      minsSpan.innerHTML = timeLeft.mins;
      secsSpan.innerHTML = timeLeft.secs;

      if (timeLeft.endTime === 0) {
        clearInterval(intervalId);
      }
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);
  }
}

const myTimer = new CountdownTimer("#timer-1", "Feb 25, 2020");

myTimer.createClock();
