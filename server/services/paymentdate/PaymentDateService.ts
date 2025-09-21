import PaymentDate from "~/server/models/paymentdate/PaymentDate";

export class PaymentDateService {
  async getAll() {
    return await PaymentDate.findAll();
  }

  async getById(code: number) {
    return await PaymentDate.findByPk(code);
  }

  async create(data: any) {
    return await PaymentDate.create(data);
  }

  async update(code: number, data: any) {
    const rec = await PaymentDate.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await PaymentDate.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
