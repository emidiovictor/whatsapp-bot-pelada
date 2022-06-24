export class NoPermissionToRemovePlayerException extends Error {
	constructor() {
		super('Você não tem permissão para remover um jogador!');
	}
}
