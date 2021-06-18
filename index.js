import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');

const togglePlay = document.querySelector('#togglePlay');
const muteUnmute = document.querySelector('#unmuteMute');

const increaseVolumen = document.querySelector('#increaseVolumen');
const decreaseVolumen = document.querySelector('#decreaseVolumen');

const player = new MediaPlayer(video, [new AutoPlay()]);

muteUnmute.onclick = () => player.muteUnmute();

togglePlay.onclick = () => player.togglePlay();

increaseVolumen.onclick = () => player.increaseVolumen();
decreaseVolumen.onclick = () => player.decreaseVolumen();
