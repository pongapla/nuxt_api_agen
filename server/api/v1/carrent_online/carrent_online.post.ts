import { CarrentOnlineService } from "~/server/services/carrent_online/CarrentOnlineService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new CarrentOnlineService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
