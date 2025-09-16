// server/services/employee.service.ts
import Employee from "../../models/employee/Employee";

export class EmployeeService {
  async getAllEmployees() {
    return await Employee.findAll();
  }

  async getEmployeeById(id: number) {
    return await Employee.findByPk(id);
  }

  async createEmployee(data: any) {
    return await Employee.create(data);
  }

  async updateEmployee(id: number, data: any) {
    const emp = await Employee.findByPk(id);
    if (!emp) throw new Error("Employee not found");
    return await emp.update(data);
  }

  async deleteEmployee(id: number) {
    const emp = await Employee.findByPk(id);
    if (!emp) throw new Error("Employee not found");
    await emp.destroy();
    return { message: "Employee deleted" };
  }
}
