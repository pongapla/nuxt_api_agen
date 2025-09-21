import TourOnline from "~/server/models/tour_online/TourOnline";

export class TourOnlineService {
  async getAll() {
    return await TourOnline.findAll();
  }

  async getById(code: number) {
    return await TourOnline.findByPk(code);
  }

  async create(data: any) {
    return await TourOnline.create(data);
  }

  async update(code: number, data: any) {
    const rec = await TourOnline.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await TourOnline.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
