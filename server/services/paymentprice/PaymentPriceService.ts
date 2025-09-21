import PaymentPrice from "~/server/models/paymentprice/PaymentPrice";

export class PaymentPriceService {
  async getAll() {
    return await PaymentPrice.findAll();
  }

  async getById(code: number) {
    return await PaymentPrice.findByPk(code);
  }

  async create(data: any) {
    return await PaymentPrice.create(data);
  }

  async update(code: number, data: any) {
    const rec = await PaymentPrice.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await PaymentPrice.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
