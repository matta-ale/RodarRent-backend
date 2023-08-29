const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
 
  sequelize.define('Vehicle', {
    domain: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM('compact', 'sedan', 'pickup', 'SUV'),
        allowNull: false,
    },
    passengers: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 2,
        }
    },
    transmission: {
        type: DataTypes.ENUM('manual', 'automatic'),
        allowNull: false,
    },
    fuel: {
        type: DataTypes.ENUM('gas', 'diesel', 'electric'),
        allowNull: false,
    },
    pricePerDay: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    availability: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    image: {
        type: DataTypes.STRING, // isURL
    },
  });
};