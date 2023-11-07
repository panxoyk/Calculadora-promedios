import AddNotas from './AddNotas'
import { usePromediosStore } from '../store/promediosStore'

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle
} from '@/components/ui/card'

import {
	Button
} from '@/components/ui/button'

import {
	TrashIcon,
	Cross1Icon
} from '@radix-ui/react-icons'

const PromediosList = () => {
    const { promedios, deletePromedio } = usePromediosStore()

    return (
        <div className='grid grid-cols-1 gap-y-2 my-4'>
            {
				promedios.map((promedio) => {
					const { id, nombre, porcentaje, notas } = promedio
					return (
						<Card className='w-full' key={id}>
							<CardHeader>
								<CardTitle className='flex flex-row justify-between items-center'>
									<div className='text-2xl font-semibold'>
										{nombre} <span className='text-2xl text-muted-foreground'> {porcentaje} % </span>
									</div>
									<Button variant='link' size='icon' onClick={() => deletePromedio(id)}>
										<Cross1Icon className='w-6 h-6 text-destructive' />
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
    )
}

export default PromediosList
