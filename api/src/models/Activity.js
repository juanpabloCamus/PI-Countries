const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity' , {
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty:{
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max:5
            },
            allowNull: false
        },
        duration:{
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max:24
            },
            allowNull: false
        },
        season:{
            type: DataTypes.ENUM('Indifferent','Summer', 'Winter', 'Spring', 'Autumn'),
            allowNull: false,
            defaultValue: "Indifferent"
        }
    },
    {createdAt:true, updatedAt: false});
}