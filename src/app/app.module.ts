import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { KandunganComponent } from './kandungan/kandungan.component';
import { ProdukComponent } from './produk/produk.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    KandunganComponent,
    ProdukComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
