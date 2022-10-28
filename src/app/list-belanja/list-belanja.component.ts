import { Component, OnInit } from '@angular/core';
import { Belanja } from './belanja.model';

@Component({
  selector: 'app-list-belanja',
  templateUrl: './list-belanja.component.html',
  styleUrls: ['./list-belanja.component.css']
})
export class ListBelanjaComponent implements OnInit {

  // buat list-belanja dari model
  belanjas: Belanja[] = [
    new Belanja('Skin10004', 1),
    new Belanja('Whitelab', 2),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onTambahBelanja(belanja: Belanja){
    this.belanjas.push(belanja);
  }

}
