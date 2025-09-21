import { ConfigsService } from "~/server/services/configs/ConfigsService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new ConfigsService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
