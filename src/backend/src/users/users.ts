import express from 'express';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { client } from '../app';
const router = express.Router()


//Creates a new user if it does not already exist
router.post('/', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body; //TODO: Add schema validation

    // Check if the user already exists
    const users = client.db('SafePaws').collection('users'); //TODO: Remove this logic from each endpoint
    const existingUser = await users.findOne({ username: username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = {
      username,
      password: hashedPassword,
    };

    await users.insertOne(newUser);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
   console.error(error);
   res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router