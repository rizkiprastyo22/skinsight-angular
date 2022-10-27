import { Component, OnInit } from '@angular/core';
import { Produk } from './produk.model';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.component.html',
  styleUrls: ['./produk.component.css']
})
export class ProdukComponent implements OnInit {

  // inisialisasi variabel produk yang dipilih
  selectedProduk: Produk;

  constructor() { }

  ngOnInit(): void {
  }

}
