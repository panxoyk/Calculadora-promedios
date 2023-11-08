import PromediosForm from './components/PromediosForm'
import PromediosList from './components/PromediosList'
import ShowResultado from './components/ShowResultado'

const App = () => {
	return (
		<div className='m-auto max-w-screen-lg my-8'>
			<h1 className='scroll-m-20 text-xl font-extrabold tracking-tight md:text-3xl p-4 md:p-8 pt-0 text-center'>
				Calculadora de <span className='text-primary'> PROMEDIO </span> ponderado de notas
			</h1>
			<PromediosForm />
			<PromediosList />
			<ShowResultado />
		</div>
	)
}

export default App
