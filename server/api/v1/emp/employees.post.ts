import { EmployeeService } from "~/server/services/employee.service";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new EmployeeService();
  return await service.createEmployee(body);
});
