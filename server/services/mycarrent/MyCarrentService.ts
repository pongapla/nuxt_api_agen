import MyCarrent from "~/server/models/mycarrent/MyCarrent";

export class MyCarrentService {
  async getAll() {
    return await MyCarrent.findAll();
  }

  async getById(code: number) {
    return await MyCarrent.findByPk(code);
  }

  async create(data: any) {
    return await MyCarrent.create(data);
  }

  async update(code: number, data: any) {
    const rec = await MyCarrent.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await MyCarrent.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
