export class SurahModel {
  constructor(public nomor: number,
              public nama: string,
              public nama_latin: string,
              public jumlah_ayat: string,
              public tempat_turun: string,
              public arti: string,
              public deskripsi: string,
              public audio: string,
              public surat_sebelumnya: SurahModel,
              public surat_selanjutnya: SurahModel,
              public ayat: Array<DetailSurahModel>,
              public tafsir: Array<DetailTafsirModel>
              ) {}
}

export class DetailSurahModel {
  constructor(
    public id: number,
    public nomor: number,
    public surah: string,
    public ar: string,
    public tr: string,
    public idn: string,
  ) {
  }
}

export class DetailTafsirModel {
  constructor(
    public id: number,
    public ayat: number,
    public surah: string,
    public tafsir: string,
  ) {
  }
}
