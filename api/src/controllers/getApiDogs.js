const axios = require('axios');
require('dotenv').config();
const {Key} = process.env;

const getApiDogs = async () => {
    const getApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${Key}`)
    const mapData = await getApi.data.map(dog => {
        return {
            id: dog.id,
            name: dog.name,
            weight: dog.weight.metric,
            height: dog.height.metric,
            age: dog.life_span,
            image: dog.image.url,
            temperament: dog.temperament,
        }
    });
    return mapData;
}

module.exports = {getApiDogs};