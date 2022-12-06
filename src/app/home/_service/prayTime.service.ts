import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {CityModel, TimePrayModel} from "../_model/waktu-solat";

@Injectable({
  providedIn: 'root'
})
export class PrayTimeService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrlWaktuSholat + '/v1/'
  }

  getCity(): Observable<CityModel[]> {
    return this.http.get<CityModel[]>(this.baseUrl + "sholat/kota/semua");
  }

  getPrayTime(idCity: number, year: number, mount: number, date: number): Observable<TimePrayModel> {
    return this.http.get<TimePrayModel>(this.baseUrl + "sholat/jadwal/" + idCity + "/" + year + "/" + mount + "/" + date)
      .pipe(map(res => res));
  }
}
