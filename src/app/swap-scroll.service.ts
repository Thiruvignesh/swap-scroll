import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwapScrollService {


  // keys = {37: 1, 38: 1, 39: 1, 40: 1};

  // modern Chrome requires { passive: false } when adding event
  supportsPassive = false;

  get wheelOpt() {
    return this.supportsPassive ? {passive: false} : false;
  }

  get wheelEvent() {
    return 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
  }

  constructor() {
    try {
      window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: () => {
          this.supportsPassive = true;
        }
      }));
    } catch (e) {
    }
  }

  preventDefault(e) {
    e.preventDefault();
  }

  preventDefaultForScrollKeys = (e: any) => {
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    if (e.keyCode >= 32 && e.keyCode <=40) {
      this.preventDefault(e);
      return false;
    }
    return true;
  }

  // call this to Disable
  disableScroll = () => {
    window.addEventListener('DOMMouseScroll', this.preventDefault, false); // older FF
    window.addEventListener(this.wheelEvent, this.preventDefault, this.wheelOpt); // modern desktop
    window.addEventListener('touchmove', this.preventDefault, this.wheelOpt); // mobile
    window.addEventListener('keydown', this.preventDefaultForScrollKeys);
  }

// call this to Enable
  enableScroll = () => {
    window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
    window.removeEventListener(this.wheelEvent, this.preventDefault);
    window.removeEventListener('touchmove', this.preventDefault);
    window.removeEventListener('keydown', this.preventDefaultForScrollKeys);
  }
}
