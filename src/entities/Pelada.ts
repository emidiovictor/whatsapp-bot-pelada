import { NoPermissionToCreatePeladaException } from "./errors/NoPermissionToCreatePeladaException";
import { PeladaWithWrongDateException } from "./errors/PeladaWithWrongDateException";
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
  invitePlayer(potentialAdmin: Player, player: Player) {
    if (!potentialAdmin.isAdmin) {
      throw new Error('Você não tem permissão para convidar um jogador!');
    }
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
      throw new PeladaWithWrongDateException()
    }

    return new Pelada(place, maxPlayers, minPlayers, date, [owner]);
  }
}
export default Pelada;