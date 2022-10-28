import { EventEmitter } from "@angular/core";
import { Kandungan } from "./kandungan.model";

// nanti ngolah datanya di sini
export class KandunganService{

  // buat variabel kandunganSelected dari model
  kandunganSelected = new EventEmitter<Kandungan>();

  // import model dan create new instance
  private kandungans: Kandungan[] = [
    new Kandungan(1, "Hyaluronic Acid", "Hyaluronic Acid", "Hyaluronic Acid", "Antistatik, Humektan, Pelembab, Skin Conditioner", "Antistatik, Humektan, Pelembab, dll"),
    new Kandungan(2, "Glycerine", "Glycerol", "Glycerine", "Denaturant, Hair Conditioner, Humektan, Perawatan Mulut, Pewangi, Skin Conditioner, Pelindung Kulit, Pelarut, Pengontrol Kekentalan", "Denaturant, Hair Conditioner, dll")
  ]

  // ambil data instance
  getKandungan(){
    return this.kandungans.slice();
  }
}
