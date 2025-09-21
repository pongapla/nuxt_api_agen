import City from "~/server/models/city/City";

export class CityService {
  async getAll() {
    return await City.findAll();
  }

  async getById(code: number) {
    return await City.findByPk(code);
  }

  async create(data: any) {
    return await City.create(data);
  }

  async update(code: number, data: any) {
    const rec = await City.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await City.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
