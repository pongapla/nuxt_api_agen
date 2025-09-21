import BannerPopup from "~/server/models/bannerpopup/BannerPopup";

export class BannerPopupService {
  async getAll() {
    return await BannerPopup.findAll();
  }

  async getById(code: number) {
    return await BannerPopup.findByPk(code);
  }

  async create(data: any) {
    return await BannerPopup.create(data);
  }

  async update(code: number, data: any) {
    const rec = await BannerPopup.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await BannerPopup.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
