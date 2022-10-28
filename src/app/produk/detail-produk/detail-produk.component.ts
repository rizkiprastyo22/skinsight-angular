import { Component, Input, OnInit } from '@angular/core';
import { Produk } from '../produk.model';

@Component({
  selector: 'app-detail-produk',
  templateUrl: './detail-produk.component.html',
  styleUrls: ['./detail-produk.component.css']
})
export class DetailProdukComponent implements OnInit {

  // inisialisasi variabel produk dari model
  @Input() produk: Produk;

  // inisialisasi service
  constructor() { }

  ngOnInit(): void {
  }

}
