import ContactUs from "~/server/models/contactus/ContactUs";

export class ContactUsService {
  async getAll() {
    return await ContactUs.findAll();
  }

  async getById(code: number) {
    return await ContactUs.findByPk(code);
  }

  async create(data: any) {
    return await ContactUs.create(data);
  }

  async update(code: number, data: any) {
    const rec = await ContactUs.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await ContactUs.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
