import { create } from "zustand";
import { Promedio } from '../types/types'

interface PromediosState {
    promedios: Promedio[],
    resultado: number,
    addPromedio: (nombre: string, porcentaje: number) => void
    deletePromedio: (id: number) => void
    addNota: (id: number) => void
    deleteNota: (idPromedio: number, idNota: number) => void
    calculateResultado: () => void
    changeNotaNombre: (idPromedio: number, idNota: number, nombre: string) => void
    changeNotaEvaluacion: (idPromedio: number, idNota: number, evaluacion: number) => void
}

export const usePromediosStore = create<PromediosState>((set, get) => ({
    promedios: [],
    resultado: 0,
    addPromedio: (nombre, porcentaje) => {
        const { promedios } = get()
        set({
            promedios: [
                ...promedios,
                {
                    id: promedios.length + 1,
                    nombre,
                    porcentaje,
                    notas: [ {
                        id: 1, nombre: '', evaluacion: ''
                    } ]
                }
            ]
        })
    },
    deletePromedio: (idPromedio) => {
        const { promedios } = get();
        set({
            promedios: promedios.filter((promedio) => promedio.id !== idPromedio)
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
    deleteNota: (idPromedio, idNota) => {
        const { promedios } = get();
        set({
            promedios: promedios.map((promedio) => ({
                ...promedio,
                notas:
                    promedio.id === idPromedio
                    ? promedio.notas.filter((nota) => nota.id !== idNota)
                    : promedio.notas
            }))
        })
    },
    calculateResultado: () => {
        const { promedios } = get()
        let promedioFinal = 0
        promedios.map((promedio) => {
            let promedioNotas = 0
            promedio.notas.map((nota) => {
                typeof(nota.evaluacion) === 'number' ? promedioNotas += nota.evaluacion : promedioNotas
            })
            promedio.notas.length === 0
                ? promedioNotas = 0
                : promedioNotas = promedioNotas/promedio.notas.length
            promedioFinal += promedioNotas * promedio.porcentaje/100
        })
        set({
            resultado: Number(promedioFinal.toFixed(2))
        })
    },
    changeNotaNombre: (idPromedio, idNota, nuevoNombre) => {
        const { promedios } = get();
        set({
            promedios: promedios.map((promedio) =>
                promedio.id === idPromedio
                ? {
                    ...promedio,
                    notas: promedio.notas.map((nota) =>
                        nota.id === idNota
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
                    ),
                }
                : promedio
            ),
        })
    },
}))