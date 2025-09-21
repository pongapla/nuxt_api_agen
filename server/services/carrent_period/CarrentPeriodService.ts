import CarrentPeriod from "~/server/models/carrent_period/CarrentPeriod";

export class CarrentPeriodService {
  async getAll() {
    return await CarrentPeriod.findAll();
  }

  async getById(code: number) {
    return await CarrentPeriod.findByPk(code);
  }

  async create(data: any) {
    return await CarrentPeriod.create(data);
  }

  async update(code: number, data: any) {
    const rec = await CarrentPeriod.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await CarrentPeriod.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
