import { DataService } from './../services/data.service';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {Avis} from '../models'

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  @Output() avis = new EventEmitter<Avis>();

  @Input() desactiveJaime = false;

  @Input() desactiveDeteste = false;

  constructor() { }

  aimer(){
    this.avis.emit(Avis.AIMER)
  }

  detester(){
    this.avis.emit(Avis.DETESTER)
  }

  ngOnInit(): void {
  }

}
