import { Injectable } from '@angular/core';
import {KurankuService} from "../_service/kuranku.service";
import {SurahModel} from "../_model/surah.model";

@Injectable({
  providedIn: 'root'
})
export class KurankuRepository {

  surah: SurahModel[] = [];

  constructor(private dataSource: KurankuService) {
    dataSource.getSurahList().subscribe(data => {
      this.surah = data;
    })
  }

  getAllSurah() {
    return this.surah
  }


}
