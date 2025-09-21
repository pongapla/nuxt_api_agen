import Payment from "~/server/models/payment/Payment";

export class PaymentService {
  async getAll() {
    return await Payment.findAll();
  }

  async getById(code: number) {
    return await Payment.findByPk(code);
  }

  async create(data: any) {
    return await Payment.create(data);
  }

  async update(code: number, data: any) {
    const rec = await Payment.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await Payment.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
