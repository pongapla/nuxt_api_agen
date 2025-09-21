import MyCruiseLine from "~/server/models/mycruise_line/MyCruiseLine";

export class MyCruiseLineService {
  async getAll() {
    return await MyCruiseLine.findAll();
  }

  async getById(code: number) {
    return await MyCruiseLine.findByPk(code);
  }

  async create(data: any) {
    return await MyCruiseLine.create(data);
  }

  async update(code: number, data: any) {
    const rec = await MyCruiseLine.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await MyCruiseLine.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
