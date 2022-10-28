// model untuk object produk yang akan dilempar ke wishlist
export class BelanjaProduk{
  public nama: String;
  public jumlah: number = 0;

  constructor(nama: String, jumlah: number){
    this.nama = nama;
    this.jumlah = jumlah;
  }
}
