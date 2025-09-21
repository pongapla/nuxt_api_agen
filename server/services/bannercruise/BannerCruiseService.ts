import { dbInstance } from "~/server/db";
import BannerCruise from "~/server/models/bannercruise/BannerCruise";

export class BannerCruiseService {
  async getAll() {
    return await BannerCruise.findAll();
  }

  async getById(code: number) {
    return await BannerCruise.findByPk(code);
  }

  async create(data: any) {
    return await BannerCruise.create(data);
  }

  async update(code: number, data: any) {
    const rec = await BannerCruise.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await BannerCruise.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
