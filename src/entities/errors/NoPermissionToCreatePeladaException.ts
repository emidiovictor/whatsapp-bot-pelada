export class NoPermissionToCreatePeladaException extends Error {
  constructor(message?: string | undefined) {
    super(message);
    this.name = 'NoPermissionToCreatePeladaException';
    this.message = message || 'Você não tem permissão para criar uma pelada!';
  }
}