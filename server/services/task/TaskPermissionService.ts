import EmpPermission from "../../models/employee/EmpPermission";

export class TaskPermissionService {
  async findAll() {
    return await EmpPermission.findAll();
  }

  async findById(code: number) {
    return await EmpPermission.findByPk(code);
  }

  async create(data: any) {
    return await EmpPermission.create(data);
  }

  async update(code: number, data: any) {
    const permission = await EmpPermission.findByPk(code);
    if (!permission) return null;
    return await permission.update(data);
  }

  async delete(code: number) {
    const permission = await EmpPermission.findByPk(code);
    if (!permission) return null;
    await permission.destroy();
    return true;
  }
}
