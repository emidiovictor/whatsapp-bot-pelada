import { NoPermissionToCreatePeladaException } from "./errors/NoPermissionToCreatePeladaException";
import { PlayerIsAlreadyInThePelada } from "./errors/PlayersIsAlreadyInThePelada";
import { Player } from "./Player";

class Pelada {
  private constructor(
    readonly place: string,
    readonly maxPlayers: number,
    readonly minPlayers: number,
    readonly date: Date,
    readonly players: Player[],
    readonly owner?: Player) {
  }

  addPlayer = (player: Player) => {
    if (this.players.some(p => p.id === player.id)) {
      throw new PlayerIsAlreadyInThePelada();
    }
    this.players.push(player);
  }

  static createPelada(
    place: string,
    maxPlayers: number = 20,
    minPlayers: number = 10,
    date: Date,
    owner: Player) {

    if (owner.isAdmin === false) {
      throw new NoPermissionToCreatePeladaException();
    }
    var currentDate = new Date();
    if (date < currentDate) {
      throw new Error('Você não pode criar uma pelada antes de ter terminado a pelada atual!');
    }

    return new Pelada(place, maxPlayers, minPlayers, date, [owner]);
  }
}
export default Pelada;