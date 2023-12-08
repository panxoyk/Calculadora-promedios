import { Promedio, Nota } from '../types/types'
import { usePromediosStore } from '../store/promediosStore'

import NotaForm from './NotaForm'

import { Button } from '@/components/ui/button'
import { PlusIcon } from '@radix-ui/react-icons'

interface AddNotasProps {
    promedio: Promedio
    notas: Nota[]
}

const AddNotas = ({ promedio, notas }: AddNotasProps) => {
    const { addNota } = usePromediosStore()

    return (
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
            {
                notas.map((nota) => <NotaForm key={nota.id} idPromedio={promedio.id} nota={nota} />)
            }
            <Button className='w-full h-full text-primary hover:text-primary hover:border-primary dark:hover:bg-transparent' variant='outline' onClick={() => addNota(promedio.id)}>
                <PlusIcon />
            </Button>
        </div>
    )
}

export default AddNotas
