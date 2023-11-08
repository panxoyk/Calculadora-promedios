import NotaForm from './NotaForm'
import { Promedio, Nota } from '../types/types'
import { usePromediosStore } from '../store/promediosStore'

import {
    Button
} from '@/components/ui/button'

import {
    PlusIcon
} from '@radix-ui/react-icons'

interface AddNotasProps {
    promedio: Promedio
    notas: Nota[],
}

const AddNotas = ({ promedio, notas }: AddNotasProps) => {
    const { addNota } = usePromediosStore()

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
            {
                notas.map((nota) => <NotaForm key={nota.id} idPromedio={promedio.id} nota={nota} />)
            }
            <Button className='w-full h-full' variant='outline' onClick={() => addNota(promedio.id)}>
                <PlusIcon className=' text-primary' />
            </Button>
        </div>
    )
}

export default AddNotas
