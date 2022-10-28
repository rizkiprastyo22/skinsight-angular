import { Component, OnInit } from '@angular/core';

import { Kandungan } from '../kandungan.model';
import { KandunganService } from '../kandungan.service';

@Component({
  selector: 'app-list-kandungan',
  templateUrl: './list-kandungan.component.html',
  styleUrls: ['./list-kandungan.component.css']
})
export class ListKandunganComponent implements OnInit {

  // buat object dari model
  kandungans: Kandungan[] = [];

  constructor(private kandunganService: KandunganService) { }

  ngOnInit(): void {
    // ambil data instances dari service
    this.kandungans = this.kandunganService.getKandungan();
  }

}
