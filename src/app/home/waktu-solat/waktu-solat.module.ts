import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {WaktuSolatComponent} from "./waktu-solat.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [WaktuSolatComponent],
  exports: [WaktuSolatComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{path: '', component: WaktuSolatComponent}]),
    FormsModule,
  ]
})
export class WaktuSolatModule { }
