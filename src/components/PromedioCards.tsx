import { usePromediosStore } from '../store/promediosStore'
import { useVisibilidadStore } from '../store/visibilidadStore'

import AddNotas from './AddNotas'
import VisibilidadButton from './VisibilidadButton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import { XIcon } from 'lucide-react'

const PromedioCards = () => {
	const { promedios, deletePromedio } = usePromediosStore()
	const { visibilidad } = useVisibilidadStore()

	return (
		<div>
			<VisibilidadButton />
			<div className={visibilidad ? 'hidden' : ''}>
				<div className='grid grid-cols-1 gap-y-2 pt-4 mx-4 xl:mx-0'>
					{
						promedios.slice(0, promedios.length - 1).map((promedio) => {
							const { id, nombre, porcentaje, notas, tipo } = promedio
							return (
								<Card className='bg-secondary w-full' key={id}>
									<CardHeader>
										<CardTitle className='flex flex-row justify-between items-center'>
											<div className='text-lg lg:text-xl font-semibold'>
												{nombre} <span className='text-lg lg:text-2xl text-muted-foreground'> {porcentaje}% </span> {tipo}
											</div>
											<Button
												className='text-destructive dark:text-destructive-foreground'
												variant='link'
												size='icon'
												onClick={() => deletePromedio(id)}
											>
												<XIcon />
											</Button>
										</CardTitle>
									</CardHeader>
									<CardContent>
										<AddNotas promedio={promedio} notas={notas} />
									</CardContent>
								</Card>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}

export default PromedioCards
