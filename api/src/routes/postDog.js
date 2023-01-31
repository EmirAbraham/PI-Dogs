const {Router} = require('express');
const {createDog} = require('../controllers/postDog')
const router = Router();
const {Dog, Temperament, Op} = require('../db.js');

router.post('/', async (req,res)=>{
    const {name, height, weight, age, image, createInDb, temperament} = req.body;
    try {
        const newDog = await Dog.create({name, height, weight, age, image, createInDb});
        // return typeof newDog !== 'string' ? res.status(200).send(newDog) : res.status(201).send(newDog)
        const dbTemperament = await Temperament.findAll({where:{name:temperament}})
        await newDog.addTemperament(dbTemperament)
        console.log("///////////////")
        console.log(dbTemperament)
        res.status(200).send(newDog)
    } catch (error) {
        res.status(404).send("Raza no creada.")
    }

})

module.exports = router;