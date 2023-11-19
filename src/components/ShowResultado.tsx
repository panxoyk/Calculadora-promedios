import { usePromediosStore } from '../store/promediosStore'

import { Button } from '@/components/ui/button'

const ShowResultado = () => {
    const { resultado, calculateResultado } = usePromediosStore()

    return (
        <div className='flex flex-col w-9/12 lg:w-fit m-auto gap-2 pt-4'>
            <div className='text-center text-3xl dark:text-secondary relative rounded dark:bg-accent-foreground bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold'>
                {resultado}
            </div>
            <Button className='text-xl md:text-xl px-8 font-mono' onClick={() => calculateResultado()}> Calcular </Button>
        </div>
    )
}

export default ShowResultado
