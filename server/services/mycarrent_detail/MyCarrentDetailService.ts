import MyCarrentDetail from "~/server/models/mycarrent_detail/MyCarrentDetail";

export class MyCarrentDetailService {
  async getAll() {
    return await MyCarrentDetail.findAll();
  }

  async getById(code: number) {
    return await MyCarrentDetail.findByPk(code);
  }

  async create(data: any) {
    return await MyCarrentDetail.create(data);
  }

  async update(code: number, data: any) {
    const rec = await MyCarrentDetail.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await MyCarrentDetail.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
