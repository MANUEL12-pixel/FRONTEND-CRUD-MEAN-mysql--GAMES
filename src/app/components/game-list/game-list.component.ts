import { Component, OnInit, HostBinding } from '@angular/core';

import { GamesService } from '../../services/games.service';
import { Games } from 'src/app/models/games';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  games: any = [];

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.obtenerJuegos();
  }

  obtenerJuegos() {
    this.gameService.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.log(err)
    );
  }

  eliminarJuego(id: number) {
    this.gameService.deleteGame(id)
      .subscribe(
        res => {
          console.log(res);
          this.obtenerJuegos();
        },
        err => console.log(err)
      )
  }

}
