import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Belanja } from '../belanja.model';

@Component({
  selector: 'app-edit-belanja',
  templateUrl: './edit-belanja.component.html',
  styleUrls: ['./edit-belanja.component.css']
})
export class EditBelanjaComponent implements OnInit {

  // inisialisasi variabel input
  @ViewChild('inputNama') inputNamaRef: ElementRef;
  @ViewChild('inputJumlah') inputJumlahRef: ElementRef;
  @Output() tambahBelanja = new EventEmitter<Belanja>();

  constructor() { }

  ngOnInit(): void {
  }

  onTambahItem(): void {
    const namaBelanja = this.inputNamaRef.nativeElement.value;
    const jumlahBelanja = this.inputJumlahRef.nativeElement.value;
    const newBelanja = new Belanja(namaBelanja, jumlahBelanja);
    this.tambahBelanja.emit(newBelanja);
  }

  onHapusItem(): void {

  }

}
