import { Component, OnInit } from '@angular/core';
import { Kandungan } from './kandungan.model';
import { KandunganService } from './kandungan.service';

@Component({
  selector: 'app-kandungan',
  templateUrl: './kandungan.component.html',
  styleUrls: ['./kandungan.component.css'],
  providers: [KandunganService]
})
export class KandunganComponent implements OnInit {

  // mendefinisikan variabel dari model
  selectedKandungan: Kandungan;

  constructor(private kandunganService: KandunganService) { }

  ngOnInit(): void {
    this.kandunganService.kandunganSelected
      .subscribe(
        (kandungan: Kandungan) => {
          this.selectedKandungan = kandungan;
        }
      )
  }

}
