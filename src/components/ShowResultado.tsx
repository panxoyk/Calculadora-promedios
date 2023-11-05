import { usePromediosStore } from '../store/promediosStore'

const ShowResultado = () => {
	const { resultado, calculateResultado } = usePromediosStore()

    return (
        <div>
            <button onClick={() => calculateResultado()}> Calcular Promedio </button>
			<h3> {resultado} </h3>
        </div>
    )
}

export default ShowResultado
