import { create } from "zustand";
import { Promedio, Tipo } from '../types/types'
import { promediosItem, setPromediosItem } from "@/utility/utility";

interface PromediosState {
    promedios: Promedio[]
    addPromedio: () => void
    deletePromedio: (id: number) => void
    changePromedioNombre: (idPromedio: number, nombre: string) => void
    changePromedioPorcentaje: (idPromedio: number, porcentaje: number | string) => void
    changePromedioTipo: (idPromedio: number, tipo: Tipo) => void
    addNota: (id: number) => void
    deleteNota: (idPromedio: number, idNota: number) => void
    changeNotaNombre: (idPromedio: number, idNota: number, nombre: string) => void
    changeNotaCalificacion: (idPromedio: number, idNota: number, evaluacion: number) => void
    changeNotaPorcentaje: (idPromedio: number, idNota: number, porcentaje: number | string) => void
    resultado: number
    calculateResultado: () => void
}

export const usePromediosStore = create<PromediosState>((set, get) => ({
    promedios: promediosItem
        ? JSON.parse(promediosItem)
        : [{
        id: 1,
        nombre: '',
        porcentaje: '',
        notas: [{ id: 1, nombre: '', evaluacion: '' }],
    }],
    addPromedio: () => {
        const { promedios } = get()
        set({
            promedios: [
                ...promedios,
                {
                    id: promedios.length + 1,
                    nombre: '',
                    porcentaje: '',
                    notas: [{
                        id: 1, nombre: '', porcentaje: '', calificacion: ''
                    }],
                    tipo: 'promedio'
                }
            ]
        })
        setPromediosItem(get().promedios)
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
        setPromediosItem(get().promedios)
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
        setPromediosItem(get().promedios)
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
        setPromediosItem(get().promedios)
    },
    changePromedioTipo: (idPromedio, nuevoTipo) => {
        const { promedios } = get()
        set({
            promedios: promedios.map((promedio) =>
                promedio.id === idPromedio
                    ? {
                        ...promedio,
                        tipo: nuevoTipo,
                    }
                    : promedio
            ),
        })
        setPromediosItem(get().promedios)
    },
    addNota: (idPromedio) => {
        const { promedios } = get()
        set({
            promedios: promedios.map((promedio) =>
                promedio.id === idPromedio
                    ? {
                        ...promedio, notas: [
                            ...promedio.notas, {
                                id: promedio.notas.length + 1,
                                nombre: '',
                                porcentaje: '',
                                calificacion: '',
                            }
                        ]
                    }
                    : promedio
            )
        })
        setPromediosItem(get().promedios)
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
        setPromediosItem(get().promedios)
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
        setPromediosItem(get().promedios)
    },
    changeNotaPorcentaje: (idPromedio, idNota, nuevoPorcentaje) => {
        const { promedios } = get();
        set({
            promedios: promedios.map((promedio) =>
                promedio.id === idPromedio
                    ? {
                        ...promedio,
                        notas: promedio.notas.map((nota) => nota.id === idNota
                            ? { ...nota, porcentaje: nuevoPorcentaje }
                            : nota
                        ),
                    }
                    : promedio
            ),
        })
        setPromediosItem(get().promedios)
    },
    changeNotaCalificacion: (idPromedio, idNota, nuevaCalificacion) => {
        const { promedios } = get();
        set({
            promedios: promedios.map((promedio) =>
                promedio.id === idPromedio
                    ? {
                        ...promedio,
                        notas: promedio.notas.map((nota) =>
                            nota.id === idNota
                                ? { ...nota, calificacion: isNaN(nuevaCalificacion) ? '' : nuevaCalificacion }
                                : nota
                        )
                    }
                    : promedio
            ),
        })
        setPromediosItem(get().promedios)
    },
    resultado: 0,
    calculateResultado: () => {
        const { promedios } = get()
        let notaFinal = 0
        promedios.map((promedio) => {
            switch(promedio.tipo) {
                case 'promedio': {
                    let promedioNotas = 0
                    promedio.notas.map((nota) => {
                        typeof (nota.calificacion) === 'number'
                            ? promedioNotas += nota.calificacion
                            : promedioNotas
                    })
                    promedio.notas.length === 0
                        ? promedioNotas = 0
                        : promedioNotas = promedioNotas / promedio.notas.length
                    typeof (promedio.porcentaje) === 'number'
                        ? notaFinal += promedioNotas * promedio.porcentaje / 100
                        : notaFinal
                    break
                }
                case 'nota': {
                    const nota = promedio.notas[0].calificacion
                    const porcentaje = promedio.porcentaje
                    typeof (nota) === 'number' && typeof(porcentaje) === 'number'
                        ? notaFinal += nota * porcentaje / 100
                        : notaFinal
                    break
                }
                case 'personalizado': {
                    let promedioNotas = 0
                    promedio.notas.map((nota) => {
                        typeof (nota.calificacion) === 'number' && typeof (nota.porcentaje) === 'number'
                            ? promedioNotas += nota.calificacion * nota.porcentaje / 100
                            : promedioNotas
                    })
                    typeof (promedio.porcentaje) === 'number'
                        ? notaFinal += promedioNotas * promedio.porcentaje / 100
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