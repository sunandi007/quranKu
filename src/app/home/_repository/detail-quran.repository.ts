import { Injectable } from '@angular/core';
import {KurankuService} from "../_service/kuranku.service";
import {SurahModel} from "../_model/surah.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DetailQuranRepository {
  detailSurah = {} as SurahModel
  constructor(private dataSource: KurankuService) {
  }

  getDetailSurah(nomor: number): Observable<SurahModel> {
    return this.dataSource.getDetailSurah(nomor)
  }

  getDetailTafsir(nomor: number): Observable<SurahModel> {
    return this.dataSource.getDetailTafsir(nomor)
  }
}
