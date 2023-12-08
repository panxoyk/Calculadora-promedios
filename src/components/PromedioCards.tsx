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
import { Layers3Icon, XIcon } from 'lucide-react'
import { useState } from 'react'

const PromedioCards = () => {
	const { promedios, deletePromedio } = usePromediosStore()
	const [toggle, setToggle] = useState(false)

	return (
		<div>
			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<span className="w-full border-t" />
				</div>
				<div className="relative flex justify-center text-xs uppercase">
					<span className="bg-background px-2 text-muted-foreground">
						<Button onClick={() => setToggle(!toggle)} variant='ghost' size='icon'> {toggle ? <XIcon /> : <Layers3Icon />} </Button>
					</span>
				</div>
			</div>
			<div className={toggle ? 'hidden' : ''}>
				<div className='grid grid-cols-1 gap-y-2 pt-4 mx-4 xl:mx-0'>
					{
						promedios.slice(0, promedios.length - 1).map((promedio) => {
							const { id, nombre, porcentaje, notas } = promedio
							return (
								<Card className='bg-secondary w-full' key={id}>
									<CardHeader>
										<CardTitle className='flex flex-row justify-between items-center'>
											<div className='text-lg lg:text-xl font-semibold'>
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
			</div>
		</div>
	)
}

export default PromedioCards
