export class PlayerIsNotInThePeladaException extends Error {
	constructor(message?: string) {
		super(message);
		this.name = 'PlayerIsNotInThePeladaException';
		this.message = message || 'O jogador não está na pelada!';
	}
}
