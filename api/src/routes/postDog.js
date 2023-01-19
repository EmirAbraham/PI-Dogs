const {Router} = require('express');
const {Dog, Temperament} = require('../db');
const router = Router();

router.post('/', async (req,res)=>{
    const {name, height, weight, age, image, createInDb, temperament} = req.body;
    const newDog = await Dog.create({name, height, weight, age, image, createInDb});
    const tempsDb = await Temperament.findAll({
        where: {
            name: temperament
        }
    });
    try {
        newDog.addTemperament(tempsDb);
        res.status(200).send(newDog);
    } catch (error) {
        res.status(404).send("Raza no creada.")
    }

})

module.exports = router;