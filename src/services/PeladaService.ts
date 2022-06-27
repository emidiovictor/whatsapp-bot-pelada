import { isMatch, parse } from 'date-fns';

export class PeladaService {
	createPelada(command: string): void {
		const splittedCommand = command.split(' ');
		if (splittedCommand.length < 4) {
			throw new Error('Para criar uma pelada, utilize o comando: .criar <nome> <data> <horario>');
		}
		const args = splittedCommand.slice(1);
		const validatedArgs: { date?: Date; time?: string; place?: string } = {};
		for (const arg of args) {
			if (isMatch(arg, 'dd/MM/yyyy')) {
				validatedArgs.date = parse(arg, 'dd/MM/yyyy', new Date());
				continue;
			}
			const regexHour = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
			if (regexHour.test(arg)) {
				validatedArgs.time = arg;
				continue;
			}
			validatedArgs.place = arg;
		}

		if (!validatedArgs.date) {
			throw new Error('Data inválida');
		}
	}
}

//.criar 31/02/2020 qualquerLocal 19:00
