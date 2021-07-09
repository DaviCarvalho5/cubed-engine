import GameObject from '../gameObject.js';
import BasicForm from '../components/basicForm.js';
import MoveWithKeys from '../components/moveWithKeys.js';

export default class Player extends GameObject{
  constructor(UID, position, NAME = 'GameObject') {
    super(UID, position, NAME);

    this.addComponents()
  }

  addComponents() {
    this.components = [
      this.basicForm = new BasicForm(this, 16, 16, 'rect'),
      this.moveWithKeys = new MoveWithKeys(this, 500)
    ]
  }
}