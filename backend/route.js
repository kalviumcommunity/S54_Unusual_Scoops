const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Scoop, User, validateScoop, validateSignup } = require('./Schema');

router.get('/', async (req, res) => {
  try {
    const scoops = await Scoop.find();
    console.log(scoops);
    res.json(scoops);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const scoop = await Scoop.findById(req.params.id); 
    if (!scoop) {
      return res.status(404).json({ error: 'Scoop not found' });
    }
    res.json(scoop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const newScoop = new Scoop({ 
      name: req.body.name,
      ingredient: req.body.ingredient,
      origin: req.body.origin,
      rating: req.body.rating,
      image: req.body.image,
    });

    const savedScoop = await newScoop.save();
    res.json(savedScoop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const scoop = await Scoop.findById(req.params.id); 
    if (!scoop) {
      return res.status(404).json({ error: 'Scoop not found' });
    }
    scoop.name = req.body.name;
    scoop.ingredient = req.body.ingredient;
    scoop.origin = req.body.origin; 
    scoop.rating = req.body.rating;
    scoop.image = req.body.image;
    
    const updatedScoop = await scoop.save(); 
    res.json(updatedScoop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedScoop = await Scoop.findByIdAndDelete(req.params.id); 
    if (!deletedScoop) {
      return res.status(404).json({ error: 'Scoop not found' });
    }
    res.status(200).json({ message: 'Scoop deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/signup', async (req, res) => {
  data = req.body
  const {username,password} = data
  console.log(data)
  try {
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username: username,
      password: hashedPassword, 
    });

    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const token = jwt.sign({ userId: user._id }, 'your_secret_key');

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
