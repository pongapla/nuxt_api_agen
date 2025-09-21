import AirTicket from "../../models/airticket/AirTicket";

export class AirTicketService {
  async getAll() {
    return await AirTicket.findAll();
  }

  async getById(code: number) {
    return await AirTicket.findByPk(code);
  }

  async create(data: any) {
    return await AirTicket.create(data);
  }

  async update(code: number, data: any) {
    const rec = await AirTicket.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await AirTicket.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
