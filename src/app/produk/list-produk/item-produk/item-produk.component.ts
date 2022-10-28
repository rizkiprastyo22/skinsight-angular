import { Component, Input, OnInit } from '@angular/core';
import { Produk } from '../../produk.model';
import { ProdukService } from '../../produk.service';

@Component({
  selector: 'app-item-produk',
  templateUrl: './item-produk.component.html',
  styleUrls: ['./item-produk.component.css']
})
export class ItemProdukComponent implements OnInit {

  // menginisilisasi object produk dari model
  @Input() produk: Produk;

  constructor(private produkService: ProdukService) { }

  ngOnInit(): void {
  }

  // fungsi ketika ada produk yang dipilih
  onSelected(){
    this.produkService.produkSelected.emit(this.produk);
  }

}
