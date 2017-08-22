import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css'],
  providers: [PlayerService]
})
export class NewPlayerComponent implements OnInit {
  player: FirebaseListObservable<any[]>;

  constructor(
    // private router: Router,
    private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(name: string, playerClass: string, weapon: string, vitality: number) {
    var newPlayer: Player = new Player(name, playerClass, weapon, vitality);
    this.playerService.addPlayer(newPlayer);

  }

//   goToDetailPage(clickedPlayer: Player) {
//   this.router.navigate(['players', clickedPlayer.$key]);
// }

}
