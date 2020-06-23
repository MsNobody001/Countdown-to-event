const eventTime = new Date('2020-12-21 18:43:00').getTime();

const spnDays = document.querySelector('span.days');
const spnHours = document.querySelector('span.hours');
const spnMinutes = document.querySelector('span.minutes');
const spnSeconds = document.querySelector('span.seconds');

const timer = () => {
    const nowTime = new Date().getTime();

    const days = Math.floor((eventTime - nowTime) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((eventTime - nowTime) / (1000 * 60 * 60) % 24);
    const minutes = Math.floor((eventTime - nowTime) / (1000 * 60) % 60);
    const seconds = Math.floor((eventTime - nowTime) / 1000 % 60);

    spnDays.textContent = days;
    spnHours.textContent = hours < 10 ? `0${hours}` : hours;
    spnMinutes.textContent = minutes < 10 ? `0${minutes}` : minutes;
    spnSeconds.textContent = seconds < 10 ? `0${seconds}` : seconds;
}

timer();

setInterval(timer, 1000);