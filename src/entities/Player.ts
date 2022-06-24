import Pelada from "./Pelada";

export class Player {
  invitePlayer(player: Player) {
    if (!this.isAdmin) {
      throw new Error('Você não tem permissão para convidar um jogador!');
    }
  }

  constructor(
    readonly id: number,
    readonly isAdmin: boolean = false,
    readonly peladaOwner?: Pelada) {
  }
}

export default Player;