import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasbihComponent} from "./tasbih.component";
import {IonicModule} from "@ionic/angular";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [TasbihComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {path: '', component: TasbihComponent},
    ]),
  ]
})
export class TasbihModule { }
