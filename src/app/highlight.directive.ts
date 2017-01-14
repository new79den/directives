import {Directive, ElementRef, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
  @HostListener("mouseenter") mouseover(){
    this.backgroundColor = "red";
  }

  @HostListener("mouseleave") mouseleave(){
    this.backgroundColor = "white";
  }

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }
  private backgroundColor = 'white';
  constructor(private elementRef: ElementRef) {
   // this.elementRef.nativeElement.style.backgroundColor = "green";
  }


}
