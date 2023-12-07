import AppTittle from './components/AppTittle.tsx'
import ButtonToggleMode from './components/ButtonToggleMode.tsx'
import AddPromediosForm from './components/AddPromediosForm.tsx'
import PromedioCards from './components/PromedioCards.tsx'
import ShowResultado from './components/ShowResultado'
import { ThemeProvider } from './components/theme-provider.tsx'

const App = () => {
	return (
		<ThemeProvider storageKey='vite-ui-theme'>
			<div className='m-auto max-w-screen-lg my-8 relative'>
				<AppTittle />
				<div className='border-b pb-4 pt-4'>
					<div className='flex flex-col md:flex-row lg:w-3/4 gap-4 md:gap-0 mx-auto items-stretch'>
						<AddPromediosForm />
						<div className='max-md:hidden'>
							<ShowResultado />
						</div>
					</div>
				</div>
				<PromedioCards />
				<div className='md:hidden pt-6'>
					<ShowResultado />
				</div>
				<ButtonToggleMode />
			</div>
		</ThemeProvider>
	)
}

export default App
