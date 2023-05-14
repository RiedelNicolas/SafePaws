import express from 'express';
import { client } from '../app';
const router = express.Router()

router.get('/', async (req, res) => {
  //Testing the atlas db connection using sample data
  const database = client.db('sample_airbnb');
  const houses = database.collection('listingsAndReviews');
  const query = { name: 'Ribeira Charming Duplex' };
  const house = await houses.findOne(query);

  res.send(house.name);
//   res.send('User not found')
})

module.exports = router