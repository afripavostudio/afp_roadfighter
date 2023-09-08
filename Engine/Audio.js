export class GameAudio {
  constructor(audioList) {
    this.sounds = new Map();
    this.audioList = audioList || [];
    this.volume = 1;
    this.muted = false;
  }

  initialPlay() {
    // let sound;
    this.sounds.forEach((sound) => {
      console.log(sound);

      if (sound) {
        sound.currentTime = 0;
        sound.volume = 1;
        // sound.play();
      }
    });
  }

  loadSounds() {
    if (this.audioList?.length > 0) {
      this.audioList?.forEach((audio) => {
        this.loadSound(audio.name, audio.src);
      });
    }
  }

  loadSound(key, src) {
    const self = this;
    const audio = new Audio(src);
    audio.addEventListener("canplaythrough", () => {
      this.sounds.set(key, audio);
    });
  }

  playSound(key, volume) {
    if (this.muted) {
      return;
    }
    // this.stopSound(key);

    const sound = this.sounds.get(key);

    if (sound) {
      sound.currentTime = 0;
      sound.volume = volume || this.volume;
      sound.play();
    }
  }

  stopSound(key) {
    const sound = this.sounds.get(key);
    sound.pause();
    sound.currentTime = 0;
  }
}
