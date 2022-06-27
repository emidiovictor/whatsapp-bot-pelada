import { PeladaService } from '@/services/PeladaService';

describe('PeladaService', () => {
	it('create pelada should throw exception when command is invalid', () => {
		const sut = new PeladaService();
		expect(() => sut.createPelada('.criar')).toThrowError(
			'Para criar uma pelada, utilize o comando: .criar <nome> <data> <horario>',
		);
	});

	it('createPelada should throw exception when commands has date is before than last active pelada', () => {
		const sut = new PeladaService();
		expect(() => sut.createPelada('.criar 01/32/2020 qualquerLocal 19:00')).toThrowError('Data inválida');
	});
});
