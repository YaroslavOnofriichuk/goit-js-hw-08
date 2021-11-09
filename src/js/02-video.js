import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(saveVideoCurrentTime, 1000));

function saveVideoCurrentTime (e) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(e.seconds));
};

if (localStorage.getItem("videoplayer-current-time") === null) {
    return;
}
    try {
        player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
    } catch (err) {
        console.log("error");
    };