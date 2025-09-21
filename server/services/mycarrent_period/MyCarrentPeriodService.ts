import MyCarrentPeriod from "../../models/mycarrent_period/MyCarrentPeriod";

export class MyCarrentPeriodService {
  async getAll() {
    return await MyCarrentPeriod.findAll();
  }

  async getById(code: number) {
    return await MyCarrentPeriod.findByPk(code);
  }

  async create(data: any) {
    return await MyCarrentPeriod.create(data);
  }

  async update(code: number, data: any) {
    const rec = await MyCarrentPeriod.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await MyCarrentPeriod.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
