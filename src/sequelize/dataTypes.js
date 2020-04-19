import * as sequelize from 'sequelize'

const { DataTypes } = sequelize

export default {
  STRING: DataTypes.STRING, // VARCHAR(255)
  STRING_1234: DataTypes.STRING(1234), // VARCHAR(1234)
  STRING_BINARY: DataTypes.STRING.BINARY, // VARCHAR BINARY
  TEXT: DataTypes.TEXT, // TEXT
  TEXT_TINY: DataTypes.TEXT('tiny'), // TINYTEXT
  BOOLEAN: DataTypes.BOOLEAN, // TINYINT(1)
  INTEGER: DataTypes.INTEGER, // INTEGER
  BIGINT: DataTypes.BIGINT, // BIGINT
  BIGINT_11: DataTypes.BIGINT(11), // BIGINT(11)
  FLOAT: DataTypes.FLOAT, // FLOAT
  FLOAT_11: DataTypes.FLOAT(11), // FLOAT(11)
  FLOAT_11_10: DataTypes.FLOAT(11, 10), // FLOAT(11,10)
  DOUBLE: DataTypes.DOUBLE, // DOUBLE
  DOUBLE_11: DataTypes.DOUBLE(11), // DOUBLE(11)
  DOUBLE_11_10: DataTypes.DOUBLE(11, 10), // DOUBLE(11,10)
  DECIMAL: DataTypes.DECIMAL, // DECIMAL
  DECIMAL_10_2: DataTypes.DECIMAL(10, 2), // DECIMAL(10,2)
  UNSIGNED: DataTypes.INTEGER.UNSIGNED,
  ZEROFILL: DataTypes.INTEGER.ZEROFILL,
  UNSIGNED_ZEROFILL: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
  DATE: DataTypes.DATE, // DATETIME for mysql / sqlite
  DATEONLY: DataTypes.DATEONLY // DATE without time
}
