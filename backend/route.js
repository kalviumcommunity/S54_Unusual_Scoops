const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Scoop, User, validateScoop, validateSignup } = require('./Schema');

// Get all Scoops
router.get('/', async (req, res) => {
  try {
    const scoops = await Scoop.find(); // Change variable name from Scoops to scoops
    console.log(scoops);
    res.json(scoops);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single Scoop
router.get('/:id', async (req, res) => {
  try {
    const scoop = await Scoop.findById(req.params.id); // Change variable name from Scoop to scoop
    if (!scoop) {
      return res.status(404).json({ error: 'Scoop not found' });
    }
    res.json(scoop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new Scoop
router.post('/', async (req, res) => {
  try {
    const newScoop = new Scoop({ // Change variable name from Scoop to newScoop
      name: req.body.name,
      ingredient: req.body.ingredient,
      origin: req.body.origin,
      rating: req.body.rating,
      image: req.body.image,
    });

    const savedScoop = await newScoop.save(); // Change variable name from s1 to savedScoop
    res.json(savedScoop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a Scoop
router.put('/:id', async (req, res) => {
  try {
    const scoop = await Scoop.findById(req.params.id); // Change variable name from Scoop to scoop
    if (!scoop) {
      return res.status(404).json({ error: 'Scoop not found' });
    }
    scoop.name = req.body.name;
    scoop.ingredient = req.body.ingredient;
    scoop.origin = req.body.origin; 
    scoop.rating = req.body.rating;
    scoop.image = req.body.image;
    // Save updated scoop
    const updatedScoop = await scoop.save(); // Change variable name from Scoop to scoop
    res.json(updatedScoop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a Scoop
router.delete('/:id', async (req, res) => {
  try {
    const deletedScoop = await Scoop.findByIdAndDelete(req.params.id); // Change variable name from Scoop to deletedScoop
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
    // Validate user input
    // const { error } = validateSignup(req.body);
    // if (error) {
    //   return res.status(400).json({ error: error.details[0].message });
    // }

    // Check if the user already exists
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username: username,
      password: hashedPassword, 
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    // Check if the user exists
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, 'your_secret_key');

    // Set the token in the cookie
    res.cookie('token', token, { httpOnly: true });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
