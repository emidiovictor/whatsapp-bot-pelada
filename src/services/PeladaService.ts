import { IPeladaRepository } from '@/domain/entities/repositories/IPeladaRepository';
import { isMatch, parse } from 'date-fns';

export class PeladaService {
	constructor(private readonly peladaRepository: IPeladaRepository) {}
	async createPelada(command: string): Promise<void> {
		const splittedCommand = command.split(' ');
		if (splittedCommand.length < 3) {
			throw new Error('Para criar uma pelada, utilize o comando: .criar <nome> <data> <horario>');
		}
		const args = splittedCommand.slice(1);
		const validatedArgs: { date?: Date; time?: string; place?: string } = {};
		const regexHour = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

		for (const arg of args) {
			if (isMatch(arg, 'dd/MM/yyyy')) {
				validatedArgs.date = parse(arg, 'dd/MM/yyyy', new Date());
				continue;
			}
			if (regexHour.test(arg)) {
				validatedArgs.time = arg;
				continue;
			}
			validatedArgs.place = arg;
		}
		const runningPelada = await this.peladaRepository.getLastPeladaActive();
		if (runningPelada) {
			throw new Error('Já existe uma pelada rolando!');
		}
	}
}
