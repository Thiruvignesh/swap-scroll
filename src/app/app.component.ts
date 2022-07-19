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
    this.scrollService.enableScroll();
  }

  disableScroll(){
    this.scrollService.disableScroll();
  }
}
