export default class BasicForm {
  constructor(gameObject, width, height, type, color = '#000000') {
    this.gameObject = gameObject;
    this.position = gameObject.position;
    this.width = width;
    this.height = height;
    this.color = color;
    this.type = type;
  }

  update(dt) {
    this.position = this.gameObject.position;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;

    switch (this.type) {
      case 'rect':
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }

  getType() {
    return this.type;
  }
}