import { Injectable } from '@angular/core';
import { Collegue, Avis, Vote } from '../models';
import { HttpClient } from '@angular/common/http';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  c: Collegue = {
    pseudo: "Jean",
    score: 0,
    photo:'https://thispersondoesnotexist.com/image'
  }

  listerCollegues(): Promise<Collegue[]> {

    return fetch('https://formation-angular-collegues.herokuapp.com/collegues')
      .then((resp) => resp.json())
      .catch((error) => error.json())
  }


  donnerUnAvis(collegue: Collegue, avis: Avis): Promise<Collegue> {
    const vote = {
      pseudo: collegue.pseudo,
      avis
    }
    return fetch(new Request(
      'https://formation-angular-collegues.herokuapp.com/votes',
      {
        method : 'POST',
        body : JSON.stringify(vote),
        headers :  {'Content-Type': 'application/json'}
      }
    ))
    .then((resp) => resp.json())
    .catch((error) => error.json())
  }

  donnerUnAvisObs(collegue: Collegue, avis: Avis) {
    const vote = {
      pseudo: collegue.pseudo,
      avis
    }
    return this.http.post(
      'https://formation-angular-collegues.herokuapp.com/votes',
      vote
    )
  }

  listerVotes(): Promise<Vote[]> {
    return fetch('https://formation-angular-collegues.herokuapp.com/votes')
    .then((resp) => resp.json())
    .catch((error) => error.json())
  }

  listerVotesObs(){
    return this.http.get<Vote[]>("https://formation-angular-collegues.herokuapp.com/votes")
  }
}
