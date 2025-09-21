import Regionth from "~/server/models/regionth/Regionth";

export class RegionthService {
  async getAll() {
    return await Regionth.findAll();
  }

  async getById(code: number) {
    return await Regionth.findByPk(code);
  }

  async create(data: any) {
    return await Regionth.create(data);
  }

  async update(code: number, data: any) {
    const rec = await Regionth.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await Regionth.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
