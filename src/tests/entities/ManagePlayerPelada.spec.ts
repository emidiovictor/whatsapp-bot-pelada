import Pelada from '@/domain/entities/Pelada';
import Player from '@/domain/entities/Player';
import { addDays } from 'date-fns';

const futureDate = addDays(new Date(), 1);

describe('AddPleada', () => {
	it('should thrown exception when try to add a player that is already in the pelada', () => {
		const admin = new Player('1', 'admin', true);
		const player = new Player('2', 'player');
		const pelada = Pelada.createPelada('place', 20, 10, futureDate, admin);
		pelada.addPlayer(player);
		const thrower = pelada;
		expect(() => {
			thrower.addPlayer(player);
		}).toThrowError('O jogador já está na pelada!');
	});

	it('should thrown exception when a user whoe is not admin tries to invite a player', () => {
		const admin = new Player('1', 'admin', true);
		const notAdmin = new Player('2', 'notAdmin');
		const player2 = new Player('3', 'player2');
		const pelada = Pelada.createPelada('place', 20, 10, futureDate, admin);
		expect(() => {
			pelada.invitePlayer(notAdmin, player2);
		}).toThrowError('Você não tem permissão para convidar jogadores');
	});

	it('should thrown exception when a user whoe is admin tries to kick a player', () => {
		const admin = new Player('1', 'admin', true);
		const notAdmin = new Player('2', 'notAdmin');
		const player2 = new Player('3', 'player2');
		const pelada = Pelada.createPelada('place', 20, 10, futureDate, admin);
		expect(() => {
			pelada.kickPlayer(notAdmin, player2);
		}).toThrowError('Você não tem permissão para remover um jogador!');
	});

	it('should kick a player with success when use is admin', () => {
		const admin = new Player('1', 'admin', true);
		const player = new Player('2', 'notAdmin');
		const pelada = Pelada.createPelada('place', 20, 10, futureDate, admin);
		pelada.addPlayer(player);
		pelada.kickPlayer(admin, player);
		expect(pelada.getPlayers.length).toBe(0);
	});

	it('should throw exception when try to kick a player that is not in the pelada', () => {
		const admin = new Player('1', 'admin', true);
		const player = new Player('2', 'notAdmin');
		const pelada = Pelada.createPelada('place', 20, 10, futureDate, admin);
		expect(() => {
			pelada.kickPlayer(admin, player);
		}).toThrowError('O jogador não está na pelada!');
	});

	it('A player should be able to join a list for the Pealda', () => {
		const admin = new Player('1', 'admin', true);
		const player = new Player('2', 'notAdmin');
		const pelada = Pelada.createPelada('place', 20, 10, futureDate, admin);
		pelada.addPlayer(player);
		expect(pelada.players.length).toBe(2);
	});

	it('An admin should be able to invite a player to the pelada', () => {
		const admin = new Player('1', 'admin', true);
		const player = new Player('2', 'notAdmin');
		const pelada = Pelada.createPelada('place', 20, 10, futureDate, admin);
		pelada.invitePlayer(admin, player);
		expect(pelada.players.length).toBe(2);
	});
});
