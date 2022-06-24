export class NoPermissionToInvitePlayerException extends Error {
  constructor() {
    super('Você não tem permissão para criar uma pelada!');
  }
}