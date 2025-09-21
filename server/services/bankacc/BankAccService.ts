import BankAcc from "../../models/bankacc/BankAcc";

export class BankAccService {
  async getAll() {
    return await BankAcc.findAll();
  }

  async getById(code: number) {
    return await BankAcc.findByPk(code);
  }

  async create(data: any) {
    return await BankAcc.create(data);
  }

  async update(code: number, data: any) {
    const rec = await BankAcc.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await BankAcc.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
