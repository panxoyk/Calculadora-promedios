export type Tipo = 'promedio' | 'nota' | 'personalizado'

export interface Evaluacion {
    id: number
    nombre: string
    porcentaje: number | string
    notas: Nota[]
    tipo: Tipo
}

export interface Nota {
    id: number
    nombre: string
    porcentaje: number | string
    calificacion: number | string
}