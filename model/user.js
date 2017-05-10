/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    passWord: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    },
    isDelete: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: "0"
    },
      createTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: "1"
    }
  }, {
      timestamps: false,
      tableName: 'user'
  });
};
