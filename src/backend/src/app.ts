import express from 'express';
import 'dotenv/config'
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';

const users = require('./users/users');
const publications = require('./publications/publications');

const app = express();
export const client = new MongoClient(process.env.ATLAS_URI);

var cors = require('cors');
app.use(cors());

app.get('/', async (req, res) => {
  res.send("SafePaws");
});

app.get('/health', async (req, res) => {
  res.send("OK");
});

app.use(bodyParser.json())
app.use('/users', users);
app.use('/publications', publications);

app.listen(process.env.PORT || 3000, () => {
  return console.log(`Express is listening at http://localhost:${process.env.PORT}`);
});

