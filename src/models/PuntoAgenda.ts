
class PuntoAgenda {
  id: String;
  titulo: string;
  orden: number;
  expositor: any; 
  descripcion: string;
  tiempoEstimado: Date;
  fechaLimite: Date;
  estado: 'pendiente' | 'en progreso' | 'completado';
  prioridad: 'baja' | 'media' | 'alta';

  constructor(
    id: number,
    titulo: string,
    descripcion: string,
    fechaCreacion: Date,
    fechaLimite: Date,
    estado: 'pendiente' | 'en progreso' | 'completado',
    prioridad: 'baja' | 'media' | 'alta'
  ) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fechaCreacion = fechaCreacion;
    this.fechaLimite = fechaLimite;
    this.estado = estado;
    this.prioridad = prioridad;
  }
}