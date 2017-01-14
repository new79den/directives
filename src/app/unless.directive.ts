import {Directive, TemplateRef, ViewContainerRef, Input,} from '@angular/core';

@Directive({
  selector: '[dirUnless]'
})
export class UnlessDirective {
  @Input() set dirUnless(conditional: boolean) {
    if (!conditional){
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

  }

}
