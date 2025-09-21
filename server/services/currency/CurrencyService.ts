import Currency from "~/server/models/currency/Currency";

export class CurrencyService {
  async getAll() {
    return await Currency.findAll();
  }

  async getById(code: number) {
    return await Currency.findByPk(code);
  }

  async create(data: any) {
    return await Currency.create(data);
  }

  async update(code: number, data: any) {
    const rec = await Currency.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await Currency.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
