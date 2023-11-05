export interface Promedio {
    id: number
    nombre: string
    porcentaje: number
    notas: Nota[]
}

export interface Nota {
    id: number
    nombre: string
    evaluacion: number | string
}