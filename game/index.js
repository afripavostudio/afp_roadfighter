import {GameAudio} from "../Engine/Audio.js";
import ImgLoader from "../Engine/utils/imgLoader.js";

import Game from "./Game.js";

// IMAGES
const imgLoader = new ImgLoader();

const assetsList = [
  {
    name: "Background",
    url: "./assets/road.png",
  },
  {
    name: "gamesprite",
    url: "./assets/gameelements.png",
  },
  // {
  //   name: "Coins",
  //   url: "./assets/gem-1.png",
  // },
  // {
  //   name: "Bombs",
  //   url: "./assets/bomb.png",
  // },
  // {
  //   name: "Platform",
  //   url: "./assets/platform-long.png",
  // },
  // {
  //   name: "Player",
  //   url: "./assets/player.png",
  // },
];

imgLoader.loadImages(assetsList);

// AUDIO
const audioList = [
  {name: "background-music", src: "./audios/background-music.mp3"},
  {name: "hit", src: "./audios/bling.wav"},
  {name: "dooropen", src: "./audios/dooropen.wav"},
  {name: "keyCollected", src: "./audios/notification.wav"},
  {name: "keyAccepted", src: "./audios/success.wav"},
  {name: "gameOver", src: "./audios/gameover.wav"},
];

const gameAudio = new GameAudio(audioList);

gameAudio.loadSounds();

gameAudio.initialPlay();

function init() {
  new Game(imgLoader.gameAssets, gameAudio).start();
}

window.addEventListener("load", init);

// Speed
// Get the needle elements
// const revNeedle = document.getElementById("revNeedle");
// const speedNeedle = document.getElementById("speedNeedle");

// // Function to update the needle rotation based on the value
// function updateNeedle(needle, value, max) {
//   const angle = (value / max) * 180; // Calculate the rotation angle
//   needle.style.transform = `rotate(${angle - 85}deg)`; // Rotate the needle
// }

// // Simulated values (you can replace these with actual data)
// const maxRev = 4000;
// const maxSpeed = 220;

// const revMap = {
//   1: 500,
//   2: 1000,
//   3: 1500,
//   4: 2000,
// };

// const speedMap = {
//   1: 40,
//   2: 60,
//   3: 80,
//   4: 100,
// };

// // Update the needles with simulated values (you can replace these with actual data)
// updateNeedle(revNeedle, 1000, maxRev);
// updateNeedle(speedNeedle, 100, maxSpeed);

// Fuel gauge
// const fuelLevel = document.getElementById("fuelLevel");
// const maxFuel = 100;

// // Function to update the fuel level
// function updateFuelLevel(value) {
//   fuelLevel.style.height = `${(value / maxFuel) * 100}%`;
// }

// // Simulated fuel level (you can replace this with actual data)
// const currentFuel = 100;
// updateFuelLevel(currentFuel);
