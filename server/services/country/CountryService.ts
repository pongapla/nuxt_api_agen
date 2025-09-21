import Country from "~/server/models/country/Country";

export class CountryService {
  async getAll() {
    return await Country.findAll();
  }

  async getById(code: number) {
    return await Country.findByPk(code);
  }

  async create(data: any) {
    return await Country.create(data);
  }

  async update(code: number, data: any) {
    const rec = await Country.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await Country.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
