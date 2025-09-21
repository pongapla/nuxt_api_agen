import DataDics from "~/server/models/datadics/DataDics";

export class DataDicsService {
  async getAll() {
    return await DataDics.findAll();
  }

  async getById(code: number) {
    return await DataDics.findByPk(code);
  }

  async create(data: any) {
    return await DataDics.create(data);
  }

  async update(code: number, data: any) {
    const rec = await DataDics.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await DataDics.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
