import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutlineButtonDirective } from './directives/outline-button/outline-button.directive';



@NgModule({
  declarations: [OutlineButtonDirective],
  exports: [OutlineButtonDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
