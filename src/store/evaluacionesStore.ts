import { create } from 'zustand'
import { Evaluacion, Tipo } from '../types/types'
import { evaluacionesItem, setEvaluacionesItem } from '../utility/utility'

interface EvaluacionesState {
    evaluaciones: Evaluacion[]
    addEvaluacion: () => void
    deleteEvaluacion: (idEvaluacion: number) => void
    changeEvaluacionNombre: (idEvaluacion: number, nuevoNombre: string) => void
    changeEvaluacionPorcentaje: (idEvaluacion: number, nuevoPorcentaje: number | string) => void
    changeEvaluacionTipo: (idEvaluacion: number, nuevoTipo: Tipo) => void
    addNota: (idNota: number) => void
    deleteNota: (idEvaluacion: number, idNota: number) => void
    changeNotaNombre: (idEvaluacion: number, idNota: number, nuevoNombre: string) => void
    changeNotaCalificacion: (idEvaluacion: number, idNota: number, nuevaEvaluacion: number) => void
    changeNotaPorcentaje: (idEvaluacion: number, idNota: number, nuevoPorcentaje: number | string) => void
    resultado: number
    calculateResultado: () => void
}

export const useEvaluacionesStore = create<EvaluacionesState>((set, get) => ({
    evaluaciones: evaluacionesItem
        ? JSON.parse(evaluacionesItem)
        : [{
            id: 1,
            nombre: '',
            porcentaje: '',
            notas: [{ id: 1, nombre: '', calificacion: '' }],
            tipo: 'promedio'
        }],
    addEvaluacion: () => {
        const { evaluaciones } = get()
        set({
            evaluaciones: [
                ...evaluaciones,
                {
                    id: evaluaciones.length + 1,
                    nombre: '',
                    porcentaje: '',
                    notas: [{
                        id: 1, nombre: '', porcentaje: '', calificacion: ''
                    }],
                    tipo: 'promedio'
                }
            ]
        })
        setEvaluacionesItem(get().evaluaciones)
    },
    deleteEvaluacion: (idEvaluacion) => {
        const { evaluaciones } = get()
        const evaluacionesUpdated = evaluaciones.filter((evaluacion) => evaluacion.id !== idEvaluacion)
        evaluacionesUpdated.forEach((evaluacion, index) => {
            evaluacion.id = index + 1
        })
        set({
            evaluaciones: evaluacionesUpdated
        })
        setEvaluacionesItem(get().evaluaciones)
    },
    changeEvaluacionNombre: (idEvaluacion, nuevoNombre) => {
        const { evaluaciones } = get()
        set({
            evaluaciones: evaluaciones.map((evaluacion) =>
                evaluacion.id === idEvaluacion
                    ? {
                        ...evaluacion,
                        nombre: nuevoNombre,
                    }
                    : evaluacion
            ),
        })
        setEvaluacionesItem(get().evaluaciones)
    },
    changeEvaluacionPorcentaje: (idEvaluacion, nuevoPorcentaje) => {
        const { evaluaciones } = get()
        set({
            evaluaciones: evaluaciones.map((evaluacion) =>
                evaluacion.id === idEvaluacion
                    ? {
                        ...evaluacion,
                        porcentaje: nuevoPorcentaje,
                    }
                    : evaluacion
            ),
        })
        setEvaluacionesItem(get().evaluaciones)
    },
    changeEvaluacionTipo: (idEvaluacion, nuevoTipo) => {
        const { evaluaciones } = get()
        set({
            evaluaciones: evaluaciones.map((evaluacion) =>
                evaluacion.id === idEvaluacion
                    ? {
                        ...evaluacion,
                        tipo: nuevoTipo,
                    }
                    : evaluacion
            ),
        })
        setEvaluacionesItem(get().evaluaciones)
    },
    addNota: (idEvaluacion) => {
        const { evaluaciones } = get()
        set({
            evaluaciones: evaluaciones.map((evaluacion) =>
                evaluacion.id === idEvaluacion
                    ? {
                        ...evaluacion, notas: [
                            ...evaluacion.notas, {
                                id: evaluacion.notas.length + 1,
                                nombre: '',
                                porcentaje: '',
                                calificacion: '',
                            }
                        ]
                    }
                    : evaluacion
            )
        })
        setEvaluacionesItem(get().evaluaciones)
    },
    deleteNota: (idEvaluacion, idNota) => {
        const { evaluaciones } = get()
        set({
            evaluaciones: evaluaciones.map((evaluacion) => {
                const notasUpdated = evaluacion.id === idEvaluacion
                    ? evaluacion.notas.filter((evaluacion) => evaluacion.id !== idNota)
                    : evaluacion.notas
                notasUpdated.forEach((nota, index) => {
                    nota.id = index + 1
                })
                return {
                    ...evaluacion,
                    notas: notasUpdated
                }
            })
        })
        setEvaluacionesItem(get().evaluaciones)
    },
    changeNotaNombre: (idEvaluacion, idNota, nuevoNombre) => {
        const { evaluaciones } = get()
        set({
            evaluaciones: evaluaciones.map((evaluacion) =>
                evaluacion.id === idEvaluacion
                    ? {
                        ...evaluacion,
                        notas: evaluacion.notas.map((nota) => nota.id === idNota
                            ? { ...nota, nombre: nuevoNombre }
                            : nota
                        ),
                    }
                    : evaluacion
            ),
        })
        setEvaluacionesItem(get().evaluaciones)
    },
    changeNotaPorcentaje: (idEvaluacion, idNota, nuevoPorcentaje) => {
        const { evaluaciones } = get()
        set({
            evaluaciones: evaluaciones.map((evaluacion) =>
                evaluacion.id === idEvaluacion
                    ? {
                        ...evaluacion,
                        notas: evaluacion.notas.map((nota) => nota.id === idNota
                            ? { ...nota, porcentaje: nuevoPorcentaje }
                            : nota
                        ),
                    }
                    : evaluacion
            ),
        })
        setEvaluacionesItem(get().evaluaciones)
    },
    changeNotaCalificacion: (idEvaluacion, idNota, nuevaCalificacion) => {
        const { evaluaciones } = get()
        set({
            evaluaciones: evaluaciones.map((evaluacion) =>
                evaluacion.id === idEvaluacion
                    ? {
                        ...evaluacion,
                        notas: evaluacion.notas.map((nota) =>
                            nota.id === idNota
                                ? { ...nota, calificacion: isNaN(nuevaCalificacion) ? '' : nuevaCalificacion }
                                : nota
                        )
                    }
                    : evaluacion
            ),
        })
        setEvaluacionesItem(get().evaluaciones)
    },
    resultado: 0,
    calculateResultado: () => {
        const { evaluaciones } = get()
        let notaFinal = 0
        evaluaciones.map((evaluacion) => {
            switch(evaluacion.tipo) {
                case 'promedio': {
                    let promedioNotas = 0
                    evaluacion.notas.map((nota) => {
                        typeof (nota.calificacion) === 'number'
                            ? promedioNotas += nota.calificacion
                            : promedioNotas
                    })
                    evaluacion.notas.length === 0
                        ? promedioNotas = 0
                        : promedioNotas = promedioNotas / evaluacion.notas.length
                    typeof (evaluacion.porcentaje) === 'number'
                        ? notaFinal += promedioNotas * evaluacion.porcentaje / 100
                        : notaFinal
                    break
                }
                case 'nota': {
                    const nota = evaluacion.notas[0].calificacion
                    const porcentaje = evaluacion.porcentaje
                    typeof (nota) === 'number' && typeof(porcentaje) === 'number'
                        ? notaFinal += nota * porcentaje / 100
                        : notaFinal
                    break
                }
                case 'personalizado': {
                    let promedioNotas = 0
                    evaluacion.notas.map((nota) => {
                        typeof (nota.calificacion) === 'number' && typeof (nota.porcentaje) === 'number'
                            ? promedioNotas += nota.calificacion * nota.porcentaje / 100
                            : promedioNotas
                    })
                    typeof (evaluacion.porcentaje) === 'number'
                        ? notaFinal += promedioNotas * evaluacion.porcentaje / 100
                        : notaFinal
                    break
                }
                default: {
                    break
                }
            }
        })
        set({
            resultado: Number(notaFinal.toFixed(2))
        })
    },
}))