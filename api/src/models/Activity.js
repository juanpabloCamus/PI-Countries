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
            type: DataTypes.TIME,
            allowNull: false
        },
        season:{
            type: DataTypes.ENUM('summer', 'winter', 'spring', 'autumn'),
            allowNull: false
        }
    },
    {createdAt:true, updatedAt: false});
}