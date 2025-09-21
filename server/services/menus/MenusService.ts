import Menus from "~/server/models/menus/Menus";

export class MenusService {
  async getAll() {
    return await Menus.findAll();
  }

  async getById(code: number) {
    return await Menus.findByPk(code);
  }

  async create(data: any) {
    return await Menus.create(data);
  }

  async update(code: number, data: any) {
    const rec = await Menus.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await Menus.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
