import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {SurahComponent} from "./surah.component";
import {IonicModule} from "@ionic/angular";
import { DetailSurahComponent } from './detail-surah/detail-surah.component';
import {ArabicNumberPipe} from "../_pipe/ArabicNumberPipe";



@NgModule({
  declarations: [SurahComponent, DetailSurahComponent, ArabicNumberPipe],
  exports: [
    SurahComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {path: '', component: SurahComponent},
      {path: 'detail-surah/:nomor', component: DetailSurahComponent},
    ]),
  ]
})
export class SurahModule { }
