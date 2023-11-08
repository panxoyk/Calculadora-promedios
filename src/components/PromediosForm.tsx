import { usePromediosStore } from '../store/promediosStore'
import { usePromedioFormStore } from '../store/promedioFormStore'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const PromediosForm = () => {
    const { addPromedio } = usePromediosStore()
    const { formulario, changeNombre, changePorcentaje, clearForm } = usePromedioFormStore()

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		addPromedio(
            formulario.nombre,
			typeof(formulario.porcentaje) === 'string' ? parseInt(formulario.porcentaje) : 0,
		)
		clearForm()
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
                    value={formulario.nombre}
                    onChange={
                        (event) =>
                        changeNombre(event.target.value)
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
                    value={formulario.porcentaje}
                    onChange={
                        (event) =>
                        changePorcentaje(event.target.value)
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

export default PromediosForm