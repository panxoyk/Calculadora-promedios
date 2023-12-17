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
        <Card key={id} className='bg-secondary w-full'>
            <CardHeader>
                <CardTitle className='flex flex-row justify-between items-center'>
                    <div className='text-lg lg:text-xl font-semibold'>
                        {nombre} <span className='text-lg lg:text-2xl text-muted-foreground'> {porcentaje}% </span>
                    </div>
                    <Button
                        onClick={() => deleteEvaluacion(id)}
                        variant='outline'
                        size='icon'
                        className='text-destructive hover:text-destructive hover:border-primary  dark:text-red-500 dark:hover:text-red-500'
                    >
                        <XIcon />
                    </Button>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                    {
                        notas.map((nota) => {
                            const disabled = notas.length === 1
                            const personalizada = tipo === 'personalizada'
                            const single = tipo === 'nota'
                            return (
                                <FormNota key={nota.id} idEvaluacion={id} nota={nota} disabled={disabled} personalizada={personalizada} single={single} />
                            )
                        })
                    }
                    {

                        tipo === 'nota'
                            ? null
                            : <Button
                                onClick={() => addNota(id)}
                                variant='outline'
                                className='w-full h-full text-primary hover:text-primary hover:border-primary hover:bg-transparent'
                            >
                                <PlusIcon />
                            </Button>
                    }
                </div>
            </CardContent>
        </Card>
    )
}

export default EvaluacionCard