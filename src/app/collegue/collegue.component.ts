import { DataService } from './../services/data.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import {Collegue, Avis} from '../models';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() collegue? : Collegue = {
    pseudo: 'Jean Miche Miche',
    score: 0,
    photo: 'https://thispersondoesnotexist.com/image'
  }
  err = false;

  constructor(public service : DataService){ }


  //collegue?: Collegue;

  ngOnInit(): void {
  }

  changerScore(avis: Avis){

    if(avis === Avis.AIMER){
      this.collegue!.score += 100
    } else if (avis === Avis.DETESTER){
      this.collegue!.score -= 100
    }
    this.service.donnerUnAvis(this.collegue!, avis)

    //TP rxjs
    // if (this.collegue){
    //   this.service.donnerUnAvisObs(this.collegue!, avis)
    //   .subscribe(
    //     collegue => this.collegue = collegue,
    //     () => this.err = false
    //     )
    // }


  }

  desactiverJaime(): boolean {
    return this.collegue!.score >= 1000
  }

  desactiverDeteste(): boolean {
    return this.collegue!.score <= -1000
  }

}
