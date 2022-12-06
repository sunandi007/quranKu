export class TimePrayModel {
  constructor(
    public status: string,
    public data: DetailTimeOfSholatModel,
  ) {
  }
}

export class DetailTimeOfSholatModel {
  constructor(
    public id : string,
    public lokasi : string,
    public daerah : string,
    public koordinat : KoordinatModel,
    public jadwal : any,
  ) {
  }
}

export class KoordinatModel {
  constructor(
    public lat : any,
    public lon : any,
    public lintang : string,
    public bujur : string,
  ) {
  }
}

export class JadwalModel {
  constructor(
    public tanggal : any,
    public imsak : any,
    public subuh : string,
    public terbit : string,
    public dhuha : string,
    public dzuhur : string,
    public ashar : string,
    public maghrib : string,
    public isya : string,
    public date : string,
  ) {
  }
}



export class CityModel {
  constructor(
    public id : string,
    public lokasi : string,
  ) {
  }
}
