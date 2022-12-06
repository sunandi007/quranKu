import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {KurankuRepository} from "../_repository/kuranku.repository";
import {SurahModel} from "../_model/surah.model";

@Component({
  selector: 'app-surah',
  templateUrl: './surah.component.html',
  styleUrls: ['./surah.component.css']
})
export class SurahComponent implements OnInit {

  constructor(private repository: KurankuRepository) { }

  ngOnInit(): void {
  }

  get surah(): SurahModel[] {
    return this.repository.getAllSurah()
  }

}
