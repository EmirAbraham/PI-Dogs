const axios = require('axios');
require('dotenv').config();
const {Dog, Temperament} = require('../db');

 const getDbDogs = async () => {
    const dbDogs = await Dog.findAll({
               include: {
                   model: Temperament,
                   attributes: ['name'],
                   through: {
                       attributes: [],
                   }
               }})
    console.log(dbDogs)
    return dbDogs;


//     return await Dog.findAll({
//         include: {
//             model: Temperament,
//             attributes: ['name'],
//             through: {
//                 attributes: [],
//             }
//         }
//     });
}

module.exports = {getDbDogs};