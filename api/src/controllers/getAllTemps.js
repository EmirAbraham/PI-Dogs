const axios = require('axios');
const { Key } = process.env;
const { Temperament } = require('../db')

const allTemps = async () => {
    const temps = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${Key}`)
    temps.data.forEach(temp => {
        if(temp.temperament) {
            let temps = temp.temperament.split(', ');
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