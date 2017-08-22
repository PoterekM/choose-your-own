import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
// import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css']
})
export class NewPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(name: string, playerClass: string, weapon: string, vitality: number) {
    var newPlayer: Player = new Player(name, playerClass, weapon, vitality);
    console.log(newPlayer);
  }


}
