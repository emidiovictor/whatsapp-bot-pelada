import { CreatePeladCommand } from './CommandPeladaMapper';

export interface ICommandPeladaMapper {
	MapCreatePelada(command: string, ownerInfo: { name: string; phoneNumber: string }): CreatePeladCommand;
}
