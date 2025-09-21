import BannerMore from "~/server/models/bannermore/BannerMore";

export class BannerMoreService {
  async getAll() {
    return await BannerMore.findAll();
  }

  async getById(code: number) {
    return await BannerMore.findByPk(code);
  }

  async create(data: any) {
    return await BannerMore.create(data);
  }

  async update(code: number, data: any) {
    const rec = await BannerMore.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await BannerMore.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
