import { DataTypes } from "sequelize";
import dbInstance from "../../db";
import Task from "./task";

const TaskPermission = dbInstance.define(
  "TaskPermission",
  {
    code: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    task_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Task,
        key: "code",
      },
    },
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    task: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    user_create: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    date_create: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "task_permission",
    timestamps: false,
  }
);

// สร้างความสัมพันธ์
Task.hasMany(TaskPermission, { foreignKey: "task_code" });
TaskPermission.belongsTo(Task, { foreignKey: "task_code" });

export default TaskPermission;
