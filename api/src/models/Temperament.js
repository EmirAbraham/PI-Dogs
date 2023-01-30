const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('temperament', {
    id: {                       
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true,
      allowNull: false,
    },
    name: {                       
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
    {timestamps:false});
    // sequelize.models.temperament.associate = (models) => {
    //   sequelize.models.temperament.belongsToMany(models.dog, {
    //     through: 'dogs_temperaments',
    //     as: 'dog',
    //     foreignKey: 'temperamentid',
    //   });
    // }
};