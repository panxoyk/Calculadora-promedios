import { usePromediosStore } from '../store/promediosStore'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

import { ListPlusIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const AddPromediosForm = () => {
    const { promedios, addPromedio, changePromedioNombre, changePromedioPorcentaje } = usePromediosStore()
    const { id, nombre, porcentaje } = promedios[promedios.length - 1]

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

    return (
        <Card className='mx-4 lg:max-w-sm lg:m-auto bg-secondary'>
            <CardHeader className='p-0 pt-4 md:pt-6'>
                <CardTitle className='text-xl md:text-2xl text-center font-mono'> Añadir evaluación </CardTitle>
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
                                onChange={
                                    (event) => handleInputToNumber(event)
                                }
                                required
                                autoComplete='off'
                            />
                        </div>
                    </div>
                    <Button className='col-span-1 w-full h-full' variant='link' type='submit'>
                        <ListPlusIcon />
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default AddPromediosForm
