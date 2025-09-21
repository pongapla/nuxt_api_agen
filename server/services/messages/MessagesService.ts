import Messages from "~/server/models/messages/Messages";

export class MessagesService {
  async getAll() {
    return await Messages.findAll();
  }

  async getById(code: number) {
    return await Messages.findByPk(code);
  }

  async create(data: any) {
    return await Messages.create(data);
  }

  async update(code: number, data: any) {
    const rec = await Messages.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await Messages.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
