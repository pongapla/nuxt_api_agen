import { EmployeeService } from "~/server/services/employee/employee.service";

export default defineEventHandler(async (event) => {
  const id = Number(getQuery(event).id); // /api/v1/emp/employees?id=1
  const service = new EmployeeService();
  return await service.deleteEmployee(id);
});
