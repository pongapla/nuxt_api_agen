import ContactTeamTel from "~/server/models/contactteam_tel/ContactTeamTel";

export class ContactTeamTelService {
  async getAll() {
    return await ContactTeamTel.findAll();
  }

  async getById(code: number) {
    return await ContactTeamTel.findByPk(code);
  }

  async create(data: any) {
    return await ContactTeamTel.create(data);
  }

  async update(code: number, data: any) {
    const rec = await ContactTeamTel.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await ContactTeamTel.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
