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
					<div className='flex flex-col lg:flex-row md:w-3/4 gap-4 lg:gap-0 mx-auto items-stretch '>
						<AddPromediosForm />
						<ShowResultado />
					</div>
				</div>
				<PromedioCards />
				<ButtonToggleMode />
			</div>
		</ThemeProvider>
	)
}

export default App
