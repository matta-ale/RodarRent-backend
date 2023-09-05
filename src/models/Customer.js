const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

// Exportamos una funcion que define el modelo
// Luego le inyectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'Customer',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      personalId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },

      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      country: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      zipCode: {
        type: DataTypes.STRING,
        allowNull: false, //podrá ser true?
      },

      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false, 
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Must be a valid email address",
          }
        }
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
;