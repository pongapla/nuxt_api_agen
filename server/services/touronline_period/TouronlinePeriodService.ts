import TouronlinePeriod from "~/server/models/touronline_period/TouronlinePeriod";

export class TouronlinePeriodService {
  async getAll() {
    return await TouronlinePeriod.findAll();
  }

  async getById(code: number) {
    return await TouronlinePeriod.findByPk(code);
  }

  async create(data: any) {
    return await TouronlinePeriod.create(data);
  }

  async update(code: number, data: any) {
    const rec = await TouronlinePeriod.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await TouronlinePeriod.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
