import { Injectable } from '@angular/core';
import {KurankuService} from "../_service/kuranku.service";
import {SurahModel} from "../_model/surah.model";
import {PrayTimeService} from "../_service/prayTime.service";
import {CityModel, TimePrayModel} from "../_model/waktu-solat";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PrayTimeRepository {

  city: CityModel[] = [];

  constructor(private dataSource: PrayTimeService) {
    dataSource.getCity().subscribe(data => {
      this.city = data;
    })
  }

  getAllCity() {
    return this.city.filter(city => city.lokasi.includes('KOTA'))
  }

  getJakarta(searchCity: string): CityModel[] | undefined {
    return this.city.filter(city => city.lokasi.includes(searchCity))
  }

  getPrayTimeByCity(idCity: number, year: number, mount: number, date: number): Observable<TimePrayModel> {
    return this.dataSource.getPrayTime(idCity, year, mount, date)
  }
}
