import { Component, OnInit } from '@angular/core';

import { Produk } from '../produk.model';
import { ProdukService } from '../produk.service';

@Component({
  selector: 'app-list-produk',
  templateUrl: './list-produk.component.html',
  styleUrls: ['./list-produk.component.css']
})
export class ListProdukComponent implements OnInit {

  // membuat instance baru
  produks: Produk[] = [];

  constructor(private produkService: ProdukService) { }

  ngOnInit(): void {
    // ambil data instances dari service
    this.produks = this.produkService.getProduk();
  }

}
