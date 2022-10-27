import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Produk } from '../../produk.model';

@Component({
  selector: 'app-item-produk',
  templateUrl: './item-produk.component.html',
  styleUrls: ['./item-produk.component.css']
})
export class ItemProdukComponent implements OnInit {

  // menginisilisasi object produk dari model
  @Input() produk: Produk;

  // menginisilisasi variabel 'produk yang dipilih'
  @Output() produkSelected = new EventEmitter<Produk>();

  constructor() { }

  ngOnInit(): void {
  }

  // fungsi ketika ada produk yang dipilih
  onSelected(){
    this.produkSelected.emit();
  }

}
