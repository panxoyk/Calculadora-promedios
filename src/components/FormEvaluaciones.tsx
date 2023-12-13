import { Tipo } from '../types/types'
import { useEvaluacionesStore } from '../store/evaluacionesStore'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroupItem, RadioGroup } from '@/components/ui/radio-group'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { ListPlusIcon } from 'lucide-react'

const FormEvaluaciones = () => {
    const { evaluaciones, addEvaluacion, changeEvaluacionNombre, changeEvaluacionPorcentaje, changeEvaluacionTipo } = useEvaluacionesStore()
    const { id, nombre, porcentaje, tipo } = evaluaciones[evaluaciones.length - 1]

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        addEvaluacion()
    }

    const handleInputToNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        if (value === '') {
            changeEvaluacionPorcentaje(id, '')
        } else if (!isNaN(Number(value))) {
            changeEvaluacionPorcentaje(id, Number(value))
        }
    }

    return (
        <Card className='mx-4 md:max-w-sm md:m-auto'>
            <CardHeader className='p-0 pt-4 md:pt-6'>
                <CardTitle className='text-xl md:text-2xl text-center font-mono'> Añadir Evaluación </CardTitle>
            </CardHeader>
            <CardContent className='pt-2 flex items-center'>
                <form onSubmit={handleSubmit} className='grid grid-cols-4 gap-x-2 gap-y-4'>
                    <div className='col-span-3 flex flex-col gap-2'>
                        <div className='flex flex-row items-center gap-2 whitespace-nowrap h-full'>
                            <Label htmlFor="form.nombre" className='pl-2'> Nombre </Label>
                            <Input
                                id='form.nombre'
                                value={nombre}
                                onChange={(event) => changeEvaluacionNombre(id, event.target.value)}
                                placeholder='Ej: Controles'
                                type='text'
                                required
                                autoFocus
                                autoComplete='off'
                                className='pl-4 border-none shadow-none'
                            />
                        </div>
                        <div className='flex flex-row items-center gap-2 whitespace-nowrap h-full'>
                            <Label htmlFor="form.porcentaje" className='pl-2'> Porcentaje (%) </Label>
                            <Input
                                id='form.porcentaje'
                                value={porcentaje}
                                onChange={handleInputToNumber}
                                placeholder='Ej: 20'
                                type='number'
                                required
                                autoComplete='off'
                                className='pl-4 border-none shadow-none'
                            />
                        </div>
                        <div className='flex flex-row items-center gap-2 whitespace-nowrap h-full'>
                            <RadioGroup
                                value={tipo}
                                onValueChange={(value: Tipo) => changeEvaluacionTipo(id, value)}
                                className="grid grid-cols-2 items-center gap-2"
                            >
                                <div>
                                    <RadioGroupItem id="promedio" value='promedio' className="peer sr-only" />
                                    <Label
                                        htmlFor="promedio"
                                        className="flex flex-col items-center justify-between rounded-md border-2 border-transparent p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-muted-foreground [&:has([data-state=checked])]:border-muted-foreground"
                                    >
                                        Promedio
                                    </Label>
                                </div>
                                <div>
                                    <RadioGroupItem id='nota' value='nota' className="peer sr-only" />
                                    <Label
                                        htmlFor="nota"
                                        className="flex flex-col items-center justify-between rounded-md border-2 border-transparent p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-muted-foreground [&:has([data-state=checked])]:border-muted-foreground"
                                    >
                                        Nota
                                    </Label>
                                </div>
                                <div>
                                    <RadioGroupItem id="personalizado" value='personalizado' className="peer sr-only" />
                                    <Label
                                    htmlFor="personalizado"
                                    className="flex flex-col items-center justify-between rounded-md border-2 border-transparent p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-muted-foreground [&:has([data-state=checked])]:border-muted-foreground"
                                    >
                                    Personalizado
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                    <Button className='col-span-1 w-full h-full text-primary hover:text-primary' variant='link' type='submit'>
                        <ListPlusIcon />
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default FormEvaluaciones
