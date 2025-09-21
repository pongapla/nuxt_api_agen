import TbDocumentDt from "~/server/models/tb_document_dt/TbDocumentDt";

export class TbDocumentDtService {
  async getAll() {
    return await TbDocumentDt.findAll();
  }

  async getById(id: number) {
    return await TbDocumentDt.findByPk(id);
  }

  async create(data: any) {
    return await TbDocumentDt.create(data);
  }

  async update(id: number, data: any) {
    const rec = await TbDocumentDt.findByPk(id);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(id: number) {
    const rec = await TbDocumentDt.findByPk(id);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
