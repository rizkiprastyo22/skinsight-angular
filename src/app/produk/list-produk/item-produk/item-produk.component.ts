import { Component, Input, OnInit } from '@angular/core';
import { Produk } from '../../produk.model';

@Component({
  selector: 'app-item-produk',
  templateUrl: './item-produk.component.html',
  styleUrls: ['./item-produk.component.css']
})
export class ItemProdukComponent implements OnInit {

  @Input() produk: Produk;

  constructor() { }

  ngOnInit(): void {
  }

}
