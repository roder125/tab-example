import { Directive, ElementRef, Input, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appOutlineButton]'
})
export class OutlineButtonDirective implements OnInit {

  private defaultColor: string = "primary";
  @Input() color: string = "primary";

  constructor(
    private elementRef: ElementRef<HTMLButtonElement>,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    if(!this.color) {
      this.color = this.defaultColor;
    }
    this.setButtonStyles();
  }

  /**
   * Set the default styles for the button
   */
  setButtonStyles() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', `transparent`);
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', `1px solid var(--${this.color})`);
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', `5px`);
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', `pointer`);
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', `var(--text)`);
    this.renderer.setStyle(this.elementRef.nativeElement, 'padding', `8px 16px `);
    this.renderer.setStyle(this.elementRef.nativeElement, 'transition', `all .1s ease-in-out`);
    this.renderer.setStyle(this.elementRef.nativeElement, 'outline', `none`);
  }

  @HostListener('mouseenter') mouseover() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', `var(--${this.color})`);
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', `var(--${this.color}-contrast)`);
  }

  @HostListener('mouseleave') mouseleave() {
    this.setButtonStyles();
  }

  @HostListener('mousedown') mousedown() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', `var(--${this.color}-shade)`);
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', `var(--${this.color}-contrast)`);
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-color', `var(--${this.color}-shade)`);

  }

  @HostListener('mouseup') mouseup() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', `var(--${this.color})`);
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-color', `var(--${this.color})`);
  }

}
