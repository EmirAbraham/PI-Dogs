const {Router} = require('express');
const {createDog} = require('../controllers/postDog')
const router = Router();

router.post('/', async (req,res)=>{
    const {name, height, weight, age, image, createInDb, temperament} = req.body;
    try {
        const newDog = await createDog({name, height, weight, age, image, createInDb, temperament});
        return typeof newDog !== 'string' ? res.status(200).send(newDog) : res.status(201).send(newDog)
    } catch (error) {
        res.status(404).send("Raza no creada.")
    }

})

module.exports = router;