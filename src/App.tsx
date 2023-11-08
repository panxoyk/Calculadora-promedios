import PromediosForm from './components/PromediosForm'
import PromediosList from './components/PromediosList'
import ShowResultado from './components/ShowResultado'
import { ModeToggle } from './components/mode-toggle.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'

const App = () => {
	return (
		<ThemeProvider storageKey='vite-ui-theme'>
			<div className='m-auto max-w-screen-lg my-8 relative'>
				<h1 className='scroll-m-20 text-xl font-extrabold tracking-tight md:text-3xl p-4 md:p-8 pt-0 text-center'>
					Calculadora de <span className='text-primary'> PROMEDIO </span> ponderado de notas
				</h1>
				<PromediosForm />
				<PromediosList />
				<ShowResultado />
				<div className='lg:absolute top-0 lg:right-16 xl:right-0 flex justify-center pt-8 lg:pt-0'>
					<ModeToggle />
				</div>
			</div>
		</ThemeProvider>
	)
}

export default App
