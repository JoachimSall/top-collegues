import { Component, Input, OnInit, Output } from '@angular/core';
import {Collegue, Avis} from './../model';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  c: Collegue = {
    pseudo: 'Jean Miche Miche',
    score: 0,
    photoUrl:'https://thispersondoesnotexist.com/image'
  }
  constructor() { }

  changerScore(avis: Avis){
    console.log("test");

    if(avis === Avis.AIMER){
      this.c.score += 1
    } else if (avis === Avis.DETESTER){
      this.c.score -= 1
    }
  }
  ngOnInit(): void {
  }

}
