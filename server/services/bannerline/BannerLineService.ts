import BannerLine from "~/server/models/bannerline/BannerLine";

export class BannerLineService {
  async getAll() {
    return await BannerLine.findAll();
  }

  async getById(code: number) {
    return await BannerLine.findByPk(code);
  }

  async create(data: any) {
    return await BannerLine.create(data);
  }

  async update(code: number, data: any) {
    const rec = await BannerLine.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await BannerLine.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
