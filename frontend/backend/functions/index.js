//import libraries
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require("body-parser");

const port = 3001
var cors = require('cors')

//initialize express server
const app = express();
const main = express();

app.use(cors()) // Use this after the variable declaration

var serviceAccount = require('/home/bmelani/Dokumentumok/recipe-2d898-firebase-adminsdk-bd9r7-bcfede8e01.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    'https://recipe-2d898-default-rtdb.europe-west1.firebasedatabase.app',
})

//initialize firebase inorder to access its services
//admin.initializeApp(functions.config().firebase);



//add the path to receive request and set json as bodyParser to process the body 
main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

//initialize the database and the collection 
const db = admin.firestore();
const recipesCollection = 'recipes';

//define google cloud function name
const webApi = functions.https.onRequest(main);



app.get('/recipes/:tag', (req, res) => {
    const tag = req.params.tag
    db.collection(recipesCollection).doc(tag).get().then(recipe => {
        if(!tag.exist) throw new Error('Recipe not found')
        res.status(200).json({data: recipe.data()})} )
        .catch(error => res.status(500).send(error))
  //res.send(JSON.stringify(pastaRecipes))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// Create new user
app.post('/recipe', async (req, res) => {
    try {
            const newDoc = await db.collection(recipesCollection).add(req);
        res.status(201).send(`Created a new recipe: ${newDoc.id}`);
    } catch (error) {
        res.status(400).send(`ERROR!!`)
    }
})

const pastaRecipes = [
  {
    id: '2',
    name: 'Baked Shrimp Scampi',
    source: 'Ina Garten: Barefoot Contessa Back to Basics',
    preptime: 0,
    waittime: 0,
    cooktime: 0,
    servings: 6,
    comments:
      'Modified by reducing butter and salt.  Substituted frozen shrimp instead of fresh 12-15 count (butterflied, tails on).',
    instructions:
      'Preheat the oven to 425 degrees F.\r\n\r\nDefrost shrimp by putting in cold water, drain. Place the shrimp in serving dish (9x13 or 2 quart casserole) and toss gently with the olive oil, wine, 1 teaspoons salt, and 1 teaspoon pepper. Allow to sit at room temperature while you make the butter and garlic mixture.\r\n\r\nIn a small bowl, mash the softened butter with the garlic, shallots, parsley, rosemary, red pepper flakes, lemon zest, lemon juice, egg yolk, panko, 1/2 teaspoon salt, and 1/4 teaspoon of pepper until combined.\r\n\r\nSpread the butter mixture evenly over the shrimp. Bake for 10 to 12 minutes until hot and bubbly. If you like the top browned, place under a broiler for 1-3 minutes (keep an eye on it). Serve with lemon wedges and French bread.\r\n\r\nNote: if using fresh shrimp, arrange for presentation. Starting from the outer edge of a 14-inch oval gratin dish, arrange the shrimp in a single layer cut side down with the tails curling up and towards the center of the dish. Pour the remaining marinade over the shrimp. ',
    ingredients: [
      '2/3 cup panko\r',
      '1/4 teaspoon red pepper flakes\r',
      '1/2 lemon, zested and juiced\r',
      '1 extra-large egg yolk\r',
      '1 teaspoon rosemary, minced\r',
      '3 tablespoon parsley, minced\r',
      '4 clove garlic, minced\r',
      '1/4 cup shallots, minced\r',
      '8 tablespoon unsalted butter, at room temperature\r',
      '2 tablespoon dry white wine\r',
      'Freshly ground black pepper\r',
      'Kosher salt\r',
      '3 tablespoon olive oil\r',
      '2 pound frozen shrimp',
    ],
    tags: ['seafood', 'shrimp', 'main'],
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/triple-chocolate-peanut-butter-layer-cake-2-06eee24.jpg?webp=true&quality=90&resize=500%2C454',
  },
  {
    id: '4',
    name: 'Strawberries Romanov (La Madeleine copycat)',
    source:
      'http://cookeatshare.com/recipes/la-madeleine-s-strawberries-romanov-318025',
    preptime: 0,
    waittime: 0,
    cooktime: 0,
    servings: 4,
    comments: '',
    instructions:
      'Wash strawberries and cut the tops off. Let strawberries drain.  Mix together heavy whipping cream, powdered sugar, and the brandy. Beat with a mixer till this becomes thick.  Place strawberries into glasses and spoon over the sauce.\r\n',
    ingredients: [
      '2 tbsp powdered sugar\r',
      '1/2 pt heavy whipping cream\r',
      '1 lb strawberries, (2 pints)\r',
      '4 tbsp brandy',
    ],
    tags: ['fruit', 'dessert', 'strawberries', 'copycat', 'untried'],
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/bakewell-tart-ada6b7f.jpg?quality=90&webp=true&resize=300,272',
  },
]