import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Avis} from './../model'

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  @Output("test") avis = new EventEmitter<Avis>();

  aimer(){
    this.avis.emit(Avis.AIMER)
  }

  detester(){
    this.avis.emit(Avis.DETESTER)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
