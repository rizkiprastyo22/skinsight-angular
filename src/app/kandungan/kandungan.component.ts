import { Component, OnInit } from '@angular/core';
import { Kandungan } from './kandungan.model';

@Component({
  selector: 'app-kandungan',
  templateUrl: './kandungan.component.html',
  styleUrls: ['./kandungan.component.css']
})
export class KandunganComponent implements OnInit {

  // mendefinisikan variabel dari model
  selectedKandungan: Kandungan;

  constructor() { }

  ngOnInit(): void {
  }

}
