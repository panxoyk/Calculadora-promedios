import { usePromediosStore } from '../store/promediosStore'
import { Nota } from '../types/types'

import {
    Input
} from '@/components/ui/input'

import {
    Button
} from '@/components/ui/button'

import {
	TrashIcon
 } from '@radix-ui/react-icons'

interface NotaFormProps {
    idPromedio: number,
    nota: Nota,
}

const NotaForm = ({ idPromedio, nota }: NotaFormProps) => {
    const { changeNotaNombre, changeNotaEvaluacion, deleteNota } = usePromediosStore()

    return (
        <div className='flex flex-col gap-4 lg:gap-2'>
            <Input
            placeholder='Nombre'
            type='text'
            value={nota.nombre}
            onChange={(e) => changeNotaNombre(idPromedio, nota.id, e.target.value)}
            required
            autoFocus
            />
            <div className='grid grid-cols-5 lg:grid-cols-4 gap-2'>
                <Input
                className='col-span-3'
                placeholder='Nota'
                type='number'
                step='0.1'
                value={nota.evaluacion}
                onChange={(e) => changeNotaEvaluacion(idPromedio, nota.id, parseFloat(e.target.value))}
                required
                />
                <Button className='col-span-2 lg:col-span-1 w-full' variant='outline' size='icon' onClick={() => deleteNota(idPromedio, nota.id)}>
                    <TrashIcon className='w-6 h-6' />
                </Button>
            </div>
        </div>
    )
}

export default NotaForm