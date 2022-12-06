import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoaDoaComponent} from "./doa-doa.component";
import {IonicModule} from "@ionic/angular";
import {RouterModule} from "@angular/router";
import { CategoryDoaComponent } from './category-doa/category-doa.component';
import { DetailDoaComponent } from './detail-doa/detail-doa.component';


@NgModule({
  declarations: [DoaDoaComponent, CategoryDoaComponent, DetailDoaComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {path: '', component: DoaDoaComponent},
      {path: 'category/:name', component: CategoryDoaComponent},
      {path: 'detail/:id', component: DetailDoaComponent},
    ]),
  ]
})
export class DoaDoaModule { }
