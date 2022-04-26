const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id:{
      type: DataTypes.STRING(3),
      primaryKey: true
    },
    commonName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    officialName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING,
    },
    languages:{
      type: DataTypes.STRING
    },
    area: {
      type: DataTypes.FLOAT
    },
    population: {
      type: DataTypes.INTEGER
    },
    currencies:{
      type: DataTypes.STRING
    },
    flagImg:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {isUrl: true}
    },
    maps:{
      type: DataTypes.STRING,
      validate: {isUrl: true}
    }
  },{
    timestamps:false,
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
};
