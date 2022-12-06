import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {DoaRepository} from "../../_repository/doa.repository";
import {DoaModel} from "../../_model/doa.model";

@Component({
  selector: 'app-category-doa',
  templateUrl: './category-doa.component.html',
  styleUrls: ['./category-doa.component.css']
})
export class CategoryDoaComponent implements OnInit {

  nameCategory: string = ''

  constructor(private route: ActivatedRoute,
              private router: Router,
              private repository: DoaRepository) {
    let slug = route.snapshot.params['name']
    let str = slug.replace(/-/g, ' ')
    this.nameCategory = str.split(' ')
      .map((w: any) => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join(' ');
  }

  ngOnInit(): void {
  }

  get listCategory(): DoaModel[] {
    return this.repository.getListDoaByGroupName(this.nameCategory)
  }

  goToDetailDoa(id: any) {
    this.router.navigateByUrl(`doa/detail/${id}`)
  }


}
