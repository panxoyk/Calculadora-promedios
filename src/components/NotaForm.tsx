import { Nota } from '../types/types'
import { usePromediosStore } from '../store/promediosStore'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { TrashIcon } from 'lucide-react'

interface NotaFormProps {
    idPromedio: number
    nota: Nota
}

const NotaForm = ({ idPromedio, nota }: NotaFormProps) => {
    const { changeNotaCalificacion, deleteNota } = usePromediosStore()

    return (
        <div className='grid grid-cols-5 gap-2 p-2 border rounded-md border-solid border-muted-foreground'>
                <Input
                    className='col-span-3 border-none shadow-none text-lg'
                    placeholder='0'
                    type='number'
                    step='0.1'
                    value={nota.calificacion}
                    onChange={(event) => changeNotaCalificacion(idPromedio, nota.id, parseFloat(event.target.value))}
                    required
                />
                <Button className='col-span-2 w-full text-muted-foreground shadow-none' variant='link' size='icon' onClick={() => deleteNota(idPromedio, nota.id)}>
                    <TrashIcon />
                </Button>
        </div>
    )
}

export default NotaForm
