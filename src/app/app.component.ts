import { Component, OnInit } from '@angular/core';
import { Player } from './player.model';
import { Router } from '@angular/router';
import { PlayerService } from './player.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayerService]
})

export class AppComponent implements OnInit {
  title = 'The wood!';
   players: FirebaseListObservable<any[]>;

   constructor(private router: Router, private playerService: PlayerService) {}

 ngOnInit() {
    this.players = this.playerService.getPlayers();
 }


}
