import { Employee } from "./Employee";
import { EmpPermission } from "./EmpPermission";

// Associations
Employee.hasMany(EmpPermission, { foreignKey: "employee_id", sourceKey: "id" });
EmpPermission.belongsTo(Employee, {
  foreignKey: "employee_id",
  targetKey: "id",
});

export { Employee, EmpPermission };
