import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgMobileGameComponent } from './ng-mobile-game.component';



@NgModule({
  declarations: [
    NgMobileGameComponent
  ],
  imports: [
  ],
  exports: [
    NgMobileGameComponent
  ],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgMobileGameModule { }
