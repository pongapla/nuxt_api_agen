import Booking from "~/server/models/booking/Booking";

export class BookingService {
  async getAll() {
    return await Booking.findAll();
  }

  async getById(code: number) {
    return await Booking.findByPk(code);
  }

  async create(data: any) {
    return await Booking.create(data);
  }

  async update(code: number, data: any) {
    const rec = await Booking.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await Booking.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
