import {
	NoPermissionToCreatePeladaException,
	NoPermissionToInvitePlayerException,
	NoPermissionToRemovePlayerException,
	PeladaWithWrongDateException,
	PlayerIsAlreadyInThePelada,
	PlayerIsNotInThePeladaException,
} from './errors';
import { Player } from './Player';

class Pelada {
	private constructor(
		readonly place: string,
		readonly maxPlayers: number,
		readonly minPlayers: number,
		readonly date: Date,
		public players: Player[],
		readonly owner?: Player,
		readonly active?: boolean,
	) {}

	invitePlayer(potentialAdemin: Player, player: Player) {
		if (!potentialAdemin.isAdmin) {
			throw new NoPermissionToInvitePlayerException();
		}
		this.players.push(player);
	}
	kickPlayer(potentialAdemin: Player, playerToRemove: Player) {
		if (!potentialAdemin.isAdmin) {
			throw new NoPermissionToRemovePlayerException();
		}
		if (!this.players.includes(playerToRemove)) {
			throw new PlayerIsNotInThePeladaException();
		}

		this.players = this.players.filter((player) => player !== playerToRemove);
	}
	addPlayer = (player: Player) => {
		if (this.players.some((p) => p.phoneNumber === player.phoneNumber)) {
			throw new PlayerIsAlreadyInThePelada();
		}
		this.players.push(player);
	};

	static createPelada(place: string, maxPlayers = 20, minPlayers = 10, date: Date, owner: Player) {
		if (owner.isAdmin === false) {
			throw new NoPermissionToCreatePeladaException();
		}
		const currentDate = new Date();
		if (date < currentDate) {
			throw new PeladaWithWrongDateException();
		}

		return new Pelada(place, maxPlayers, minPlayers, date, [owner], undefined, true);
	}

	getPlayers = () => this.players;
}
export default Pelada;
