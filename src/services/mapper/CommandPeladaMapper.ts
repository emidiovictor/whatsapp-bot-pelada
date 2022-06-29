/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { isMatch, parse } from 'date-fns';
import { ICommandPeladaMapper } from './ICommandPeladaMapper';
export interface CreatePeladCommand {
	peladaInfo: {
		date: Date;
		place: string;
	};
	ownerInfo: {
		name: string;
		number: string;
	};
}

export class CommandPeladaMapper implements ICommandPeladaMapper {
	MapCreatePelada(command: string, ownerInfo: { name: string; phoneNumber: string }): CreatePeladCommand {
		const splittedCommand = command.split(' ');
		const args = splittedCommand.slice(1);
		const validatedArgs: { date?: Date; time?: string; place?: string } = {};
		const regexHour = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

		for (const arg of args) {
			if (isMatch(arg, 'dd/MM/yyyy')) {
				validatedArgs.date = parse(arg, 'dd/MM/yyyy', new Date());
				continue;
			}
			if (regexHour.test(arg)) {
				validatedArgs.time = arg;
				continue;
			}
			validatedArgs.place = arg;
		}
		const dateTime = parse(
			`${validatedArgs.date?.toLocaleDateString()} ${validatedArgs.time}`,
			'dd/MM/yyyy HH:mm',
			new Date(),
		);
		return {
			peladaInfo: {
				date: dateTime,
				place: validatedArgs.place!,
			},
			ownerInfo: {
				name: ownerInfo.name,
				number: ownerInfo.phoneNumber,
			},
		};
	}
}
