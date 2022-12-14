import {Component, OnInit} from '@angular/core';
import {PrayTimeRepository} from "../_repository/prayTime.repository";
import {CityModel, DetailTimeOfSholatModel, JadwalModel, TimePrayModel} from "../_model/waktu-solat";
import {Time} from '@angular/common';
import {Observable} from "rxjs";

@Component({
  selector: 'app-waktu-solat',
  templateUrl: './waktu-solat.component.html',
  styleUrls: ['./waktu-solat.component.css']
})
export class WaktuSolatComponent implements OnInit {

  selectedCity: string = '1301'
  timePray$!: Observable<TimePrayModel>

  isSelectedCity: boolean = false

  jadwalSholat!: any

  public results: CityModel[] | undefined;


  constructor(private repository: PrayTimeRepository) {
  }

  ngOnInit(): void {
    this.timePray(1301)
  }

  get city(): CityModel[] {
    return this.repository.getAllCity()
  }

  getCityOnChange(event: any) {
    this.results = this.city.filter(aa => aa.lokasi.includes(event.detail.value.toUpperCase()))
    if (this.results) {
      this.isSelectedCity = true
    }
  }

  timePray(selectedIdCity: any) {
    let myDate = new Date();
    this.repository.getPrayTimeByCity(Number(selectedIdCity), myDate.getFullYear(), myDate.getMonth(), myDate.getDate()).subscribe(
      res => {
        this.jadwalSholat = res
        this.isSelectedCity = false
      }
    )
  }

}
