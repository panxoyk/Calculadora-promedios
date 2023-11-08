import { usePromediosStore } from '../store/promediosStore'

import AddNotas from './AddNotas'

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Cross1Icon } from '@radix-ui/react-icons'

const PromedioCards = () => {
    const { promedios, deletePromedio } = usePromediosStore()

    return (
        <div className='grid grid-cols-1 gap-y-2 pt-4 mx-4 xl:mx-0'>
            {
				promedios.map((promedio) => {
					const { id, nombre, porcentaje, notas } = promedio
					return (
						<Card className='bg-secondary w-full' key={id}>
							<CardHeader>
								<CardTitle className='flex flex-row justify-between items-center'>
									<div className='text-lg lg:text-2xl font-semibold'>
										{nombre} <span className='text-lg lg:text-2xl text-muted-foreground'> {porcentaje}% </span>
									</div>
									<Button className='text-destructive dark:text-destructive-foreground' variant='link' size='icon' onClick={() => deletePromedio(id)}>
										<Cross1Icon className='w-6 h-6' />
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

export default PromedioCards
