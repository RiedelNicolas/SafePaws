import express from 'express';
import 'dotenv/config'
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);

app.get('/', async (req, res) => {
  //Testing the atlas db connection using sample data
  const database = client.db('sample_airbnb');
  const houses = database.collection('listingsAndReviews');
  const query = { name: 'Ribeira Charming Duplex' };
  const house = await houses.findOne(query);

  console.log(house);
  res.send(house);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
