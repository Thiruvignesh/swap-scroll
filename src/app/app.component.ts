import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {SwapScrollService} from "./swap-scroll.service";
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'swap-scroll';
  scrollDisabled = false;

  @ViewChild('main') main: ElementRef;
  @ViewChild('container') container: ElementRef;
  @ViewChildren('.box') boxList: QueryList<ElementRef>;


  constructor(private scrollService: SwapScrollService) {
  }

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    const scrollBox = gsap.timeline({
      scrollTrigger: {
        scroller:this.main.nativeElement,
        trigger: this.container.nativeElement,
        pin: true,
        start: "top top",
        end: "bottom bottom",
        markers: true,
        toggleActions: "play none none reverse"
      }
    });
    scrollBox.to(this.container.nativeElement, { y: 30, opacity: 0 });
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
