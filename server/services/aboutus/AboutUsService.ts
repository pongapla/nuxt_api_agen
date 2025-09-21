import AboutUs from "../../models/aboutus/AboutUs";

export class AboutUsService {
  async getAll() {
    return AboutUs.findAll();
  }

  async getById(code: number) {
    return AboutUs.findByPk(code);
  }

  async create(data: any) {
    return AboutUs.create(data);
  }

  async update(code: number, data: any) {
    const rec = await AboutUs.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return rec.update(data);
  }

  async delete(code: number) {
    const rec = await AboutUs.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
