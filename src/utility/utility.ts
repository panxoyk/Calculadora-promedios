import { Promedio } from '../types/types'

export const promediosItem = localStorage.getItem('promedios')

export const setPromediosItem = (promedios: Promedio[]) => localStorage.setItem('promedios', JSON.stringify(promedios))