import MyCarrentType from "../../models/mycarrent_type/MyCarrentType";

export class MyCarrentTypeService {
  async getAll() {
    return await MyCarrentType.findAll();
  }

  async getById(code: number) {
    return await MyCarrentType.findByPk(code);
  }

  async create(data: any) {
    return await MyCarrentType.create(data);
  }

  async update(code: number, data: any) {
    const rec = await MyCarrentType.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await MyCarrentType.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
