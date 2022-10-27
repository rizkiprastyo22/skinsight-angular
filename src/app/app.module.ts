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
import { ListKandunganComponent } from './kandungan/list-kandungan/list-kandungan.component';
import { DetailKandunganComponent } from './kandungan/detail-kandungan/detail-kandungan.component';
import { ItemKandunganComponent } from './kandungan/list-kandungan/item-kandungan/item-kandungan.component';
import { ListProdukComponent } from './produk/list-produk/list-produk.component';
import { DetailProdukComponent } from './produk/detail-produk/detail-produk.component';
import { ItemProdukComponent } from './produk/list-produk/item-produk/item-produk.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    KandunganComponent,
    ProdukComponent,
    HeroComponent,
    FooterComponent,
    HeroProdukComponent,
    HeroKandunganComponent,
    ListKandunganComponent,
    DetailKandunganComponent,
    ItemKandunganComponent,
    ListProdukComponent,
    DetailProdukComponent,
    ItemProdukComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
