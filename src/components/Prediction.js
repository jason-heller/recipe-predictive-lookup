import { useState } from "react"
import { FaPlus, FaMinus } from 'react-icons/fa'
import {CSSTransition} from 'react-transition-group';

const Prediction = ({ prediction }) => {
	const [isOpen, setOpen] = useState(false)

  return (
		<div className="prediction">
			<h3 className="capitalize" onClick={() => setOpen(!isOpen)}> 
				{prediction.name} 
				{isOpen ? <FaMinus /> : <FaPlus />}
			</h3>

			<CSSTransition
				in={isOpen}
				timeout={500}
				classNames="recipe"
				unmountOnExit>
				<div>

					<b>Ingredients:</b>

					<ul className="capitalize">
					{
						prediction.ingredients.split(',').map((ingredient, index) => (
							<li key={index}> {ingredient} </li>
						))
					}
					</ul>

					<b>Steps:</b>

					<ul>
					{
						prediction.steps.split('<br>').map((steps, index) => (
							<li key={index}> {steps.charAt(0).toUpperCase() + steps.substring(1)} </li>
						))
					}
					</ul>

				</div>
			</CSSTransition>
		</div>
  )
}

export default Prediction