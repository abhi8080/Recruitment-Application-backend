/**
 * Defines the availablility model including constraints and validation.
 */

const { isValid } = require('../utils/validation');
const {
  isValidFromDate,
  isValidToDate,
} = require('../validators/availabilityValidators');

module.exports = (sequelize, DataTypes) => {
  const Availability = sequelize.define(
    'availability',
    {
      from_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          validate(value) {
            isValid(value, isValidFromDate, 'From date is not valid');
          },
        },
      },
      to_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          validate(value) {
            isValid(value, isValidToDate, 'To date is not valid');
          },
        },
      },
    },
    {
      timestamps: false,
    },
  );
  return Availability;
};
