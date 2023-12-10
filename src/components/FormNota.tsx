import { Nota } from '../types/types'
import { useEvaluacionesStore } from '../store/evaluacionesStore'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { TrashIcon } from 'lucide-react'

interface NotaFormProps {
    idPromedio: number
    nota: Nota
}

const FormNota = ({ idPromedio, nota }: NotaFormProps) => {
    const { changeNotaCalificacion, deleteNota } = useEvaluacionesStore()

    return (
        <div className='grid grid-cols-4 gap-2 p-2 border rounded-md border-solid border-muted-foreground'>
                <Input
                    className='col-span-3 border-none shadow-none text-lg'
                    placeholder='0'
                    type='number'
                    step='0.1'
                    value={nota.calificacion}
                    onChange={(event) => changeNotaCalificacion(idPromedio, nota.id, parseFloat(event.target.value))}
                    required
                />
                <Button className='col-span-1 w-full text-muted-foreground shadow-none' variant='link' size='icon' onClick={() => deleteNota(idPromedio, nota.id)}>
                    <TrashIcon />
                </Button>
        </div>
    )
}

export default FormNota
