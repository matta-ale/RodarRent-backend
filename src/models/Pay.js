/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Pay',
    {
      idPay: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'The amount field cannot be empty',
          },
        },
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'The date field cannot be empty',
          },
          isAfter: {
            args: '2023-08-01',
            msg: 'The date must be after August 1st, 2023',
          },
        },
      },
      method: {
        type: DataTypes.ENUM('credit card', 'bank transfer'),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'The method field cannot be empty',
          },
        },
      },
      status: {
        type: DataTypes.ENUM('paid', 'pending'),
        allowNull: false,
        defaultValue: 'pending',
        validate: {
          notEmpty: {
            msg: 'The status field cannot be empty',
          },
        },
      },
    },
    { timestamps: true },
  );
};
