import { useTheme } from '@/components/ThemeProvider'
import { Button } from '@/components/ui/button'

import { Moon, Sun } from 'lucide-react'

const ButtonToggleMode = () => {
    const { setTheme } = useTheme()

    return (
        <div className='lg:absolute top-0 lg:right-16 xl:right-0 flex justify-center pt-8 lg:pt-0'>
            <Button variant="outline" size="icon" className="hover:border-primary">
                <Sun onClick={() => setTheme("dark")} className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon onClick={() => setTheme("light")} className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only"> Toggle theme </span>
            </Button>
        </div>
    )
}

export default ButtonToggleMode
