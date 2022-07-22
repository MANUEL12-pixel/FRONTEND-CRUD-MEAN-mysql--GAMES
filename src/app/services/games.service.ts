import { Injectable } from '@angular/core';
import { keys } from 'src/environments/keys';
import { Games } from '../models/games';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get(keys.urlBackend + keys.table.games)
  }

  getGame(id: number) {
    return this.http.get(keys.urlBackend + keys.table.games + "/" + id);
  }

  deleteGame(id: number) {
    return this.http.delete(keys.urlBackend + keys.table.games + "/" + id)
  }

  saveGame(game: Games) {
    return this.http.post(keys.urlBackend + keys.table.games, game)
  }

  updateGame(id: number, updateGame: Games) {
    return this.http.put(keys.urlBackend + keys.table.games + "/" + id, updateGame)
  }
}
