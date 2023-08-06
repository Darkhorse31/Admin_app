import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorchange]'
})
export class ColorchangeDirective {
  @HostListener("mouseenter") mouseEnter(){
    this.highlight('royalblue')
  }
  @HostListener("mouseleave") mouseleave(){
    this.highlight('')
  }
   constructor(private el:ElementRef) {
   }
   private highlight(color:string){
      this.el.nativeElement.style.color=color
   }

}
