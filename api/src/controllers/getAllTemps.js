const axios = require('axios');
const { Key } = process.env;
const { Temperament } = require('../db')

const allTemps = async () => {
    const temps = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${Key}`)
    temps.data.forEach(Breed => {
        if(Breed.temperament) {
            let temps = Breed.temperament?.split(',').map(temperament => temperament.trim()).filter((item, index, self) => self.indexOf(item) === index);
            temps.forEach(t => {
                Temperament.findOrCreate({
                    where: {
                        name:t
                    }
                })
            })
        }
    });
    const findTemps = await Temperament.findAll();
    return findTemps;
}

module.exports = {allTemps};