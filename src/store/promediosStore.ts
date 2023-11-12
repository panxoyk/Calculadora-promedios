import { create } from "zustand";
import { Promedio } from '../types/types'

interface PromediosState {
    promedios: Promedio[],
    resultado: number,
    addPromedio: () => void
    changePromedioNombre: (idPromedio: number, nuevoNombre: string) => void
    changePromedioPorcentaje: (idPromedio: number, nuevoPorcentaje: number | string) => void
    deletePromedio: (id: number) => void
    addNota: (id: number) => void
    changeNotaNombre: (idPromedio: number, idNota: number, nombre: string) => void
    changeNotaEvaluacion: (idPromedio: number, idNota: number, evaluacion: number) => void
    deleteNota: (idPromedio: number, idNota: number) => void
    calculateResultado: () => void
}

export const usePromediosStore = create<PromediosState>((set, get) => ({
    promedios: [ {
        id: 1,
        nombre: '',
        porcentaje: '',
        notas: [ { id: 1, nombre: '', evaluacion: '' } ],
    } ],
    resultado: 0,
    addPromedio: () => {
        const { promedios } = get()
        set({
            promedios: [
                ...promedios,
                {
                    id: promedios.length + 1,
                    nombre: '',
                    porcentaje: '',
                    notas: [ {
                        id: 1, nombre: '', evaluacion: ''
                    } ]
                }
            ]
        })
    },
    changePromedioNombre: (idPromedio, nuevoNombre) => {
        const { promedios } = get()
        set({
            promedios: promedios.map((promedio) =>
                promedio.id === idPromedio
                ? {
                    ...promedio,
                    nombre: nuevoNombre,
                }
                : promedio
            ),
        })
    },
    changePromedioPorcentaje: (idPromedio, nuevoPorcentaje) => {
        const { promedios } = get()
        set({
            promedios: promedios.map((promedio) =>
                promedio.id === idPromedio
                ? {
                    ...promedio,
                    porcentaje: nuevoPorcentaje,
                }
                : promedio
            ),
        })
    },
    deletePromedio: (idPromedio) => {
        const { promedios } = get()
        const promediosUpdated = promedios.filter((promedio) => promedio.id !== idPromedio)
        promediosUpdated.forEach((promedio, index) => {
            promedio.id = index + 1
        })
        set({
            promedios: promediosUpdated
        })
    },
    addNota: (idPromedio) => {
        const { promedios } = get()
        set({
            promedios: promedios.map((promedio) =>
                promedio.id === idPromedio
                ? { ...promedio, notas: [
                    ...promedio.notas, {
                        id: promedio.notas.length + 1,
                        nombre: '',
                        evaluacion: '',
                    }
                ] }
                : promedio
            )
        })
    },
    changeNotaNombre: (idPromedio, idNota, nuevoNombre) => {
        const { promedios } = get();
        set({
            promedios: promedios.map((promedio) =>
                promedio.id === idPromedio
                ? {
                    ...promedio,
                    notas: promedio.notas.map((nota) => nota.id === idNota
                        ? { ...nota, nombre: nuevoNombre }
                        : nota
                    ),
                }
                : promedio
            ),
        })
    },
    changeNotaEvaluacion: (idPromedio, idNota, nuevaEvaluacion) => {
        const { promedios } = get();
        set({
            promedios: promedios.map((promedio) =>
                promedio.id === idPromedio
                ? {
                    ...promedio,
                    notas: promedio.notas.map((nota) =>
                        nota.id === idNota
                            ? { ...nota, evaluacion: isNaN(nuevaEvaluacion) ? '' : nuevaEvaluacion }
                            : nota
                    )
                }
                : promedio
            ),
        })
    },
    deleteNota: (idPromedio, idNota) => {
        const { promedios } = get()
        set({
            promedios: promedios.map((promedio) => {
                const notasUpdated = promedio.id === idPromedio
                ? promedio.notas.filter((nota) => nota.id !== idNota)
                : promedio.notas
                notasUpdated.forEach((nota, index) => {
                    nota.id = index + 1
                })
                return {
                    ...promedio,
                    notas: notasUpdated
                }
            })
        })
    },
    calculateResultado: () => {
        const { promedios } = get()
        let promedioFinal = 0
        promedios.map((promedio) => {
            let promedioNotas = 0
            promedio.notas.map((nota) => {
                typeof(nota.evaluacion) === 'number'
                ? promedioNotas += nota.evaluacion
                : promedioNotas
            })
            promedio.notas.length === 0
            ? promedioNotas = 0
            : promedioNotas = promedioNotas/promedio.notas.length
            typeof(promedio.porcentaje) === 'number'
            ? promedioFinal += promedioNotas * promedio.porcentaje/100
            : promedioFinal
        })
        set({
            resultado: Number(promedioFinal.toFixed(2))
        })
    },
}))