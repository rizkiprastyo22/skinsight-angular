import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Belanja } from '../belanja.model';
import { serviceListBelanja } from '../list-belanja-service';

@Component({
  selector: 'app-edit-belanja',
  templateUrl: './edit-belanja.component.html',
  styleUrls: ['./edit-belanja.component.css']
})
export class EditBelanjaComponent implements OnInit {

  // inisialisasi variabel input
  @ViewChild('inputNama') inputNamaRef: ElementRef;
  @ViewChild('inputJumlah') inputJumlahRef: ElementRef;

  constructor(private serviceListBelanja: serviceListBelanja) { }

  ngOnInit(): void {
  }

  onTambahItem(): void {
    const namaBelanja = this.inputNamaRef.nativeElement.value;
    const jumlahBelanja = this.inputJumlahRef.nativeElement.value;
    const newBelanja = new Belanja(namaBelanja, jumlahBelanja);
    this.serviceListBelanja.addBelanja(newBelanja);
  }

  onHapusItem(): void {

  }

}
