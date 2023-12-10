import { useEvaluacionesStore } from '../store/evaluacionesStore'
import { useVisibilidadStore } from '../store/visibilidadStore'

import CardEvaluacion from './CardEvaluacion'
import ButtonVisibilidad from './ButtonVisibilidad'

const EditorEvaluaciones = () => {
	const { evaluaciones } = useEvaluacionesStore()
	const { visibilidad } = useVisibilidadStore()

	return (
		<div>
			<ButtonVisibilidad />
			<div className={visibilidad ? 'hidden' : ''}>
				<div className='grid grid-cols-1 gap-y-2 pt-4 mx-4 xl:mx-0'>
					{
						evaluaciones.slice(0, evaluaciones.length - 1).map((evaluacion) => <CardEvaluacion evaluacion={evaluacion} />)
					}
				</div>
			</div>
		</div>
	)
}

export default EditorEvaluaciones
