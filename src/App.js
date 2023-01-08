import './App.css';

import { useState } from "react"

import Header from './components/Header';
import Footer from './components/Footer';
import Input from './components/Input';
import Predictions from './components/Predictions';
import { FaSpinner } from 'react-icons/fa'

const localhost = 'http://localhost:'
const port = '5000'
const trQuery = 'tr'

function App() {
	const [predictions, setPredictions] = useState([])
	const [isLoading, setLoading] = useState(false)

	const getPredictions = (prediction) => {

		setPredictions([]);

		if (prediction == '') {
			setLoading(false);
			return
		}

		const fetchPredictions = async () => {
			const url = localhost + port + '/?' + trQuery + '=' + prediction;

			const res = await fetch(url);
			const data = await res.json();
			setLoading(false);

			let newPredictions = [];

			for (let i = 0; i < Object.values(data).length; i++) {
				if (data[i] == null) {
					continue;
				}
				newPredictions.push(data[i])
			}

			setPredictions(newPredictions);
		}


		fetchPredictions();
	}

	const clearPredictions = () => {
		setLoading(true);
	}

	return (
		<div>
			<Header />

			<div className="container">
				<Input onTranslationQuery={getPredictions} onInputBegin={clearPredictions}/>

				{
					(isLoading) ?
						<FaSpinner icon="spinner" className="spinner"/>
						: <Predictions predictions={predictions} />
				}
				{
					(!predictions.length && !isLoading) ? 'No recipes to display!' : ''
				}
			</div>

			<Footer />
		</div>
	);
}

export default App;
