import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class courses extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    course_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    course_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'courses',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "course_id" },
        ]
      },
    ]
  });
  }
}
