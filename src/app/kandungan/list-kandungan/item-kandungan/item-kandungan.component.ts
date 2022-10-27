import { Component, Input, OnInit } from '@angular/core';
import { Kandungan } from '../../kandungan.model';

@Component({
  selector: 'app-item-kandungan',
  templateUrl: './item-kandungan.component.html',
  styleUrls: ['./item-kandungan.component.css']
})
export class ItemKandunganComponent implements OnInit {

  @Input() kandungan: Kandungan;

  constructor() { }

  ngOnInit(): void {
  }

}
