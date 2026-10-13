import { Service } from '@angular/core';

import { Tarea } from '../model/tarea';

@Service()
export class TareaService {
  // TODO: cargar las 12 tareas del seed de api/db/00.sql
  private tareas: Tarea[] = [];

  // TODO: obtenerTodas, obtenerPorId, crear, actualizar, eliminar
}
