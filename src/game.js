
import GameObject from './gameObject.js';
import Player from './gameObjects/player.js';
import InputManager from './inputManager.js';

export default class Game {
  constructor (GAME_WIDTH, GAME_HEIGHT, canvas) {

    canvas.width = 800;
    canvas.height = 600;

    this.setCanvasSize(GAME_WIDTH, GAME_HEIGHT, canvas);

    this.isDebuging = true;

    this.gameObjects = [];
    this.nextUID = 0;

    this.inputManager = new InputManager();

    this.start();
  }

  start() {
    let player = new Player(this.UIDsetter(), {x: 16, y: 16}, 'Player');
    this.gameObjects.push(player);
  }

  update(dt) {
    this.gameObjects.forEach(go => go.update(dt));
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
    this.gameObjects.forEach(go => go.draw(ctx));
  }

  //
  // Canvas
  //

  setCanvasSize(width, height, canvas) {
    this.width = width;
    this.height = height;

    this.updateGameCanvasSize(canvas)
  }

  updateGameCanvasSize(canvas) {
    canvas.width = this.width;
    canvas.height = this.height;
  }

  UIDsetter() {
    let UID = this.nextUID;
    this.nextUID++

    return UID;
  }
}