import ContactUsTel from "~/server/models/contactus_tel/ContactUsTel";

export class ContactUsTelService {
  async getAll() {
    return await ContactUsTel.findAll();
  }

  async getById(code: number) {
    return await ContactUsTel.findByPk(code);
  }

  async create(data: any) {
    return await ContactUsTel.create(data);
  }

  async update(code: number, data: any) {
    const rec = await ContactUsTel.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await ContactUsTel.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
