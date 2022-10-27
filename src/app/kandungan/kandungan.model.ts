export class Kandungan{
  public id: number = 0;
  public nama: String;
  public nama_lain: String;
  public nama_iupac: String;
  public fungsi: String;
  public deskripsi: String;

  constructor(id: number, nama: String, nama_lain: String,
    nama_iupac: String, fungsi: String, deskripsi: String){
      this.id = id;
      this.nama = nama;
      this.nama_lain = nama_lain;
      this.nama_iupac = nama_iupac;
      this.fungsi = fungsi;
      this.deskripsi = deskripsi;
    }
}
