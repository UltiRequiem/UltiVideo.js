import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const toggePlay = document.querySelector('#toggePlay');
const muteUnmute = document.querySelector('#unmuteMute');

const player = new MediaPlayer(video, [new AutoPlay()]);

toggePlay.onclick = () => player.togglePlay();
muteUnmute.onclick = () => player.muteUnmute();
