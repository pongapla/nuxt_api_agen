import { EmployeeService } from "~/server/services/employee.service";

export default defineEventHandler(async () => {
  const service = new EmployeeService();
  return await service.getAllEmployees();
});
