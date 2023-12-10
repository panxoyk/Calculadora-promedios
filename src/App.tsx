import AppTittle from './components/AppTittle.tsx'
import ButtonToggleMode from './components/ButtonToggleMode.tsx'
import ShowResultado from './components/BoxResultado.tsx'
import EditorEvaluaciones from './components/EditorEvaluaciones.tsx'
import FormEvaluaciones from './components/FormEvaluaciones.tsx'
import { ThemeProvider } from '@/components/ThemeProvider.tsx'
import BoxResultado from './components/BoxResultado.tsx'

const App = () => {
	return (
		<ThemeProvider storageKey='vite-ui-theme'>
			<div className='m-auto max-w-screen-lg my-8 relative'>
				<AppTittle />
				<div className='pb-8 pt-4'>
					<div className='flex flex-col md:flex-row lg:w-3/4 gap-4 md:gap-0 mx-auto items-stretch'>
						<FormEvaluaciones />
						<div className='max-md:hidden'>
							<ShowResultado />
						</div>
					</div>
				</div>
				<EditorEvaluaciones />
				<div className='md:hidden pt-6'>
					<BoxResultado />
				</div>
				<ButtonToggleMode />
			</div>
		</ThemeProvider>
	)
}

export default App
