import AccountBank from "../../models/accountbank/AccountBank";

export class AccountBankService {
  async getAll() {
    return await AccountBank.findAll();
  }

  async getById(code: number) {
    return await AccountBank.findByPk(code);
  }

  async create(data: any) {
    return await AccountBank.create(data);
  }

  async update(code: number, data: any) {
    const rec = await AccountBank.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await AccountBank.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
