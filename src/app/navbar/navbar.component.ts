import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // memilih suatu fitur
  @Output() featureSelect = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  // fitur yang dipilih akan dilakukan
  onSelect(feature: String){
    this.featureSelect.emit(feature)
  }

}
