import { Component, Input, OnInit } from '@angular/core';
import { Kandungan } from '../../kandungan.model';
import { KandunganService } from '../../kandungan.service';

@Component({
  selector: 'app-item-kandungan',
  templateUrl: './item-kandungan.component.html',
  styleUrls: ['./item-kandungan.component.css']
})
export class ItemKandunganComponent implements OnInit {

  // mendefinisikan object baru berdasarkan model
  @Input() kandungan: Kandungan;

  constructor(private kandunganService: KandunganService) { }

  ngOnInit(): void {
  }

  onSelected(){
    this.kandunganService.kandunganSelected.emit(this.kandungan);
  }

}
