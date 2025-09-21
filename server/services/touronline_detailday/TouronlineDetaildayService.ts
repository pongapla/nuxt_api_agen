import TouronlineDetailday from "~/server/models/touronline_detailday/TouronlineDetailday";

export class TouronlineDetaildayService {
  async getAll() {
    return await TouronlineDetailday.findAll();
  }

  async getById(code: number) {
    return await TouronlineDetailday.findByPk(code);
  }

  async create(data: any) {
    return await TouronlineDetailday.create(data);
  }

  async update(code: number, data: any) {
    const rec = await TouronlineDetailday.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await TouronlineDetailday.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
