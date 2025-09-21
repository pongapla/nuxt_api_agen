import DataFields from "~/server/models/datafields/DataFields";

export class DataFieldsService {
  async getAll() {
    return await DataFields.findAll();
  }

  async getById(code: number) {
    return await DataFields.findByPk(code);
  }

  async create(data: any) {
    return await DataFields.create(data);
  }

  async update(code: number, data: any) {
    const rec = await DataFields.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await DataFields.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
