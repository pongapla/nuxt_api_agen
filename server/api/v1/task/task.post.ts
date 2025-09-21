import { TaskService } from "~/server/services/task/TaskService";
import { readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new TaskService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
