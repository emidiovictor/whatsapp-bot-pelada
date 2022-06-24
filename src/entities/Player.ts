import { NoPermissionToInvitePlayerException } from "./errors/NoPermissionToInvitePlayerException";
import { NoPermissionToRemovePlayerException } from "./errors/NoPermissionToRemovePlayerException";
import Pelada from "./Pelada";

export class Player {
  removePlayer(potentialAdmin: Player) {
    if (!this.isAdmin) {
      throw new NoPermissionToRemovePlayerException();
    }
  }
  invitePlayer(potentialAdmin: Player) {
    if (!this.isAdmin) {
      throw new NoPermissionToInvitePlayerException();
    }
  }

  constructor(
    readonly id: number,
    readonly isAdmin: boolean = false,
    readonly peladaOwner?: Pelada) {
  }
}

export default Player;