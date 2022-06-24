import Pelada from "../src/entities/Pelada";
import Player from "../src/entities/Player";

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