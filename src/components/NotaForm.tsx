import { usePromediosStore } from '../store/promediosStore'
import { Nota } from '../types/types'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { TrashIcon } from '@radix-ui/react-icons'

interface NotaFormProps {
    idPromedio: number
    nota: Nota
}

const NotaForm = ({ idPromedio, nota }: NotaFormProps) => {
    const { changeNotaEvaluacion, deleteNota } = usePromediosStore()

    return (
        <div className='grid grid-cols-5 gap-2 p-2 border rounded-md border-solid border-muted-foreground'>
                <Input
                    className='col-span-3 border-none shadow-none text-lg'
                    placeholder='0'
                    type='number'
                    step='0.1'
                    value={nota.evaluacion}
                    onChange={(event) => changeNotaEvaluacion(idPromedio, nota.id, parseFloat(event.target.value))}
                    required
                />
                <Button className='col-span-2 w-full text-muted-foreground shadow-none' variant='link' size='icon' onClick={() => deleteNota(idPromedio, nota.id)}>
                    <TrashIcon className='w-6 h-6' />
                </Button>
        </div>
    )
}

export default NotaForm
