import MenusSub from "~/server/models/menus_sub/MenusSub";

export class MenusSubService {
  async getAll() {
    return await MenusSub.findAll();
  }

  async getById(code: number) {
    return await MenusSub.findByPk(code);
  }

  async create(data: any) {
    return await MenusSub.create(data);
  }

  async update(code: number, data: any) {
    const rec = await MenusSub.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await MenusSub.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
