import express from 'express';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { CreateUserDto } from './dtos/users.dto';
import { validate } from 'class-validator';
import { client } from '../app';
const router = express.Router()


//Creates a new user if it does not already exist
router.post('/', async (req: Request, res: Response) => {
  try {
    const createUserDto = new CreateUserDto({ email: req.body.email, password: req.body.password});
    createUserDto.email = req.body.email;
    createUserDto.password = req.body.password;

    const errors = await validate(createUserDto);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    // Check if the user already exists
    const users = client.db('SafePaws').collection('users'); //TODO: Remove this logic from each endpoint
    const existingUser = await users.findOne({ email: createUserDto.email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    const newUser = {
      email: createUserDto.email,
      password: hashedPassword,
    };

    await users.insertOne(newUser);
    res.status(201).json({ message: 'User registered successfully', data: { username: newUser.email} });
  } catch (error) {
   console.error(error);
   res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router