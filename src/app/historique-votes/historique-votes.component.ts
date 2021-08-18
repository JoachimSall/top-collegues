import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import {Avis, Vote} from './../models'
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {

  Avis = Avis;
  votes! : Vote[];

  constructor(public service:DataService) {
  }

  ngOnInit(): void {
    this.refresh()
  }

  refresh() {
    this.service.listerVotes()
      .then(votes => this.votes = votes);
    //TP rxjs
    // this.service.listerVotesObs()
    //   .subscribe(votes => this.votes = votes)
  }


  supprimerVote(index: number) {
    this.votes.splice(index, 1);
  }

}
