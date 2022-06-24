import Pelada from '../src/entities/Pelada';
import { Player } from '../src/entities/Player';

describe('CreatePelada', () => {
  it('should throw exception if the player is not an admin', () => {
    expect(() => {
      Pelada.createPelada('place', 20, 10, new Date(), new Player(1, false));
    }).toThrowError('Você não tem permissão para criar uma pelada');
  });

  it('should throw when admin tries to create with date before than today', () => {
    const admin = new Player(1, true);
    expect(() => {
      Pelada.createPelada('place', 20, 10, new Date(2000, 1, 1), admin);
    }).toThrowError(
      'Você não pode criar uma pelada com a data anterior ao dia atual!'
    );
  });
});
