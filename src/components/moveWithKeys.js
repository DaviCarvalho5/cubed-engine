import InputManager from '../inputManager.js';

export default class MoveWithKeys {
  constructor(gameObject, maxSpeed) {
    this.gameObject = gameObject;
    this.maxSpeed = maxSpeed;

    this.speed = {
      x: 0,
      y: 0
    }
  }

  update(dt) {
    this.speed.x = InputManager.horizontal * this.maxSpeed;
    this.speed.y = InputManager.vertical * this.maxSpeed;

    this.gameObject.position = {
      x: this.gameObject.position.x + this.speed.x * dt,
      y: this.gameObject.position.y + this.speed.y * dt,
    };
  }

  draw(ctx) {

  }
}