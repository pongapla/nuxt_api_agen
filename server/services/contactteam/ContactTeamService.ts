import ContactTeam from "~/server/models/contactteam/ContactTeam";

export class ContactTeamService {
  async getAll() {
    return await ContactTeam.findAll();
  }

  async getById(code: number) {
    return await ContactTeam.findByPk(code);
  }

  async create(data: any) {
    return await ContactTeam.create(data);
  }

  async update(code: number, data: any) {
    const rec = await ContactTeam.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await ContactTeam.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
