import Pelada from '@/domain/entities/Pelada';
import Player from '@/domain/entities/Player';

describe('CreatePelada', () => {
	it('should throw exception if the player is not an admin', () => {
		expect(() => {
			Pelada.createPelada('place', 20, 10, new Date(), new Player(1, false));
		}).toThrowError('Você não tem permissão para criar uma pelada');
	});
});
