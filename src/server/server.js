// 'node server.js'

const jsonServer    = require('json-server')
const server        = jsonServer.create()
const router        = jsonServer.router('db.json')
const db			= router.db
const middlewares   = jsonServer.defaults()
const port 			= 5000


const predictionTolerance = .12;		// Minimum amount of similarity before the server will accept it as a prediction
const maxPredictions = 10;			// How many predictions to display on the page

const _ = require('lodash')

const cors = require('cors');
server.use(cors());
server.options('*', cors());

server.use((req, res, next) => {

	if (req.query['tr']) {
		// Modify request url for lookahead
		resource = req.query['tr']

		res.jsonp(getTranslations(resource))
	} else {
		next()
	}
})

server.use(middlewares)
server.use(router)

server.listen(port, () => {
	console.log('JSON Server is running on port ' + port.toString())
})

function getTranslations(resource) {
	resComp = resource.toLowerCase()

	recipes = db.get('recipes').value()
	options = _.map(recipes, 'name')

	let bestOptions = [];
	let bestScores = [];

	for(let i = 0; i < maxPredictions; i++) {
		bestOptions[i] = undefined;
		bestScores[i] = predictionTolerance;
	}
	
	for(let i = 0; i < options.length; i++) {
		const score = compareSimilarity(options[i], resComp)
		for(let j = 0; j < maxPredictions; j++) {
			if (score >= bestScores[j]) {
				bestScores[j] = score;
				bestOptions[j] = options[i];
				break;
			}
		}
	}

	const output = [];

	for(let i = 0; i < maxPredictions; i++) {
		output.push(_.find(recipes, {name: bestOptions[i]}))
	}
	
	// Find all json entries that match the query and return them
	return output;
}

function compareSimilarity(s1, s2) {
	var longer = s1;
	var shorter = s2;

	if (s1.length < s2.length) {
		longer = s2;
		shorter = s1;
	}

	let longerLen = longer.length;
	if (longerLen == 0) {
		return 1.0;
	}

	return (longerLen - editDistance(longer, shorter)) / parseFloat(longerLen);
}

function editDistance(s1, s2) {
	var costs = new Array();

	for (var i = 0; i <= s1.length; i++) {
		var lastValue = i;

		for (var j = 0; j <= s2.length; j++) {
			if (i == 0) {
				
				costs[j] = j;
			} else if (j > 0) {

				var newValue = costs[j - 1];

				if (s1.charAt(i - 1) != s2.charAt(j - 1)) {
					newValue = Math.min(Math.min(newValue, lastValue),
					costs[j]) + 1;
				}

				costs[j - 1] = lastValue;
				lastValue = newValue;
			}
		}

		if (i > 0) {
			costs[s2.length] = lastValue;
		}
	}
	return costs[s2.length];
}