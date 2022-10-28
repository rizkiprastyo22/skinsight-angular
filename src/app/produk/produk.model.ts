import { Belanja } from "../list-belanja/belanja.model";

// inisialisasi variabel pada object produk
export class Produk{
  public id: number = 0;
  public nama: String;
  public merk: String;
  public deskripsi: String;
  public deskripsi_panjang: String;
  public is_ready: boolean = true;
  public gambar: String;
  public belanja_produk: Belanja[];

  constructor(id: number, nama: String, merk: String, deskripsi: String,
    deskripsi_panjang: String, is_ready: boolean, gambar: String, belanja_produk: Belanja[]) {
      this.id = id;
      this.nama = nama;
      this.merk = merk;
      this.deskripsi = deskripsi;
      this.deskripsi_panjang = deskripsi_panjang;
      this.is_ready = is_ready;
      this.gambar = gambar;
      this.belanja_produk = belanja_produk;
    }
}
