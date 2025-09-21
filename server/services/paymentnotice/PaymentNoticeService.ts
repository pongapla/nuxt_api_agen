import PaymentNotice from "~/server/models/paymentnotice/PaymentNotice";

export class PaymentNoticeService {
  async getAll() {
    return await PaymentNotice.findAll();
  }

  async getById(code: number) {
    return await PaymentNotice.findByPk(code);
  }

  async create(data: any) {
    return await PaymentNotice.create(data);
  }

  async update(code: number, data: any) {
    const rec = await PaymentNotice.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await PaymentNotice.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
