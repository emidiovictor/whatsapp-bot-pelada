export class PlayerIsAlreadyInThePelada extends Error {
	constructor(message?: string) {
		super(message);
		this.name = 'PlayerIsAlreadyInThePelada';
		this.message = message || 'O jogador já está na pelada!';
	}
}
