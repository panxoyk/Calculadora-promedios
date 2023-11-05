import AddNotas from './AddNotas'
import { usePromediosStore } from '../store/promediosStore'

const PromediosList = () => {
    const { promedios, deletePromedio } = usePromediosStore()

    return (
        <div>
            {
				promedios.map((promedio) => {
					const { id, nombre, porcentaje, notas } = promedio
					return (
						<div key={id}>
							<p> {nombre} {porcentaje} % <button onClick={() => deletePromedio(id)}> Borrar </button></p>
							<AddNotas promedio={promedio} notas={notas} />
						</div>
					)
				})
			}
        </div>
    )
}

export default PromediosList
