import BannerHome from "~/server/models/bannerhome/BannerHome";

export class BannerHomeService {
  async getAll() {
    return await BannerHome.findAll();
  }

  async getById(code: number) {
    return await BannerHome.findByPk(code);
  }

  async create(data: any) {
    return await BannerHome.create(data);
  }

  async update(code: number, data: any) {
    const rec = await BannerHome.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await BannerHome.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
