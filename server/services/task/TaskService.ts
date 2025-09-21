import Task from "~/server/models/task/Task";

export class TaskService {
  async getAll() {
    return await Task.findAll();
  }

  async getById(code: number) {
    return await Task.findByPk(code);
  }

  async create(data: any) {
    return await Task.create(data);
  }

  async update(code: number, data: any) {
    const rec = await Task.findByPk(code);
    if (!rec) throw new Error("Record not found");
    return await rec.update(data);
  }

  async delete(code: number) {
    const rec = await Task.findByPk(code);
    if (!rec) throw new Error("Record not found");
    await rec.destroy();
    return { message: "Deleted successfully" };
  }
}
