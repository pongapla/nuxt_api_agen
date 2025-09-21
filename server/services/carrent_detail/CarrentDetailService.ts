import CarrentDetail from "~/server/models/carrent_detail/CarrentDetail";

export class CarrentDetailService {
  async getAll() {
    return await CarrentDetail.findAll();
  }

  async getById(code: number) {
    return await CarrentDetail.findByPk(code);
  }

  async create(data: any) {
    return await CarrentDetail.create(data);
  }

  async update(code: number, data: any) {
    const rec = await CarrentDetail.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await CarrentDetail.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
