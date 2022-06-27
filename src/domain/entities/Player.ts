import Pelada from './Pelada';

export class Player {
	constructor(readonly id: number, readonly isAdmin: boolean = false, readonly peladaOwner?: Pelada) {}
}

export default Player;
