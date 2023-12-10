import { Evaluacion } from '../types/types'

export const evaluacionesItem = localStorage.getItem('evaluaciones')

export const setEvaluacionesItem = (evaluaciones: Evaluacion[]) => localStorage.setItem('evaluaciones', JSON.stringify(evaluaciones))