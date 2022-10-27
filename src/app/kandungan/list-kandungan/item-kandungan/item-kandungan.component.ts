import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Kandungan } from '../../kandungan.model';

@Component({
  selector: 'app-item-kandungan',
  templateUrl: './item-kandungan.component.html',
  styleUrls: ['./item-kandungan.component.css']
})
export class ItemKandunganComponent implements OnInit {

  // mendefinisikan object baru berdasarkan model
  @Input() kandungan: Kandungan;

  // mendefinisikan variabel 'object yang dipilih'
  @Output() kandunganSelected = new EventEmitter<Kandungan>();

  constructor() { }

  ngOnInit(): void {
  }

  // fungsi ketika ada kandungan yang sudah dipilih
  onSelected(){
    this.kandunganSelected.emit();
  }

}
