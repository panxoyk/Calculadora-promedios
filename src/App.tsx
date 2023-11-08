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
				<AddPromediosForm />
				<PromedioCards />
				<ShowResultado />
				<ButtonToggleMode />
			</div>
		</ThemeProvider>
	)
}

export default App
