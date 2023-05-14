import express from 'express';
import 'dotenv/config'
import { MongoClient } from 'mongodb';

const users = require('./users')

const app = express();
export const client = new MongoClient(process.env.ATLAS_URI);

app.get('/', async (req, res) => {
  res.send("SafePaws");
});

app.get('/health', async (req, res) => {
  res.send("OK");
});

app.use('/users', users);

app.listen(process.env.PORT, () => {
  return console.log(`Express is listening at http://localhost:${process.env.PORT}`);
});

