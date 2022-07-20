import { Component } from '@angular/core';
import {SwapScrollService} from "./swap-scroll.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'swap-scroll';
  scrollDisabled = false;
  constructor(private scrollService: SwapScrollService) {
  }

  enableScroll() {
    this.scrollDisabled = false;
    this.scrollService.enableScroll();
  }

  disableScroll(){
    this.scrollDisabled = true;
    this.scrollService.disableScroll();
  }
}
