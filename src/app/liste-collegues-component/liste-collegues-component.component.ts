import { Collegue } from '../models';
import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.css']
})
export class ListeColleguesComponentComponent implements OnInit {

  //données statiques "mockData"
  //@Input() collegues : Collegue[] = []

  constructor(public service: DataService) { }

  collegues$ = this.service.listerCollegues()

  ngOnInit(): void {
  }

}
