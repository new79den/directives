import {Directive, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {

  @HostListener("mouseenter") mouseover(){
    this.backgroundColor = this.dirHighlightColor;
  }
  @HostListener("mouseleave") mouseleave(){
    this.backgroundColor = this.defaultColor;
  }
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }
  @Input() defaultColor = "white";
  @Input('dirHighlight')  dirHighlightColor = 'green';

  private backgroundColor: string;

  constructor() {

  }


}
