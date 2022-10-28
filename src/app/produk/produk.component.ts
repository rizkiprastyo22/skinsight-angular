import { Component, OnInit } from '@angular/core';
import { Produk } from './produk.model';
import { ProdukService } from './produk.service';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.component.html',
  styleUrls: ['./produk.component.css'],
  providers: [ProdukService]
})
export class ProdukComponent implements OnInit {

  // inisialisasi variabel produk yang dipilih
  selectedProduk: Produk;

  constructor(private produkService: ProdukService) { }

  ngOnInit(): void {
    this.produkService.produkSelected
      .subscribe(
        (produk: Produk) => {
          this.selectedProduk = produk;
        }
      )
  }

}
