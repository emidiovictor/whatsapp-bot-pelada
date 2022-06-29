import Pelada from './Pelada';

export class Player {
	constructor(
		readonly phoneNumber: string,
		readonly name: string,
		readonly isAdmin: boolean = false,
		readonly peladaOwner?: Pelada,
	) {}
}

export default Player;
