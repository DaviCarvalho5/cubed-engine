export default class GameObject {
  constructor(UID, position, NAME = 'GameObject') {
    this.UID = UID;
    this.NAME = NAME;

    this.components = [];

    this.position = {
      x: position.x,
      y: position.y,
    }
  }

  update(dt) {
    this.components.forEach(comp => comp.update(dt));
  }

  draw(ctx) {
    this.components.forEach(comp => comp.draw(ctx));
  }

  getUID() {
    return this.UID;
  }

  getName() {
    return this.NAME;
  }

  getPosition() {
    return this.position;
  }

  setPosition(position) {
    this.position = {
      x: position.x,
      y: position.y,
    }
  }
}