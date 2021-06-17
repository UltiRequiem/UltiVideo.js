class MediaPlayer {
  constructor(video) {
    const { el } = video;
    this.element = el;
  }

  play() {
    this.element.play();
  }

  pause() {
    this.element.pause();
  }

  togglePlay() {
    if (this.element.paused) {
      this.play();
    } else {
      this.pause();
    }
  }
}

export default MediaPlayer;
