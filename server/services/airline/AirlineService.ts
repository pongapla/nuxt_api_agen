import Airline from "../../models/airline/Airline";

export class AirlineService {
  async getAll() {
    return await Airline.findAll();
  }

  async getById(code: number) {
    return await Airline.findByPk(code);
  }

  async create(data: any) {
    return await Airline.create(data);
  }

  async update(code: number, data: any) {
    const rec = await Airline.findByPk(code);
    if (!rec) throw new Error("Not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await Airline.findByPk(code);
    if (!rec) throw new Error("Not found");
    await rec.destroy();
    return { message: "Deleted" };
  }
}
