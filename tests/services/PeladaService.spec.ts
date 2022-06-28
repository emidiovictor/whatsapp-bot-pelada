import Pelada from '@/domain/entities/Pelada';
import Player from '@/domain/entities/Player';
import { IPeladaRepository } from '@/domain/entities/repositories/IPeladaRepository';
import { PeladaService } from '@/services/PeladaService';

const createSut = (): PeladaService => {
	const peladaRepository = {
		getLastPeladaActive: jest.fn(() =>
			Promise.resolve(Pelada.createPelada('place', 20, 10, new Date(), new Player(1, true))),
		),
	} as IPeladaRepository;
	return new PeladaService(peladaRepository);
};

describe('PeladaService', () => {
	it('create pelada should throw exception when command is invalid', () => {
		const sut = createSut();
		expect(sut.createPelada('.criar')).rejects.toThrowError(
			'Para criar uma pelada, utilize o comando: .criar <nome> <data> <horario>',
		);
	});

	it('should throw when admin tries to create one pelada but there is already one running', () => {
		const sut = createSut();
		expect(sut.createPelada('.criar 31/02/2020 qualquerLocal 19:00')).rejects.toThrow('Já existe uma pelada rolando!');
	});
});
