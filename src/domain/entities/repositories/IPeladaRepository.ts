import Pelada from '../Pelada';

export interface IPeladaRepository {
	getLastPeladaActive(): Promise<Pelada>;
	createPelada(pelada: Pelada): Promise<void>;
}
