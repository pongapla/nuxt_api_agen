import Languages from "~/server/models/languages/Languages";

export class LanguagesService {
  async getAll() {
    return await Languages.findAll();
  }

  async getById(code: number) {
    return await Languages.findByPk(code);
  }

  async create(data: any) {
    return await Languages.create(data);
  }

  async update(code: number, data: any) {
    const rec = await Languages.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await Languages.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
