import { Component, OnInit } from '@angular/core';
import {SurahModel} from "../_model/surah.model";
import {KurankuRepository} from "../_repository/kuranku.repository";
import {DoaRepository} from "../_repository/doa.repository";
import {DoaModel} from "../_model/doa.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-doa-doa',
  templateUrl: './doa-doa.component.html',
  styleUrls: ['./doa-doa.component.css']
})
export class DoaDoaComponent implements OnInit {

  constructor(private repository: DoaRepository,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  get categoryDoa(): any[] {
    return this.repository.getSourceCategoryDoa()
  }

  convertToSlug(value: string) {
    let slug = value.toLowerCase().replace(/ /g, '-')
      .replace(/[^\w-]+/g, '')
    this.router.navigateByUrl(`doa/category/${slug}`)
  }

}
