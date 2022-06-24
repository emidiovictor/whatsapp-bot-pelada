import Pelada from "../src/entities/Pelada";
import Player from "../src/entities/Player";

describe('AddPleada', () => {
  it('should thrown exception when try to add a player that is already in the pelada', () => {
    var admin = new Player(1, true);
    var player = new Player(2);
    var pelada = Pelada.createPelada('place', 20, 10, new Date(), admin);
    pelada.addPlayer(player)
    const thrower = pelada;
    expect(() => {
      thrower.addPlayer(player);
    }).toThrowError('O jogador já está na pelada!');
  })

  it('should thrown exception when a user whoe is not admin tries to invite a player', () => {
    var notAdminPlayer = new Player(1, false);
    expect(() => {
      notAdminPlayer.invitePlayer(new Player(2, false));
    }
    ).toThrowError('Você não tem permissão para convidar um jogador!');
  })

  it('should thrown exception when a user whoe is admin tries to remove a player', () => {
    var notAdmin = new Player(1, false);
    expect(() => {
      notAdmin.removePlayer(new Player(2, false));
    }
    ).toThrowError('Você não tem permissão para remover um jogador!');
  })
});