import Permission from "~/server/models/permissions/Permission";

export class PermissionService {
  async getAll() {
    return await Permission.findAll();
  }

  async getById(code: number) {
    return await Permission.findByPk(code);
  }

  async create(data: any) {
    return await Permission.create(data);
  }

  async update(code: number, data: any) {
    const rec = await Permission.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await Permission.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
