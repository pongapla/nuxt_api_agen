import BannerPromote from "~/server/models/bannerpromote/BannerPromote";

export class BannerPromoteService {
  async getAll() {
    return await BannerPromote.findAll();
  }

  async getById(code: number) {
    return await BannerPromote.findByPk(code);
  }

  async create(data: any) {
    return await BannerPromote.create(data);
  }

  async update(code: number, data: any) {
    const rec = await BannerPromote.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await BannerPromote.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
