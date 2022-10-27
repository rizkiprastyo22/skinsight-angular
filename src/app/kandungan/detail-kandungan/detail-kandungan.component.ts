import { Component, Input, OnInit } from '@angular/core';
import { Kandungan } from '../kandungan.model';

@Component({
  selector: 'app-detail-kandungan',
  templateUrl: './detail-kandungan.component.html',
  styleUrls: ['./detail-kandungan.component.css']
})
export class DetailKandunganComponent implements OnInit {

  // mendefinisikan object dari model
  @Input() kandungan: Kandungan;

  constructor() { }

  ngOnInit(): void {
  }

}
