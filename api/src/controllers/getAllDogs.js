const axios = require('axios');
require('dotenv').config();
const {getApiDogs} = require('./getApiDogs');
const {getDbDogs} = require('./getDbDogs');

const getAllDogs = async () => {
    const apiDogs = await getApiDogs();
    let dbDogs = await getDbDogs();
    dbDogs = await dbDogs.map(dog => {
        return{
                id: dog.id,
                name: dog.name,
                weight: dog.weight.metric,
                height: dog.height.metric,
                age: dog.age,
                image: dog.image,
                temperament: dog.temperament,
                createInDb: dog.createInDb
        }
    });
    const allDogs = apiDogs.concat(dbDogs);
    return allDogs;
}

module.exports = {getAllDogs};