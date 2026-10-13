import { Service } from '@angular/core';

import { Usuario } from '../model/usuario';

@Service()
export class UsuarioService {
  // TODO: cargar los 6 usuarios del seed de api/db/00.sql
  private usuarios: Usuario[] = [];

  // TODO: obtenerTodos, obtenerPorId, crear, actualizar, eliminar
}
