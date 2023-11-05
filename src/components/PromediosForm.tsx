import { usePromediosStore } from '../store/promediosStore'
import { usePromedioFormStore } from '../store/promedioFormStore'

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
        <div>
            <h2> Nuevo Promedio </h2>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Nombre'
                    type='text'
                    value={formulario.nombre}
                    onChange={
                        (event) =>
                        changeNombre(event.target.value)
                    }
                    required
                    autoFocus
                />
                <input
                    placeholder='Porcentaje'
                    type='number'
                    value={formulario.porcentaje}
                    onChange={
                        (event) =>
                        changePorcentaje(event.target.value)
                    }
                    required
                />
                <button type='submit'> Añadir </button>
            </form>
        </div>
    )
}

export default PromediosForm