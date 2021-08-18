import { Collegue } from '../models';
import { mockCollegues } from './../mockData';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accueil-component',
  templateUrl: './accueil-component.component.html',
  styleUrls: ['./accueil-component.component.css']
})
export class AccueilComponentComponent implements OnInit {

  mockCollegues = mockCollegues

  constructor() { }

  recharger(){
    window.location.reload()
  }

  ngOnInit(): void {
  }

}
