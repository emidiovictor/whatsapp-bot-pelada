export class PeladaService {
	createPelada(command: string): void {
		const splittedCommand = command.split(' ');
		if (splittedCommand.length !== 4) {
			throw new Error('Para criar uma pelada, utilize o comando: .criar <nome> <data> <horario>');
		}
		throw new Error('Method not implemented.');
	}
}
