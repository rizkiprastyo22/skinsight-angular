import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { KandunganComponent } from './kandungan/kandungan.component';
import { ProdukComponent } from './produk/produk.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { HeroProdukComponent } from './produk/hero-produk/hero-produk.component';
import { HeroKandunganComponent } from './kandungan/hero-kandungan/hero-kandungan.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    KandunganComponent,
    ProdukComponent,
    HeroComponent,
    FooterComponent,
    HeroProdukComponent,
    HeroKandunganComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
