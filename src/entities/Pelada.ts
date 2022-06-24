import { NoPermissionToCreatePeladaException } from "./errors/NoPermissionToCreatePeladaException";
import { NoPermissionToInvitePlayerException } from "./errors/NoPermissionToInvitePlayerException";
import { NoPermissionToRemovePlayerException } from "./errors/NoPermissionToRemovePlayerException";
import { PeladaWithWrongDateException } from "./errors/PeladaWithWrongDateException";
import { PlayerIsAlreadyInThePelada } from "./errors/PlayersIsAlreadyInThePelada";
import { Player } from "./Player";

class Pelada {
  invitePlayer(potentialAdemin: Player, player: Player) {
    if (!potentialAdemin.isAdmin) {
      throw new NoPermissionToInvitePlayerException();
    }
  }
  kickPlayer(potentialAdemin: Player, playerToRemove: Player) {
    if (!potentialAdemin.isAdmin) {
      throw new NoPermissionToRemovePlayerException();
    }
  }
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
      throw new PeladaWithWrongDateException()
    }

    return new Pelada(place, maxPlayers, minPlayers, date, [owner]);
  }
}
export default Pelada;