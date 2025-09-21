import PermissionsType from "~/server/models/permissions_type/PermissionsType";

export class PermissionsTypeService {
  async getAll() {
    return await PermissionsType.findAll();
  }

  async getById(code: number) {
    return await PermissionsType.findByPk(code);
  }

  async create(data: any) {
    return await PermissionsType.create(data);
  }

  async update(code: number, data: any) {
    const rec = await PermissionsType.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await PermissionsType.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
