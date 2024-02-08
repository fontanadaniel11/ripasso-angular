import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vettore:string[]; //dichiaro vettore
  constructor(){// definisce le proprietà
    this.vettore = ["uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "dieci"]
  }
}