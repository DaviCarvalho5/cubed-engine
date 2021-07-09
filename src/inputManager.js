export default class InputManager {
  constructor() {
    document.addEventListener('keydown', (event) => this.onKeyDown(event));
    document.addEventListener('keyup', (event) => this.onKeyUp(event));
  }

  static up = false;
  static down = false;
  static left = false;
  static right = false;

  static vertical = 0;
  static horizontal = 0;

  onKeyDown(event) {
    let key = event.key;
    
    if (key == 'w' || key == 'ArrowUp') {
      InputManager.up = true;
      InputManager.vertical = -1;
    }

    if (key == 's' || key == 'ArrowDown') {
      InputManager.down = true;
      InputManager.vertical = 1;
    }

    if (key == 'a' || key == 'ArrowLeft') {
      InputManager.left = true;
      InputManager.horizontal = -1;
    }

    if (key == 'd' || key == 'ArrowRight') {
      InputManager.right = true;
      InputManager.horizontal = 1;
    }
  }

  onKeyUp(event) {
    let key = event.key;

    if (key == 'w' || key == 'ArrowUp') {
      if (InputManager.vertical > 0) return;
      InputManager.up = false;
      InputManager.vertical = 0;
    }

    if (key == 's' || key == 'ArrowDown') {
      if (InputManager.vertical < 0) return;
      InputManager.down = false;
      InputManager.vertical = 0;
    }

    if (key == 'a' || key == 'ArrowLeft') {
      if (InputManager.horizontal > 0) return;
      InputManager.left = false;
      InputManager.horizontal = 0;
    }

    if (key == 'd' || key == 'ArrowRight') {
      if (InputManager.horizontal < 0) return;
      InputManager.right = false;
      InputManager.horizontal = 0;
    }
  }
}