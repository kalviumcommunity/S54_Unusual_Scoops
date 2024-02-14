const express = require('express');
const router = express.Router()
const app = express();
app.use(express.json())
const validation = require('./joi.js')
const mongoose = require('mongoose');
const Scoop = require('./Schema.js')

const validateRequest = (req, res, next) => {
  const { error } = validation.validate(req.body);
  if (error) {
      return res.status(400).json({ error: error.details[0].message });
  }
  res.send("Data got validated successfully ")
  next();
};


router.get('/',async (req,res)=>{
    try{
    const data = await Scoop.find({})
    res.json(data)
    console.log("get request")
    }catch(err){
        res.send('err'+err)
    }
})

router.get('/:id',async (req,res)=>{
    try{
    const Scoop = await Scoop.findById(req.params.id)
    res.json(Scoop)
    }catch(err){
        res.send('err'+err)
    }
})

router.post('/',validateRequest,async(req,res)=>{
    const Scoop = new Scoop({
        title : req.body.title,
        description : req.body.description,
        image : req.body.image,
        video : req.body.video,
        failRating : req.body.failRating,
        Location : req.body.Location
    })

    try {
        const s1 = await Scoop.save()
        res.json(s1)
    } catch (error) {
        
    }
})

router.patch('/:id',validateRequest,async(req,res)=>{
    try {
        const Scoop = await Scoop.findById(req.params.id)
        if (!Scoop) {
            return res.status(404).json({ error: 'Scoop not found' });
          }
        Scoop.title = req.body.title
        Scoop.image = req.body.image  
        Scoop.failRating = req.body.failRating
        const s1 = await Scoop.save()
        res.json(s1)
    } catch (error) {
        res.send('Err' + error)
    }
})

router.delete('/:id',validateRequest, async (req, res) => {
    try {
      const Scoop = await Scoop.findByIdAndDelete(req.params.id);
    //   res.status(201).send(Scoop)
      if (!Scoop) {
        return res.status(404).json({ error: 'Scoop not found' });
      }
    //   await Scoop.remove();
      res.json({ message: 'Scoop deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });



module.exports = router