import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  tebak = "";
  asli: Number;
  alamat = "https://tse4.mm.bing.net/th?id=OIP.VjGNlsCW2WxHS4fKSOScaAAAAA&pid=Api&P=0&w=163&h=156";
  constructor() {}

  ngOnInit() {
    this.asli = this.randomIntFromInterval(1, 5);
    document.getElementById('correct_image').style.display = 'none';
  }

  randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  cekSama(){
    if (this.asli != Number(this.tebak)){
      alert("Salah");
    }
    else{
      alert("Benar");
      document.getElementById('correct_image').style.display = 'block';
    }
    alert(this.asli)
  }

}
