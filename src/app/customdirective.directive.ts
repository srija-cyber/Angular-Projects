import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective implements OnInit {

  @HostBinding('class.hovered') isFocused = false; 
  @HostBinding('style.backgroundColor') bgcolor : string = "yellow";
  @Input() hoverBackgroundColor : string = "black";
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onFocus() {
    this.isFocused = true;
    this.bgcolor = this.hoverBackgroundColor;
  }

  @HostListener('mouseleave') onleave(){
    this.isFocused = false;
    this.bgcolor = "yellow";
  }
  

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'black');
  }
}
