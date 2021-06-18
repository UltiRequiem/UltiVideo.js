class MediaPlayer {
  constructor(config) {
    this.player = config.element;
    this.plugins = config.plugins || [];
    this.initPlugins();
  }

  initPlugins() {
    this.plugins.forEach((item) => item.run(this));
  }

  play() {
    this.player.play();
  }

  mute() {
    this.player.muted = true;
  }

  decreaseVolumen() {
    if (this.player.volume <= 0.1) return;
    this.player.volume -= 0.1;
  }

  increaseVolumen() {
    if (this.player.volume === 1) return;
    this.player.volume += 0.1;
  }

  pause() {
    this.player.pause();
  }

  muteUnmute() {
    if (this.player.muted) {
      this.player.muted = false;
    } else {
      this.player.muted = true;
    }
  }

  togglePlay() {
    this.player.paused ? this.play() : this.pause();
  }
}

export default MediaPlayer;
