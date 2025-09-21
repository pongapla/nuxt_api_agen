import MyBanner from "~/server/models/mybanner/MyBanner";

export class MyBannerService {
  async getAll() {
    return await MyBanner.findAll();
  }

  async getById(code: number) {
    return await MyBanner.findByPk(code);
  }

  async create(data: any) {
    return await MyBanner.create(data);
  }

  async update(code: number, data: any) {
    const rec = await MyBanner.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await MyBanner.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
