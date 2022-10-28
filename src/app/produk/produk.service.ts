import { EventEmitter } from "@angular/core";
import { BelanjaProduk } from "../shared/belanja-produk.model";
import { Produk } from "./produk.model";

export class ProdukService{

  // buat variabel kandunganSelected dari Model
  produkSelected = new EventEmitter<Produk>();

  // import model dan create new instance
  private produks: Produk[] = [
    new Produk(1, 'Skin10004', 'Madagascar Centella Toning',
      'Madagascar Centella Toning',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero illo inventore voluptatem praesentium enim nobis! Corporis rem laudantium explicabo optio veritatis harum, cupiditate voluptatibus, molestias porro odit aspernatur reprehenderit totam!',
      true, 'madagascar-centella-toning.jpg',
      [
        new BelanjaProduk('Skin10004', 1)
      ]),
    new Produk(2, 'Lacoco en nature', 'Darkspot Essence',
      'Darkspot Essence',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero illo inventore voluptatem praesentium enim nobis! Corporis rem laudantium explicabo optio veritatis harum, cupiditate voluptatibus, molestias porro odit aspernatur reprehenderit totam!',
      true, 'miracle-toner.jpg',
      [
        new BelanjaProduk('Lacoco en nature', 1)
      ])
  ];

  // ambil data instances
  getProduk(){
    return this.produks.slice();
  }
}
