import PromediosForm from './components/PromediosForm'
import PromediosList from './components/PromediosList'
import ShowResultado from './components/ShowResultado'

const App = () => {
	return (
		<div>
			<h1> Calculadora Promedios </h1>
			<PromediosForm />
			<PromediosList />
			<ShowResultado />
		</div>
	)
}

export default App
