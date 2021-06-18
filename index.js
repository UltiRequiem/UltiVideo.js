import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');

const button = document.querySelector('#togglePlay');
const muteUnmute = document.querySelector('#unmuteMute');

const player = new MediaPlayer(video, [new AutoPlay()]);

muteUnmute.onclick = () => player.muteUnmute();

button.onclick = () => player.togglePlay();
