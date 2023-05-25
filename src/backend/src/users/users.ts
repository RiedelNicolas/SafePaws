import express from 'express';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { CreateUserDto } from './dtos/users.dto';
import { validate } from 'class-validator';
import { client } from '../app';
const jwt = require('jsonwebtoken');
const router = express.Router()

//TODO: Moverlo a .env
const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'


//Creates a new user if it does not already exist
router.post('/register', async (req: Request, res: Response) => {
  try {
    const createUserDto = new CreateUserDto({ email: req.body.email, password: req.body.password, username: req.body.username, phoneNumber : req.body.phoneNumber});
    createUserDto.email = req.body.email;
    createUserDto.password = req.body.password;
    createUserDto.username = req.body.username;
    createUserDto.phoneNumber = req.body.phoneNumber;
    createUserDto.paid = false;

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
      username: createUserDto.username,
      phoneNumber: createUserDto.phoneNumber,
      paid: createUserDto.paid
    };

    await users.insertOne(newUser);
    res.status(201).json({ message: 'User registered successfully', data: { username: newUser.email} });
  } catch (error) {
   console.error(error);
   res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/login', async (req, res) => {
  try{
    var email = req.body.email;
    var password = req.body.password;
    const users = client.db('SafePaws').collection('users'); //TODO: Remove this logic from each endpoint
    const user = await users.findOne({ email: email });

    if (!user) {
      return res.status(400).json({message : 'Invalid email or password'})
    }

    if (await bcrypt.compare(password, user.password)) {
      // the username, password combination is successful

      const token = jwt.sign(
        {
          id: user._id,
          username: user.email
        },
        JWT_SECRET
      )

      return res.status(200).json({token: token, username: user.username, mail: user.email, phoneNumber: user.phoneNumber, paid: user.paid})
    }
    res.status(400).json({message : 'Invalid email or password'})

  } catch(error){
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
})


router.post('/pay', async (req, res) => {
  try{
    const users = client.db('SafePaws').collection('users'); //TODO: Remove this logic from each endpoint
    var emailReq = req.body.email;

    const filter = { email: emailReq };
    const update = { $set: {paid: true }};

    const doc = await users.findOneAndUpdate(filter, update);
    if (!doc) {
      return res.status(400).json({message : 'Invalid email or password'})
    }
    return res.status(200).json({message: ""});

  } catch(error){
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
})

module.exports = router