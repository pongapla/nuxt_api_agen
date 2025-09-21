import CarrentHeader from "~/server/models/carrent_header/CarrentHeader";

export class CarrentHeaderService {
  async getAll() {
    return await CarrentHeader.findAll();
  }

  async getById(code: number) {
    return await CarrentHeader.findByPk(code);
  }

  async create(data: any) {
    return await CarrentHeader.create(data);
  }

  async update(code: number, data: any) {
    const rec = await CarrentHeader.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await CarrentHeader.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
