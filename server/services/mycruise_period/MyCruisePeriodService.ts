import MyCruisePeriod from "~/server/models/mycruise_period/MyCruisePeriod";

export class MyCruisePeriodService {
  async getAll() {
    return await MyCruisePeriod.findAll();
  }

  async getById(code: number) {
    return await MyCruisePeriod.findByPk(code);
  }

  async create(data: any) {
    return await MyCruisePeriod.create(data);
  }

  async update(code: number, data: any) {
    const rec = await MyCruisePeriod.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await MyCruisePeriod.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
