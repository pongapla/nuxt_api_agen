import Bills from "~/server/models/bills/Bills";

export class BillsService {
  async getAll() {
    return await Bills.findAll();
  }

  async getById(code: number) {
    return await Bills.findByPk(code);
  }

  async create(data: any) {
    return await Bills.create(data);
  }

  async update(code: number, data: any) {
    const rec = await Bills.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await Bills.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
