import { Component, OnInit } from '@angular/core';
import { Produk } from '../produk.model';

@Component({
  selector: 'app-list-produk',
  templateUrl: './list-produk.component.html',
  styleUrls: ['./list-produk.component.css']
})
export class ListProdukComponent implements OnInit {

  produks: Produk[] = [
    new Produk(1, 'Skin10004', 'Madagascar Centella Toning', 'Madagascar Centella Toning', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero illo inventore voluptatem praesentium enim nobis! Corporis rem laudantium explicabo optio veritatis harum, cupiditate voluptatibus, molestias porro odit aspernatur reprehenderit totam!', true, 'madagascar-centella-toning.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
