import MyCruiseCabin from "~/server/models/mycruise_cabin/MyCruiseCabin";

export class MyCruiseCabinService {
  async getAll() {
    return await MyCruiseCabin.findAll();
  }

  async getById(code: number) {
    return await MyCruiseCabin.findByPk(code);
  }

  async create(data: any) {
    return await MyCruiseCabin.create(data);
  }

  async update(code: number, data: any) {
    const rec = await MyCruiseCabin.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await MyCruiseCabin.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
