import { dbInstance } from "~/server/db";
import BankType from "~/server/models/banktype/BankType";

export class BankTypeService {
  async getAll() {
    return await BankType.findAll();
  }

  async getById(code: number) {
    return await BankType.findByPk(code);
  }

  async create(data: any) {
    return await BankType.create(data);
  }

  async update(code: number, data: any) {
    const rec = await BankType.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await BankType.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
