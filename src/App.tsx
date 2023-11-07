import PromediosForm from './components/PromediosForm'
import PromediosList from './components/PromediosList'
import ShowResultado from './components/ShowResultado'

const App = () => {
	return (
		<div>
			<div className='m-auto max-w-screen-lg'>
				<h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl p-8 text-center'>
					Calculadora Promedios
				</h1>
				<PromediosForm />
				<PromediosList />
				<ShowResultado />
			</div>
		</div>
	)
}

export default App
