import { PeladaService } from '@/services/PeladaService';

describe('PeladaService', () => {
	it('create pelada should throw exception when command is invalid', () => {
		const sut = new PeladaService();
		expect(() => sut.createPelada('.criar')).toThrowError(
			'Para criar uma pelada, utilize o comando: .criar <nome> <data> <horario>',
		);
	});
});
