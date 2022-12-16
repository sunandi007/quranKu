import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AsmaulHusnaService {

  constructor(private http: HttpClient) {
  }

  // getNames() {
  //   return this.http.get('assets/data/data.json')
  // }

}
