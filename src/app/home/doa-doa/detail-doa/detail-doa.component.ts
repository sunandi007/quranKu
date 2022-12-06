import { Component, OnInit } from '@angular/core';
import {DoaModel} from "../../_model/doa.model";
import {DoaRepository} from "../../_repository/doa.repository";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-detail-doa',
  templateUrl: './detail-doa.component.html',
  styleUrls: ['./detail-doa.component.css']
})
export class DetailDoaComponent implements OnInit {

  idDoa: number = 0
  dataDoa: any
  constructor(private repository: DoaRepository,
              private route: ActivatedRoute) {
    this.idDoa = route.snapshot.params['id']
  }

  ngOnInit(): void {
    this.detailDoa()
  }

  detailDoa() {
    this.repository.getDetailDoa(this.idDoa).subscribe(res => {
      this.dataDoa = res
    })
  }
}
