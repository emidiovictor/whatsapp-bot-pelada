import Pelada from "./Pelada";

export class Player {
  removePlayer(potentialAdmin: Player) {
    if (!this.isAdmin) {
      throw new Error('Você não tem permissão para remover um jogador!');
    }
  }
  invitePlayer(potentialAdmin: Player) {
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