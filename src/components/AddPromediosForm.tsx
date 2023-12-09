import { Tipo } from '../types/types'
import { usePromediosStore } from '../store/promediosStore'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroupItem, RadioGroup } from '@/components/ui/radio-group'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { ListPlusIcon } from 'lucide-react'

const AddPromediosForm = () => {
    const { promedios, addPromedio, changePromedioNombre, changePromedioPorcentaje, changePromedioTipo } = usePromediosStore()
    const { id, nombre, porcentaje, tipo } = promedios[promedios.length - 1]

    console.log(tipo)

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        addPromedio()
    }

    const handleInputToNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        if (value === '') {
            changePromedioPorcentaje(id, '')
        } else if (!isNaN(Number(value))) {
            changePromedioPorcentaje(id, Number(value))
        }
    }

    const handleInputToTipo = (value: Tipo) => {
        value === 'promedio' || value === 'nota' || value === 'personalizado'
            ? changePromedioTipo(id, value)
            : changePromedioTipo(id, tipo)
    }

    return (
        <Card className='mx-4 md:max-w-sm md:m-auto'>
            <CardHeader className='p-0 pt-4 md:pt-6'>
                <CardTitle className='text-xl md:text-2xl text-center font-mono'> Añadir Evaluación </CardTitle>
            </CardHeader>
            <CardContent className='pt-2 flex items-center'>
                <form className='grid grid-cols-4 gap-x-2 gap-y-4' onSubmit={handleSubmit}>
                    <div className='col-span-3 flex flex-col gap-2'>
                        <div className='flex flex-row items-center gap-2 whitespace-nowrap h-full'>
                            <Label className='pl-2' htmlFor="form.nombre"> Nombre </Label>
                            <Input
                                className='pl-4 border-none shadow-none'
                                id='form.nombre'
                                placeholder='Ej: Controles'
                                type='text'
                                value={nombre}
                                onChange={
                                    (event) =>
                                        changePromedioNombre(id, event.target.value)
                                }
                                required
                                autoFocus
                                autoComplete='off'
                            />
                        </div>
                        <div className='flex flex-row items-center gap-2 whitespace-nowrap h-full'>
                            <Label className='pl-2' htmlFor="form.porcentaje"> Porcentaje (%) </Label>
                            <Input
                                className='pl-4 border-none shadow-none'
                                id='form.porcentaje'
                                placeholder='Ej: 20'
                                type='number'
                                value={porcentaje}
                                onChange={handleInputToNumber}
                                required
                                autoComplete='off'
                            />
                        </div>
                        <div className='flex flex-row items-center gap-2 whitespace-nowrap h-full'>
                            <RadioGroup
                                value={tipo}
                                defaultValue={tipo}
                                onValueChange={(value: Tipo) => handleInputToTipo(value)}
                                className="grid grid-cols-2 items-center gap-2"
                            >
                                <div>
                                    <RadioGroupItem value='promedio' id="promedio" className="peer sr-only" />
                                    <Label
                                    htmlFor="promedio"
                                    className="flex flex-col items-center justify-between rounded-md border-2 border-transparent p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                    Promedio
                                    </Label>
                                </div>
                                <div>
                                    <RadioGroupItem value='nota' id="nota" className="peer sr-only" />
                                    <Label
                                    htmlFor="nota"
                                    className="flex flex-col items-center justify-between rounded-md border-2 border-transparent p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                    Nota
                                    </Label>
                                </div>
                                <div>
                                    <RadioGroupItem value='personalizado' id="personalizado" className="peer sr-only" />
                                    <Label
                                    htmlFor="personalizado"
                                    className="flex flex-col items-center justify-between rounded-md border-2 border-transparent p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
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

export default AddPromediosForm
