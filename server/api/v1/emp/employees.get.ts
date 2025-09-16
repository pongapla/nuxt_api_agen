import { EmployeeService } from "~/server/services/employee/employee.service";

export default defineEventHandler(async (event) => {
  const service = new EmployeeService();

  // ดึง query string เช่น /api/v1/emp/employees?id=123
  const query = getQuery(event);
  const id = query.id ? String(query.id) : null;

  if (id) {
    const employee = await service.getEmployeeById(id);
    if (!employee) {
      return { status: "error", message: "Employee not found" };
    }
    return { status: "success", data: employee };
  }

  // ถ้าไม่มี id → คืนทั้งหมด
  const employees = await service.getAllEmployees();
  return { status: "success", data: employees };
});
