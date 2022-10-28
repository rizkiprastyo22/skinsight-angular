import { Component, OnInit } from '@angular/core';
import { Belanja } from './belanja.model';
import { serviceListBelanja } from './list-belanja-service';

@Component({
  selector: 'app-list-belanja',
  templateUrl: './list-belanja.component.html',
  styleUrls: ['./list-belanja.component.css']
})
export class ListBelanjaComponent implements OnInit {

  // buat list-belanja dari model
  belanjas: Belanja[] = [];

  constructor(private serviceListBelanja: serviceListBelanja) { }

  ngOnInit(): void {
    this.belanjas = this.serviceListBelanja.getBelanja();
    this.serviceListBelanja.BelanjaChanged
    .subscribe(
      (belanjas: Belanja[]) => {
        this.belanjas = belanjas;
      }
    )
  }

}
