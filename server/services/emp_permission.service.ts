// server/services/emp_permission.service.ts
import EmpPermission from "../models/EmpPermission";

export class EmpPermissionService {
  async getAllPermissions() {
    return await EmpPermission.findAll();
  }

  async getPermissionById(code: number) {
    return await EmpPermission.findByPk(code);
  }

  async createPermission(data: any) {
    return await EmpPermission.create(data);
  }

  async updatePermission(code: number, data: any) {
    const perm = await EmpPermission.findByPk(code);
    if (!perm) throw new Error("Permission not found");
    return await perm.update(data);
  }

  async deletePermission(code: number) {
    const perm = await EmpPermission.findByPk(code);
    if (!perm) throw new Error("Permission not found");
    await perm.destroy();
    return { message: "Permission deleted" };
  }
}
