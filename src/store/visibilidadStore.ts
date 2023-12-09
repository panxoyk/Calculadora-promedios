import { create } from 'zustand'

interface VisibilidadState {
    visibilidad: boolean
    toggleVisibilidad: () => void
}

export const useVisibilidadStore = create<VisibilidadState>((set, get) => ({
    visibilidad: false,
    toggleVisibilidad: () => {
        const { visibilidad } = get()
        set({
            visibilidad: !visibilidad
        })
    }
}))
