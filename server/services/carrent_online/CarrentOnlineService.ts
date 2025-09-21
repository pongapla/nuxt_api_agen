import CarrentOnline from "~/server/models/carrent_online/CarrentOnline";

export class CarrentOnlineService {
  async getAll() {
    return await CarrentOnline.findAll();
  }

  async getById(code: number) {
    return await CarrentOnline.findByPk(code);
  }

  async create(data: any) {
    return await CarrentOnline.create(data);
  }

  async update(code: number, data: any) {
    const rec = await CarrentOnline.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await CarrentOnline.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
