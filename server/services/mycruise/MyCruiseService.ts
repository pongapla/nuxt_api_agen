import MyCruise from "~/server/models/mycruise/MyCruise";

export class MyCruiseService {
  async getAll() {
    return await MyCruise.findAll();
  }

  async getById(code: number) {
    return await MyCruise.findByPk(code);
  }

  async create(data: any) {
    return await MyCruise.create(data);
  }

  async update(code: number, data: any) {
    const rec = await MyCruise.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await MyCruise.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
