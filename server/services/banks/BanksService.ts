import { dbInstance } from "~/server/db";
import Banks from "~/server/models/banks/Banks";

export class BanksService {
  async getAll() {
    return await Banks.findAll();
  }

  async getById(code: number) {
    return await Banks.findByPk(code);
  }

  async create(data: any) {
    return await Banks.create(data);
  }

  async update(code: number, data: any) {
    const rec = await Banks.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await Banks.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
