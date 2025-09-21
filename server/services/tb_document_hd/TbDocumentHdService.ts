import TbDocumentHd from "~/server/models/tb_document_hd/TbDocumentHd";

export class TbDocumentHdService {
  async getAll() {
    return await TbDocumentHd.findAll();
  }

  async getById(id: number) {
    return await TbDocumentHd.findByPk(id);
  }

  async create(data: any) {
    return await TbDocumentHd.create(data);
  }

  async update(id: number, data: any) {
    const rec = await TbDocumentHd.findByPk(id);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(id: number) {
    const rec = await TbDocumentHd.findByPk(id);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
