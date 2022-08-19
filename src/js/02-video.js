import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let localTime = 'videoplayer-current-time';

const functionTime = status => {
  try {
    localStorage.setItem(localTime, status.seconds);
  } catch (error) {
    console.log(error.message);
  }
};

player.on('timeupdate', throttle(functionTime, 1000));

let timeFromStorage = localStorage.getItem(localTime);

if (timeFromStorage === null || timeFromStorage === undefined) {
  player.setCurrentTime(0);
}

player.setCurrentTime(timeFromStorage).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      break;
    default:
      break;
  }
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
