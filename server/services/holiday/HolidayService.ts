import Holiday from "~/server/models/holiday/Holiday";

export class HolidayService {
  async getAll() {
    return await Holiday.findAll();
  }

  async getById(code: number) {
    return await Holiday.findByPk(code);
  }

  async create(data: any) {
    return await Holiday.create(data);
  }

  async update(code: number, data: any) {
    const rec = await Holiday.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await Holiday.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
