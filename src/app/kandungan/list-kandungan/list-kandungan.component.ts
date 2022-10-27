import { Component, OnInit } from '@angular/core';

import { Kandungan } from '../kandungan.model';

@Component({
  selector: 'app-list-kandungan',
  templateUrl: './list-kandungan.component.html',
  styleUrls: ['./list-kandungan.component.css']
})
export class ListKandunganComponent implements OnInit {

  // import model
  kandungans: Kandungan[] = [
    new Kandungan(1, "Hyaluronic Acid", "Hyaluronic Acid", "Hyaluronic Acid", "Antistatik, Humektan, Pelembab, Skin Conditioner", "Antistatik, Humektan, Pelembab, dll")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
