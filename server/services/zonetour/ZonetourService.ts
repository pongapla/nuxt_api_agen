import Zonetour from "~/server/models/zonetour/Zonetour";

export class ZonetourService {
  async getAll() {
    return await Zonetour.findAll();
  }

  async getById(code: number) {
    return await Zonetour.findByPk(code);
  }

  async create(data: any) {
    return await Zonetour.create(data);
  }

  async update(code: number, data: any) {
    const rec = await Zonetour.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await Zonetour.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
