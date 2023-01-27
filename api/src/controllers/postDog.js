const {Dog, Temperament, Op} = require('../db.js');

const createDog = async (
    name,
    height,
    weight,
    age,
    image,
    createInDb,
    temperament
) => {
  try {
    const responseDb = await Dog.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    if (responseDb.length) return 'There is already a dog with that name';

    await Dog.create({
        name,
        height,
        weight,
        age,
        image,
        createInDb,
    });

    const findDogByName = await Dog.findAll({
      where: {name: name},
    });

    temperament.forEach(async (element) => {
      await Temperament.create({
        DogId: findDogByName[0].id,
        TemperamentId: element,
      });
    });
    const findDogbyPk = await Dog.findByPk(findDogByName[0].id);
    const temps = await findDogbyPk.getTemperament();

    const responseToClient = {...findDogbyPk.dataValues};
    responseToClient.temperament = temps.map((temp) => temp.id);
    return responseToClient;
  } catch (error) {
    return error.message;
  }
};

module.exports = {createDog};