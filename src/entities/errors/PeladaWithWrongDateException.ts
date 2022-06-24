export class PeladaWithWrongDateException extends Error {
	constructor(message?: string) {
		super(message);
		this.name = 'PeladaWithWrongDateException';
		this.message = this.message = 'Você não pode criar uma pelada com a data anterior ao dia atual!';
	}
}
