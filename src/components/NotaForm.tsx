import { usePromediosStore } from '../store/promediosStore'
import { Nota } from '../interfaces/interfaces'

interface NotaFormProps {
    idPromedio: number,
    nota: Nota,
}

const NotaForm = ({ idPromedio, nota }: NotaFormProps) => {
    const { changeNotaNombre, changeNotaEvaluacion, deleteNota } = usePromediosStore()

    return (
        <div>
            <input
                placeholder='Nombre'
                type='text'
                value={nota.nombre}
                onChange={(e) => changeNotaNombre(idPromedio, nota.id, e.target.value)}
                required
            />
            <input
                placeholder='Evaluacion'
                type='number'
                step='0.1'
                value={nota.evaluacion}
                onChange={(e) => changeNotaEvaluacion(idPromedio, nota.id, parseFloat(e.target.value))}
                required
            />
            <button onClick={() => deleteNota(idPromedio, nota.id)}> Borrar </button>
        </div>
    )
}

export default NotaForm