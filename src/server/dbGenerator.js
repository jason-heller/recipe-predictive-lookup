const fileName = "db.json"
const numRecipes = 350

const ingredientsDry = [
    'apples', 'apricot', 'avocado', 'arrowroot', 'artichoke', 'arugula', 'acai berry', 'alfredo sauce', 'applesauce', 'agave', 'allspice', 'almonds', 'asparagus',
    'bell peppers', 'blackberries', 'blue cheese', 'bonito flakes', 'basil', 'bologna', 'bamboo shoots', 'bananas', 'bok choy', 'blackberry', 'brown sugar', 'barley', 'baba ganoush', 'beans', 'bean curd', 'blueberry', 'bread', 'beef tendon', 'bone marrow',
    'collard greens', 'cumin', 'coriander', 'cantaloupe', 'corn chips', 'chives', 'crayfish', 'cinnamon', 'cabbage', 'coconut', 'cucumber', 'creatine', 'cayenne', 'cherry', 'corn', 'clementines', 'cereal', 'cream cheese', 'cheese', 'chickpeas', 'cardamom', 'chicken',
    'dates', 'durian', 'dill pickles', 'deer meat', 'dark chocolate',
    'eggs', 'elk jerky', 'emu', 'eggplant',
    'fig', 'fungi', 'fennel seeds', 'fenugreek', 'frosting',
    'green beans', 'grapes', 'ginger', 'garlic', 'green onions', 'guava', 'greek yogurt', 'gouda',
    'hard boiled eggs', 'haggis', 'ham', 'habanero peppers',
    'ice cream', 'iceberg lettuce', 'Italian sausage', 'impossible meat',
    'jell-o', 'jalapeño', 'jelly',
    'kale', 'ketchup', 'kielbasa', 'kit kats',
    'lemongrass', 'lentils', 'licorice', 'lobster', 'lampchops', 'leeks', 'lychee', 'liver', 'lettuce', 'latkes', 'legumes',
    'm&ms', 'macaroni', 'meatballs', 'mint', 'miso', 'mango', 'mozzarella', 'mustard', 'marinara sauce', 'marshmellows', 'molasses', 'monterey jack cheese',
    'naan', 'nutella', 'nectar', 'nori', 'noodles', 'nougat', 'nutmeg',
    'orange', 'olives', 'oatmeal', 'oreos', 'oysters', 'okra', 'oregano', 'onion',
    'pineapple', 'pasta', 'pepperoni', 'pomegranate', 'pork', 'peach', 'peanuts', 'paprika', 'plantains', 'potatoes', 'pears', 'peas', 'papaya', 'peppers', 'pepperjack cheese', 'pork tender', 'pork loin',
    'quinoa', 'quark', 'queso dip', 'quail eggs', 'quail', 'quaker oats',
    'red peppers', 'red onions', 'radish', 'raisins', 'ramen', 'ranch dressing', 'red cabbage', 'red potatoes', 'rhubarb', 'rice', 'rice noodles', 'romaine lettuce', 'rocky road ice cream', 'rye bread',
    'saffron', 'scallions', 'skittles', 'shrimp', 'smoked paprika', 'salsa', 'scallops', 'sage', 'sardines', 'sausage', 'spaghetti', 'spinach', 'steak', 'strawberries', 'smoked gouda', 'snow peas', 'soba noodles', 'swiss cheese', 'sun-dried tomatoes', 'shrimp',
    'tapioca', 'tabbouleh', 'tamarind', 'tahini', 'tofu', 'truffles', 'tangerine', 'tripe', 
    'unagi', 'udon', 'uni', 'ume',
    'veal', 'vanilla beans', 'venison',
    'wheat', 'watercress', 'wasabi', 'white chocolate', 'wontons', 'watermelon',
    'yams', 'yellowtail fish', 'yellow squash', 'yuzu', 'yogurt', 'yeast', 'yodels',
    'zucchini', 'ziti'
]

const ingredientsWet = [
    'apple juice', 'almond milk',
    'bourbon', 'beer',
    'carrot juice', 'coffee',
    'egg cream', 'espesso',
    'gasoline', 'goat milk',
    'hot sauce', 'heavy cream', 
    'lemon juice', 'lemonade', 'lime juice',
    'milk',
    'oil', 'olive oil', 'oyster sauce', 'oat milk',
    'orange juice',
    'rum', 'red wine',
    'soda', 'sake', 'soy sauce',
    'tea', 'tequila',
    'vanilla extract', 'vinegar', 'vodka',
    'water', 'white sauce', 'white wine'
]

const actions = [
    'get a bowl and add #',
    'add the # and mix for @ minutes',
    'fry the # for @ minutes',
    'boil the # for ! minutes',
    'put in the oven and let bake for ! minutes',
    'put in the oven and let bake for @ hours',
    'in a medium saucepan, fry the #',
    'blanch the # for ! seconds',
    'chop the # and add to the meal',
    'julianne the # and add to the mix',
    'dice the # and add to the meal',
    'deep fry the # for @ minutes',
    'prep the # and put aside for later',
    'mix for @ minutes',
    'put in the microwave for ! seconds',
    'put in the microwave for ! hours... or until ready',
    'use the # to barter for a better ingredient',
    'toast the # until golden brown',
    'melt the # on top',
    'add the # and fold into the dough',
    'knead the mix until firm',
    'stick a toothpick into the mix, if it does not come out clean, evacuate the building immediately',
    'toss in the # and deep fry for @ seconds',
    'hold the # and contemplate life',
    'fry the # until golden brown',
    'cook the # until cooked through',
    'cook the # for @ minutes',
    'cook the # for ! seconds, then flip',
    'put the # into a bowl and wash',
    'take the # and cover, let sit for ! hours',
    'take the mix and throw into the garbage, get a new bowl and add the #',
    'stir for @ minutes',
    'stir in the #',
    'stir in # and mix for @ minutes',
    'if dish is dry, add #',
    'if dish is too wet, add #',
    'add #, for garnish',
    'brush # onto the top of the dish',
    'mash dish until it resembles a thin paste',
    'add the # and put into a panini press',
    'roll out the # into little balls, then set aside',
    'wrap up the mix with plastic wrap, begin to prepare the #',
    'grill the # for @ minutes',
    'use a torch to caramelize the #',
    'mix well while slowly pouring in the #',
    'put the # into a frosting tube and squeeze it onto the dish',
    'roast the # over an open fire until cooked',
    'sous vide the # and add it to the meal',
    'put the # in a grinder, put on top of the dish',
    'smoke the # for ! minutes',
    'leave the # in the smoker for @ hours',
    'chop up the #',
    'pickle the #, this may take some time',
    'sear the # and add it to the dish'
]

const descriptors = [
    'baked',
    'deep fried',
    'boiled',
    'cooked',
    'double fried',
    'toasted',
    'microwaved',
    'red',
    'green',
    'yellow',
    'blue',
    'supreme',
    'best',
    'top recipe for',
    'new age',
    'style',
    'Japanese',
    'inspired',
    'French',
    'Russian',
    'American',
    'Canadian',
    'European',
    'German',
    'Spanish',
    'Turkish',
    'Mexican',
    'Thai',
    'Korean',
    'Indian',
    'curry',
    'dish',
    'soup',
    'chaat',
    'cream',
    'sauce',
    'platter',
    'Latin American',
    'burnt',
    'unfortunant',
    'crusted',
    'themed',
    'fired',
    'creamy',
    'frosted',
    'bento box',
    'zesty',
    'spicy',
    'tart',
    'sour',
    'grilled',
    'brule',
    'bowl of',
    'burrito',
    'the way mom used to make',
    'pasta',
    'extreme',
    'salty',
    'overproofed',
    'sweet',
    'sugary',
    'savory',
    'pickled',
    'seared',
    'fast and easy',
    'five minute',
    'low-prep',
    'cheap',
    'luxurious',
    'old fashioned'

]

generateDatabase();

function generateDatabase() {
    let jsonString = '{\n"recipes": [\n';

    for(let i = 0; i < numRecipes; i++) {
        let recipeIngredients = createIngredients();
        let steps = createSteps(recipeIngredients);

        recipe = {
            name: createRecipeName(recipeIngredients, steps),
            ingredients: recipeIngredients,
            steps: steps
        }

        const comma = (i == numRecipes - 1) ? '' : ',';
        jsonString += '\t' + JSON.stringify(recipe) + comma + '\n';
    }

    jsonString += '\n]\n}'

    exportJson(jsonString)
}

function exportJson(jsonString) {
    let fs = require('fs');

    fs.writeFile(fileName, jsonString, function(err, result) {
        if (err) {
            console.log('Failed to generate ' + fileName, err);
        }
    });
}

function createIngredients() {
    let ingredients = '';
    const numIngredients = Math.floor(Math.random() * 6 + 3)    // 3 to 9 ingredients

    for(let i = 0; i < numIngredients; i++) {
        ingredients += Math.random() < .1 ? 
          ingredientsWet[Math.floor(Math.random() * ingredientsWet.length)]
        : ingredientsDry[Math.floor(Math.random() * ingredientsDry.length)];
        ingredients += (i == numIngredients - 1) ? '' : ',';
    }

    return ingredients;
}

function createSteps(recipeIngredients) {
    let steps = '';
    const ingredientArr = recipeIngredients.split(',');
    const numSteps = ingredientArr.length;

    for(let i = 0; i < numSteps; i++) {
        steps += generateAction(ingredientArr[i]) + '.';
        steps += (i == numSteps - 1) ? '' : '<br>'
    }

    return steps;
}

function generateAction(ingredient) {
    let action = actions[Math.floor(Math.random() * actions.length)];
    
    // Ingredient name
    action = action.replaceAll('#', ingredient);         
    // Short time
    action = action.replaceAll('@', (1 + Math.floor(Math.random() * 10)));
    // Long time
    action = action.replaceAll('!', (30 + Math.floor(Math.random() * 30)));

    return action;
}

function createRecipeName(ingredients, steps) {
    const ingredientArr = ingredients.split(',');
    let ingredient1 = ingredientArr[0];
    let ingredient2 = ingredientArr[Math.floor(Math.random() * ingredientArr.length)];
    return getDescriptor() + ' ' + getDescriptor() + ' ' + ingredient1 + '-' + ingredient2;
}

function getDescriptor() {
    return descriptors[Math.floor(Math.random() * descriptors.length)];
}