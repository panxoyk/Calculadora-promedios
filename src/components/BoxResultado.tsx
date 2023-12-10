import { useEvaluacionesStore } from '../store/evaluacionesStore'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

const BoxResultado = () => {
    const { resultado, calculateResultado } = useEvaluacionesStore()

    return (
        <Card className='flex flex-col md:w-fit mx-4 my-0 justify-center h-full'>
            <CardContent className='pt-6'>
                <div className='text-center text-3xl dark:text-secondary relative rounded dark:bg-accent-foreground bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold'>
                    {resultado}
                </div>
            </CardContent>
            <CardFooter>
                <Button className='text-xl md:text-xl px-8 font-mono dark:text-foreground h-fit w-full' onClick={() => calculateResultado()}> Calcular Nota Final </Button>
            </CardFooter>

        </Card>
    )
}

export default BoxResultado
