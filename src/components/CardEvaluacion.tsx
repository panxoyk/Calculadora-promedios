import { Evaluacion } from '../types/types'
import { useEvaluacionesStore } from '../store/evaluacionesStore'

import FormNota from './FormNota'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import { XIcon } from 'lucide-react'
import { PlusIcon } from 'lucide-react'

interface EvaluacionCardProps {
    evaluacion: Evaluacion
}

const EvaluacionCard = ({ evaluacion }: EvaluacionCardProps) => {
    const { deleteEvaluacion, addNota } = useEvaluacionesStore()
    const { id, nombre, porcentaje, notas, tipo } = evaluacion

    return (
        <Card className='bg-secondary w-full' key={id}>
            <CardHeader>
                <CardTitle className='flex flex-row justify-between items-center'>
                    <div className='text-lg lg:text-xl font-semibold'>
                        {nombre} <span className='text-lg lg:text-2xl text-muted-foreground'> {porcentaje}% </span> tipo: {tipo}
                    </div>
                    <Button
                        className='text-destructive dark:text-destructive-foreground'
                        variant='link'
                        size='icon'
                        onClick={() => deleteEvaluacion(id)}
                    >
                        <XIcon />
                    </Button>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                    {
                        notas.map((nota) => <FormNota key={nota.id} idPromedio={id} nota={nota} />)
                    }
                    <Button className='w-full h-full text-primary hover:text-primary hover:border-primary hover:bg-transparent' variant='outline' onClick={() => addNota(id)}>
                        <PlusIcon />
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default EvaluacionCard