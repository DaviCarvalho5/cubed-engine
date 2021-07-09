/** @type {HTMLCanvasElement} */

import Game from './game.js'

let canvas = document.getElementById('game-surface');
let ctx = canvas.getContext('2d');

let lastTime = 0;

let game = new Game(800, 600, canvas);
let dt = 0;

function gameLoop(timestamp) {

  dt = (timestamp - lastTime) / 1000; // secondes. 1 dt = 1 time / 1 second
  lastTime = timestamp;

  game.update(dt);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);