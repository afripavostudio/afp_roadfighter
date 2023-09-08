import Sprite from "../../Engine/Sprite.js";
import {randomVal} from "../../Engine/utils/randomVal.js";
import {Background} from "../sprites/Background.js";
import {Cars} from "../sprites/Cars.js";
import {Player} from "../sprites/Player.js";

function createRoad(n, arenaBackground) {
  let roads = [
    new Background({
      id: "Background",
      number: -1,
      image: undefined,
      x: 0,
      y: -150,
      width: arenaBackground.width,
      height: 200,
    }),
  ];
  for (let i = 0; i < n; i++) {
    roads.push(
      new Background({
        id: "Background",
        number: i,
        image: undefined,
        x: 0,
        y: 160 * i,
        width: arenaBackground.width,
        height: 200,
        speedX: 100,
      })
    );
  }

  return roads;
}

function carPicker(type) {
  let source = {
    sourceX: 0,
    sourceY: 0,
    sWidth: 120,
    sHeight: 220,
    width: 30,
    height: 45,
  };

  switch (type) {
    case "green-sd":
      source.sourceX = 0;
      source.sourceY = 0;

      return source;
    case "red-sd":
      source.sourceX = 230;
      source.sourceY = 0;

      return source;
    case "orange-sd":
      source.sourceX = 120;
      source.sourceY = 0;

      return source;
    case "truck-small-red":
      source.sourceX = 475;
      source.sourceY = 0;

      return source;
    case "truck-small-green":
      source.sourceX = 600;
      source.sourceY = 0;

      return source;
    case "truck-big-blue":
      source.sourceX = 765;
      source.sourceY = 0;
      source.sWidth = 120;
      source.sHeight = 460;
      source.height = 45 * 2;
      return source;
    case "fuel":
      source.sourceX = 650;
      source.sourceY = 260;
      source.sWidth = 100;
      source.sHeight = 110;
      source.height = 40;
      source.width = 35;

      return source;

    default:
      break;
  }
}

function createCars(n, arenaBackground, type, position) {
  let roads = [];

  const {sourceX, sourceY, sWidth, sHeight, width, height} = carPicker(type);

  for (let i = 0; i < n; i++) {
    roads.push(
      new Cars({
        id: "Cars",
        name: type,
        image: undefined,
        sX: sourceX,
        sY: sourceY,
        sWidth,
        sHeight,
        x: randomVal(30, arenaBackground.width - 30),
        y: -position * i - position,
        // y: 100,
        width,
        height,
        isJumping: false,
        speedX: 250 / 2,
        speedY: 100,

        velocityY: 0,
        velocityX: 0,
        gravity: 1500,
        isLanded: true,
        isFlipping: false,
        jumpStrength: -700,
        flipStrength: 100,
        onWall: 1,
        cells: 4,
        currentAnim: "idle",
        currentFrame: 6,
        isMoving: false,
        anims: [
          {
            name: "idle",
            start: 6,
            end: 6,
          },
          {
            name: "run",
            start: 0,
            end: 5,
          },
          {
            name: "jump",
            start: 7,
            end: 7,
          },
          {
            name: "run-left",
            start: 9,
            end: 15,
          },
          {
            name: "jump-left",
            start: 16,
            end: 16,
          },
        ],
        cellIndex: 0,
      })
    );
  }

  return roads;
}

export function addNewCar(arenaBackground) {
  const types = [
    "green-sd",
    "red-sd",
    "truck-big-blue",
    "truck-small-red",
    "truck-small-green",
  ];
  return createCars(
    1,
    arenaBackground,
    types[Math.floor(Math.random() * 5)],
    randomVal(30, arenaBackground.width - 30)
  );
}
export function addNewCarByName(arenaBackground, type) {
  return createCars(
    1,
    arenaBackground,
    type,
    randomVal(30, arenaBackground.width - 30)
  );
}

export const sprites = (arena, arenaBackground) => [
  ...createRoad(4, arenaBackground),
  // ...createCars(30, arenaBackground, "green-sd", 190),
  // ...createCars(30, arenaBackground, "red-sd", 290),
  // ...createCars(30, arenaBackground, "truck-big-blue", 500),
  // ...createCars(30, arenaBackground, "truck-small-red", 576),
  // ...createCars(30, arenaBackground, "truck-small-green", 976),
  ...createCars(10, arenaBackground, "fuel", 2000),
  new Player({
    id: "Player",
    image: undefined,
    sX: 230,
    sY: 460,
    sWidth: 120,
    sHeight: 220,
    x: arena.width * 0.5,
    y: 100,
    width: 30,
    height: 45,
    isJumping: false,
    speedX: 250,
    velocityY: 0,
    velocityX: 0,
    gravity: 1500,
    isLanded: true,
    isFlipping: false,
    jumpStrength: -700,
    flipStrength: 100,
    onWall: 1,
    cells: 4,
    currentAnim: "idle",
    currentFrame: 6,
    isMoving: false,
    gearNumber: 1,
    fuel: 3,
    anims: [
      {
        name: "idle",
        start: 6,
        end: 6,
      },
      {
        name: "run",
        start: 0,
        end: 5,
      },
      {
        name: "jump",
        start: 7,
        end: 7,
      },
      {
        name: "run-left",
        start: 9,
        end: 15,
      },
      {
        name: "jump-left",
        start: 16,
        end: 16,
      },
    ],
    cellIndex: 0,
  }),
];

export const state = {};
