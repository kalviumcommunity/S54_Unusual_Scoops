const express = require('express');
const router = express.Router();
const ScoopData = require('./Schema');

// Get all Scoops
router.get('/', async (req, res) => {
  try {
    const Scoops = await ScoopData.find({});
    console.log(Scoops)
    res.json(Scoops);
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
});

// Get a single Scoop
router.get('/:id', async (req, res) => {
  try {
    const Scoop = await ScoopData.findById(req.params.id);
    if (!Scoop) {
      return res.status(404).json({ error: 'Scoop not found'});
    }
    res.json(Scoop);
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
});

// Create a new Scoop
router.post('/', async (req, res) => {
  try {
    const Scoop = new ScoopData({
      name: req.body.name,
      origin: req.body.origin,
      rating: req.body.rating,
      image: req.body.image,
    });

    const s1 = await Scoop.save();
    res.json(s1);
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
});

// Update a Scoop
router.patch('/:id', async (req, res) => {
  try {
    const Scoop = await ScoopData.findById(req.params.id);
    if (!Scoop) {
      return res.status(404).json({ error: 'Scoop not found'});
    }

    Scoop.name = req.body.name;
    Scoop.rating = req.body.rating;
    Scoop.image = req.body.image;

    const s1 = await Scoop.save();
    res.json(s1);
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
});

// Delete a Scoop
router.delete('/:id', async (req, res) => {
  try {
    const Scoop = await ScoopData.findByIdAndDelete(req.params.id);
    if (!Scoop) {
      return res.status(404).json({ error: 'Scoop not found'});
    }
    res.status(200).json({ message: 'Scoop deleted successfully'});
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
});

module.exports = router;
