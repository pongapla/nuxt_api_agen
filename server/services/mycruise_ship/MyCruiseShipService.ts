import MyCruiseShip from "~/server/models/mycruise_ship/MyCruiseShip";

export class MyCruiseShipService {
  async getAll() {
    return await MyCruiseShip.findAll();
  }

  async getById(code: number) {
    return await MyCruiseShip.findByPk(code);
  }

  async create(data: any) {
    return await MyCruiseShip.create(data);
  }

  async update(code: number, data: any) {
    const rec = await MyCruiseShip.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await MyCruiseShip.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
