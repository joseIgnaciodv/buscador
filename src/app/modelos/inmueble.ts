export interface Inmueble {
    'id': number,
    'created_at': Date,
    'updated_at': Date,
    'localizaciones_id':number,
    'latitud':number,
    'longitud':number,
    'nombre': string,
    'precio': number,
    'imagenes': Array<string>,
    'descripcion': string,
    'enlace': string,
    'habitaciones': number,
    'banos': number,
    'm2': string,
    'telefono': string,
    'ubicacion': string,
    'caracteristicas': Array<string>
}
