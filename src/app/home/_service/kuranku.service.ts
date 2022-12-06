import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SurahModel} from "../_model/surah.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class KurankuService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl + '/api/'
  }

  getSurahList(): Observable<SurahModel[]> {
    return this.http.get<SurahModel[]>(this.baseUrl + "surat");
  }

  getDetailSurah(nomor: number): Observable<SurahModel> {
    return this.http.get<SurahModel>(this.baseUrl + "surat/" + nomor);
  }

  getDetailTafsir(nomor: number): Observable<SurahModel> {
    return this.http.get<SurahModel>(this.baseUrl + "tafsir/" + nomor);
  }
}
