import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DetailQuranRepository} from "../../_repository/detail-quran.repository";
import {SurahModel} from "../../_model/surah.model";
import { ActivatedRoute } from '@angular/router';
import { data } from 'autoprefixer';

@Component({
  selector: 'app-detail-surah',
  templateUrl: './detail-surah.component.html',
  styleUrls: ['./detail-surah.component.css']
})
export class DetailSurahComponent implements OnInit {
  @ViewChild('audio') audioPlayerRef!: ElementRef;

  numberOfSurah: number = 0
  dataDetailSurah = {} as SurahModel
  dataDetailTafsir = {} as SurahModel

  modeList: boolean = true
  isTafsir: boolean = false
  toggle: any
  prefersDark: any

  constructor(private repository: DetailQuranRepository,
              private route: ActivatedRoute) {
    this.numberOfSurah = this.route.snapshot.params['nomor']

  }

  ngOnInit(): void {
    this.detailSurah()
    this.detailTafsir()
  }

  detailSurah() {
    this.repository.getDetailSurah(this.numberOfSurah).subscribe(data => {
      this.dataDetailSurah = data
    })
  }

  detailTafsir() {
    this.repository.getDetailTafsir(this.numberOfSurah).subscribe(data => {
      this.dataDetailTafsir = data
    })
  }

  play() {
    this.audioPlayerRef.nativeElement.play();
  }
}
