import MyCruiseDay from "~/server/models/mycruise_day/MyCruiseDay";

export class MyCruiseDayService {
  async getAll() {
    return await MyCruiseDay.findAll();
  }

  async getById(code: number) {
    return await MyCruiseDay.findByPk(code);
  }

  async create(data: any) {
    return await MyCruiseDay.create(data);
  }

  async update(code: number, data: any) {
    const rec = await MyCruiseDay.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await MyCruiseDay.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
