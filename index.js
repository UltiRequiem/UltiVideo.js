import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video')
const togglePlay = document.querySelector('#togglePlay')
const toggleMute = document.querySelector('#toggleMute')

const increaseVolumen = document.querySelector('#increaseVolumen')
const decreaseVolumen = document.querySelector('#decreaseVolumen')

const player = new MediaPlayer({ element: video, plugins: [new AutoPlay()] })

toggleMute.onclick = () => player.toggleMute()

togglePlay.onclick = () => player.togglePlay()

increaseVolumen.onclick = () => player.increaseVolumen()
decreaseVolumen.onclick = () => player.decreaseVolumen()
