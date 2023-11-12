import { usePromediosStore } from '../store/promediosStore'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const AddPromediosForm = () => {
    const { promedios, addPromedio, changePromedioNombre, changePromedioPorcentaje } = usePromediosStore()
    const { id, nombre, porcentaje } = promedios[promedios.length-1]

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
        <div className='border-b pb-4 lg:pt-4'>
            <form className='flex flex-col lg:flex-row justify-center items-center lg:items-end gap-2 lg:gap-4' onSubmit={handleSubmit}>
                <div className='w-9/12 lg:w-1/3'>
                    <Label className='pl-2' htmlFor='form.nombre'>
                        Nombre
                    </Label>
                    <Input
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
                <div className='w-9/12 lg:w-1/6'>
                    <Label className='pl-2' htmlFor='form.porcentaje'>
                        Ponderación
                    </Label>
                    <Input
                    id='form.porcentaje'
                    placeholder='%'
                    type='number'
                    value={porcentaje}
                    onChange={
                        (event) => handleInputToNumber(event)
                    }
                    required
                    autoComplete='off'
                    />
                </div>
                <Button className='w-9/12 lg:w-fit hover:border-primary' variant='outline' type='submit'> Añadir </Button>
            </form>
        </div>
    )
}

export default AddPromediosForm