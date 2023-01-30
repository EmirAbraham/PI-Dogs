const axios = require('axios');
const { Key } = process.env;
const { Temperament } = require('../db')

const allTemps = async () => {
    const findTemps = await Temperament.findAll();
    return findTemps;
}

module.exports = {allTemps};