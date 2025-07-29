import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appStockHighlight]'
})
export class StockHighlightDirective implements OnChanges {

    @Input() appStockHighlight!: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    const stock = this.appStockHighlight;

    let color = '';

    if (stock > 40) {
      color = 'green';
    } else if (stock >= 20) {
      color = 'orange';
    } else {
      color = 'red';
    }

    this.renderer.setStyle(this.el.nativeElement, 'color', color);
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
  }

}
