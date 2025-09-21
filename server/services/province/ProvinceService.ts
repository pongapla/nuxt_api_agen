import Province from "~/server/models/province/Province";

export class ProvinceService {
  async getAll() {
    return await Province.findAll();
  }

  async getById(code: number) {
    return await Province.findByPk(code);
  }

  async create(data: any) {
    return await Province.create(data);
  }

  async update(code: number, data: any) {
    const rec = await Province.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await Province.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
