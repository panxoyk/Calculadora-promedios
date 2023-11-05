import NotaForm from './NotaForm'
import { usePromediosStore } from '../store/promediosStore'
import { Promedio, Nota } from '../types/types'

interface AddNotasProps {
    promedio: Promedio
    notas: Nota[],
}

const AddNotas = ({ promedio, notas }: AddNotasProps) => {
    const { addNota } = usePromediosStore()

    return (
        <div>
            {
                notas.map((nota) => <NotaForm key={nota.id} idPromedio={promedio.id} nota={nota} />)
            }
            <button onClick={() => addNota(promedio.id)}> Ingresar nueva nota a {promedio.nombre} </button>
        </div>
    )
}

export default AddNotas
