import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public mydiv: HTMLDivElement;
  public textboxgiliran: HTMLInputElement;
  public baris: HTMLInputElement;
  public kolom: HTMLInputElement;

  public giliran: number = 1;
  public papan = new Array(5).fill(0).map(() => new Array(5).fill("*"));
  public name = "Angular " + VERSION.major;

  ngOnInit() {
    this.mydiv = document.getElementById("kotak") as HTMLDivElement;
    this.baris = document.getElementById("tbaris") as HTMLInputElement;
    this.kolom = document.getElementById("tkolom") as HTMLInputElement;
    this.textboxgiliran = document.getElementById(
      "tgiliran"
    ) as HTMLInputElement;
    this.showpapan();
  }

  seticon() {
    var brs = parseInt(this.baris.value);
    var klm = parseInt(this.kolom.value);
    this.papan[brs][klm] = this.giliran;
    this.showpapan();
    this.gantigiliran();
  }

  gantigiliran() {
    if (this.giliran == 1) {
      this.giliran = 2;
    } else {
      this.giliran = 1;
    }
  }

  showpapan() {
    this.textboxgiliran.value = this.giliran.toString();
    var kal = "";
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        kal = kal + this.papan[i][j];
      }
      kal = kal + "<br>";
    }

    this.mydiv.innerHTML = kal;
  }
}
