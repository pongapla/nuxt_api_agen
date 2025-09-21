import CarrentSlide from "~/server/models/carrent_slide/CarrentSlide";

export class CarrentSlideService {
  async getAll() {
    return await CarrentSlide.findAll();
  }

  async getById(code: number) {
    return await CarrentSlide.findByPk(code);
  }

  async create(data: any) {
    return await CarrentSlide.create(data);
  }

  async update(code: number, data: any) {
    const rec = await CarrentSlide.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await CarrentSlide.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
