import { create } from 'zustand'

interface Formulario {
    nombre: string
    porcentaje: number | string
}

interface PromedioFormState {
    formulario: Formulario,
    changeNombre: (nuevoNombre: string) => void
    changePorcentaje: (nuevoPorcentaje: string) => void
    clearForm: () => void
}

export const usePromedioFormStore = create<PromedioFormState>((set, get) => ({
    formulario: {
        nombre: '',
        porcentaje: '',
    },
    changeNombre: (nuevoNombre) => {
        const { formulario } = get()
        set({
            formulario: { ...formulario, nombre: nuevoNombre }
        })
    },
    changePorcentaje: (nuevoPorcentaje) => {
        const { formulario } = get()
        set({
            formulario: { ...formulario, porcentaje: nuevoPorcentaje }
        })
    },
    clearForm: () => {
        set({
            formulario: { nombre: '', porcentaje: '' }
        })
    },
}))