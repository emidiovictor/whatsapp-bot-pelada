import Pelada from '../src/entities/Pelada';
import Player from '../src/entities/Player';

describe('AddPleada', () => {
  it('should thrown exception when try to add a player that is already in the pelada', () => {
    var admin = new Player(1, true);
    var player = new Player(2);
    var pelada = Pelada.createPelada('place', 20, 10, new Date(), admin);
    pelada.addPlayer(player);
    const thrower = pelada;
    expect(() => {
      thrower.addPlayer(player);
    }).toThrowError('O jogador já está na pelada!');
  });

  it('should thrown exception when a user whoe is not admin tries to invite a player', () => {
    var admin = new Player(1, true);
    var notAdmin = new Player(2);
    var player2 = new Player(2);
    var pelada = Pelada.createPelada('place', 20, 10, new Date(), admin);
    expect(() => {
      pelada.invitePlayer(notAdmin, player2);
    }).toThrowError('Você não tem permissão para convidar jogadores');
  });

  it('should thrown exception when a user whoe is admin tries to kick a player', () => {
    const admin = new Player(1, true);
    const notAdmin = new Player(2);
    const player2 = new Player(2);
    const pelada = Pelada.createPelada('place', 20, 10, new Date(), admin);
    expect(() => {
      pelada.kickPlayer(notAdmin, player2);
    }).toThrowError('Você não tem permissão para remover um jogador!');
  });
});
