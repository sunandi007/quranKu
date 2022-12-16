import { Injectable } from '@angular/core';
import {NameOfAllohModel} from "../_model/AsmaulModel";

@Injectable({
  providedIn: 'root'
})
export class AsmaAlHusnaRepository {

  dataAsmaAlHusna: NameOfAllohModel = []
  constructor() {
    // dataSource.getNames().subscribe(res => {
    //   this.dataAsmaAlHusna = res
    // })
  }

  getName(index: number) {
    return this.dataAsmaAlHusna
  }
}
