import Prediction from './Prediction'

const Predictions = ({ predictions }) => {

	return (
		<div className="predictions">
			{
				predictions.map((prediction, index) => (
					<Prediction key={index} prediction={prediction} />
				))
			}
		</div>
	)
}

export default Predictions