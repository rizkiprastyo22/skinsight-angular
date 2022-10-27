import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Kandungan } from '../kandungan.model';

@Component({
  selector: 'app-list-kandungan',
  templateUrl: './list-kandungan.component.html',
  styleUrls: ['./list-kandungan.component.css']
})
export class ListKandunganComponent implements OnInit {

  // definisikan sebuah variabel kandungan yang dipilih
  @Output() kandunganWasSelected = new EventEmitter<Kandungan>();

  // import model dan create new instance
  kandungans: Kandungan[] = [
    new Kandungan(1, "Hyaluronic Acid", "Hyaluronic Acid", "Hyaluronic Acid", "Antistatik, Humektan, Pelembab, Skin Conditioner", "Antistatik, Humektan, Pelembab, dll")
  ]

  constructor() { }

  ngOnInit(): void {
  }

  // fungsi ketika suatu kandungan diklik untuk memunculkan detailnya
  onKandunganSelected(kandungan: Kandungan) {
    this.kandunganWasSelected.emit(kandungan);
  }

}
