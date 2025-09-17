import Task from "../../models/task/Task";

export class TaskService {
  async findAll() {
    return await Task.findAll();
  }

  async findById(code: number) {
    return await Task.findByPk(code);
  }

  async create(data: any) {
    return await Task.create(data);
  }

  async update(code: number, data: any) {
    const task = await Task.findByPk(code);
    if (!task) return null;
    return await task.update(data);
  }

  async delete(code: number) {
    const task = await Task.findByPk(code);
    if (!task) return null;
    await task.destroy();
    return true;
  }
}
