import Configs from "~/server/models/configs/Configs";

export class ConfigsService {
  async getAll() {
    return await Configs.findAll();
  }

  async getById(code: number) {
    return await Configs.findByPk(code);
  }

  async create(data: any) {
    return await Configs.create(data);
  }

  async update(code: number, data: any) {
    const rec = await Configs.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await Configs.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
