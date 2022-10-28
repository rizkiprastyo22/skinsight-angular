import { EventEmitter } from "@angular/core";
import { Belanja } from "./belanja.model";

export class serviceListBelanja{

  //  ketika ada list yang berbah menggunakan event emitter
  BelanjaChanged = new EventEmitter<Belanja[]>();

  // membuat instances
  belanjas: Belanja[]=[
    new Belanja('Skin10004', 1),
    new Belanja('Whitelab', 2),
  ];

  // fungsi ambil seluruh instances belanja
  getBelanja(){
    return this.belanjas.slice();
  }

  // fungsi nambah belanja
  addBelanja(belanja: Belanja){
    this.belanjas.push(belanja);
    this.BelanjaChanged.emit(this.belanjas.slice());
  }

  // fungsi nambah barang belanja baru
  addBelanjas(belanja: Belanja[]){
    this.belanjas.push(...belanja);
    this.BelanjaChanged.emit(this.belanjas.slice());
  }
}
