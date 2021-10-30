import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframePlayer = document.querySelector('iframe');
const player = new Player(iframePlayer);
const localStorageKey = 'videoplayer-current-time';

function onTimeUpDate(evt) {
  localStorage.setItem(localStorageKey, evt.seconds);
}
const saveTime = localStorage.getItem(localStorageKey);
console.log(saveTime);
if (saveTime) {
  player.setCurrentTime(saveTime);
}
player.on('timeupdate', throttle(onTimeUpDate, 1000));
