import Pelada from "../src/entities/Pelada";
import { Player } from "../src/entities/Player";

describe('CreatePelada', () => {
  it('should throw exception if the player is not an admin', () => {
    expect(() => {
      Pelada.createPelada('place', 20, 10, new Date(), new Player(1, false));
    }).toThrowError('Você não tem permissão para criar uma pelada');
  });

  it('should thrown exception when try to add a player that is already in the pelada', () => {
    var admin = new Player(1, true);
    var player = new Player(2);
    var pelada = Pelada.createPelada('place', 20, 10, new Date(), admin);
    pelada.addPlayer(player)
    const thrower = pelada;
    expect(() => {
      thrower.addPlayer(player);
    }).toThrowError('O jogador já está na pelada!');
  });

  it('should throw when admin tries to create with date before than today', () => {
    var admin = new Player(1, true);
    expect(() => {
      Pelada.createPelada('place', 20, 10, new Date(2000, 1, 1), admin);
    }).toThrowError('Você não pode criar uma pelada com a data anterior ao dia atual!');

  });
});