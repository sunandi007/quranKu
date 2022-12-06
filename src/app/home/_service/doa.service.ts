import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {DoaModel} from "../_model/doa.model";

@Injectable({
  providedIn: 'root'
})
export class DoaService {
  baseUrl: string;


  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl + '/api/'
  }


  getAllDoa(): Observable<DoaModel[]> {
    return this.http.get<DoaModel[]>(this.baseUrl + "doa");
  }

  getDetailDoa(id: number): Observable<DoaModel> {
    return this.http.get<DoaModel>(environment.apiUrl + "/doa/" + id);
  }
}
