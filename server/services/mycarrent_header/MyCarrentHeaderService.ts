import MyCarrentHeader from "../../models/mycarrent_header/MyCarrentHeader";

export class MyCarrentHeaderService {
  async getAll() {
    return await MyCarrentHeader.findAll();
  }

  async getById(code: number) {
    return await MyCarrentHeader.findByPk(code);
  }

  async create(data: any) {
    return await MyCarrentHeader.create(data);
  }

  async update(code: number, data: any) {
    const record = await MyCarrentHeader.findByPk(code);
    if (!record) {
      throw new Error("MyCarrentHeader not found");
    }
    return await record.update(data);
  }

  async delete(code: number) {
    const record = await MyCarrentHeader.findByPk(code);
    if (!record) {
      throw new Error("MyCarrentHeader not found");
    }
    return await record.destroy();
  }
}
