import AirTicketPics from "../../models/airticket_pics/AirTicketPics";

export class AirTicketPicsService {
  async getAll() {
    return await AirTicketPics.findAll();
  }

  async getById(code: number) {
    return await AirTicketPics.findByPk(code);
  }

  async create(data: any) {
    return await AirTicketPics.create(data);
  }

  async update(code: number, data: any) {
    const rec = await AirTicketPics.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await AirTicketPics.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
