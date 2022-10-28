import { EventEmitter, Injectable } from "@angular/core";
import { Belanja } from "../list-belanja/belanja.model";
import { serviceListBelanja } from "../list-belanja/list-belanja-service";
import { Produk } from "./produk.model";

// menambahkan dependecy injection pada object produk
@Injectable()
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
        new Belanja('Skin10004', 1)
      ]),
    new Produk(2, 'Lacoco en nature', 'Darkspot Essence',
      'Darkspot Essence',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero illo inventore voluptatem praesentium enim nobis! Corporis rem laudantium explicabo optio veritatis harum, cupiditate voluptatibus, molestias porro odit aspernatur reprehenderit totam!',
      true, 'miracle-toner.jpg',
      [
        new Belanja('Lacoco en nature', 1)
      ])
  ];

  // definisi service
  constructor(private serviceListBelanja: serviceListBelanja){}

  // ambil data instances
  getProduk(){
    return this.produks.slice();
  }

  // membuat fungsi dependecy menambah produk ke wishlist
  addProdukKeWishlist(belanjaProduks: Belanja[]){
    this.serviceListBelanja.addBelanjas(belanjaProduks);
  }
}
