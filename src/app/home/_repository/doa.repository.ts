import {Injectable} from "@angular/core";
import {CityModel} from "../_model/waktu-solat";
import {PrayTimeService} from "../_service/prayTime.service";
import {DoaService} from "../_service/doa.service";
import {DoaModel} from "../_model/doa.model";
import {from, groupBy, mergeMap, Observable, toArray} from "rxjs";
import {SurahModel} from "../_model/surah.model";

@Injectable({
  providedIn: 'root'
})
export class DoaRepository {

  doa: DoaModel[] = [];
  parseData: any[] = [];
  dataGrup: any[] = [];

  constructor(private dataSource: DoaService) {
    dataSource.getAllDoa().subscribe(data => {
      this.doa = data
      data.map((doa, index) => {
        this.parseData.push(doa.grup);
        this.dataGrup = this.parseData.filter((c, index) => {
          return this.parseData.indexOf(c) === index;
        });
      });
    })
  }


  getSourceCategoryDoa() {
    return this.dataGrup
  }

  getListDoaByGroupName(groupName: string): DoaModel[] {
    return this.doa.filter(d => d.grup === groupName)
  }

  getDetailDoa(id: number): Observable<DoaModel> {
    return this.dataSource.getDetailDoa(6)
  }

}
