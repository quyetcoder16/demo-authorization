import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _courses from  "./courses.js";
import _user_courses from  "./user_courses.js";
import _users from  "./users.js";

export default function initModels(sequelize) {
  const courses = _courses.init(sequelize, DataTypes);
  const user_courses = _user_courses.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  user_courses.belongsTo(courses, { as: "course", foreignKey: "course_id"});
  courses.hasMany(user_courses, { as: "user_courses", foreignKey: "course_id"});
  user_courses.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(user_courses, { as: "user_courses", foreignKey: "user_id"});

  return {
    courses,
    user_courses,
    users,
  };
}
