class MediaPlayer {
  constructor(video, plugins) {
    this.player = video;
    this.plugins = plugins || [];
    this._initPlugins();
  }

  _initPlugins() {
    this.plugins.forEach((item) => item.run(this));
  }

  play() {
    this.player.play();
  }

  mute() {
    this.player.muted = true;
  }

  pause() {
    this.player.pause();
  }

  muteUnmute() {
    this.player.muted
      ? (this.player.muted = false)
      : (this.player.muted = true);
  }

  togglePlay() {
    this.player.paused ? this.play() : this.pause();
  }
}

export default MediaPlayer;
