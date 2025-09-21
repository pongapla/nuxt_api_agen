import MyCruiseDetail from "~/server/models/mycruise_detail/MyCruiseDetail";

export class MyCruiseDetailService {
  async getAll() {
    return await MyCruiseDetail.findAll();
  }

  async getById(code: number) {
    return await MyCruiseDetail.findByPk(code);
  }

  async create(data: any) {
    return await MyCruiseDetail.create(data);
  }

  async update(code: number, data: any) {
    const rec = await MyCruiseDetail.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await MyCruiseDetail.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
