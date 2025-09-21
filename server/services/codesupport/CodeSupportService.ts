import CodeSupport from "~/server/models/codesupport/CodeSupport";

export class CodeSupportService {
  async getAll() {
    return await CodeSupport.findAll();
  }

  async getById(code: number) {
    return await CodeSupport.findByPk(code);
  }

  async create(data: any) {
    return await CodeSupport.create(data);
  }

  async update(code: number, data: any) {
    const rec = await CodeSupport.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await CodeSupport.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
