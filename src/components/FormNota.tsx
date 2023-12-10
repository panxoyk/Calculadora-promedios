import { Nota } from '../types/types'
import { useEvaluacionesStore } from '../store/evaluacionesStore'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { TrashIcon } from 'lucide-react'
import { Label } from './ui/label'

interface NotaFormProps {
    idEvaluacion: number
    nota: Nota
    disabled: boolean
    personalizado: boolean
}

const FormNota = ({ idEvaluacion, nota, disabled, personalizado }: NotaFormProps) => {
    const { changeNotaCalificacion, changeNotaPorcentaje, deleteNota } = useEvaluacionesStore()

    return (
        <div className='grid grid-cols-4 gap-2 p-2 border rounded-md border-solid border-muted-foreground'>
                {
                    personalizado
                        ? <div className='col-span-4 flex flex-col items-center gap-2 whitespace-nowrap h-full border-b-2 border-muted-foreground pb-2'>
                            <Label htmlFor='nota.porcentaje'> Porcentaje (%) </Label>
                            <Input
                                id='nota.porcentaje'
                                value={nota.porcentaje}
                                onChange={(event) => changeNotaPorcentaje(idEvaluacion, nota.id, parseFloat(event.target.value))}
                                placeholder='0'
                                type='number'
                                step='0.01'
                                className='border-none shadow-none text-lg'
                            />
                        </div>
                        : null
                }
                <Input
                    value={nota.calificacion}
                    onChange={(event) => changeNotaCalificacion(idEvaluacion, nota.id, parseFloat(event.target.value))}
                    placeholder='0'
                    type='number'
                    step='0.1'
                    className='col-span-3 border-none shadow-none text-lg'
                />
                <Button
                    onClick={() => deleteNota(idEvaluacion, nota.id)}
                    variant='link'
                    disabled={disabled}
                    size='icon'
                    className='col-span-1 w-full text-muted-foreground shadow-none'
                >
                    <TrashIcon />
                </Button>
        </div>
    )
}

export default FormNota
