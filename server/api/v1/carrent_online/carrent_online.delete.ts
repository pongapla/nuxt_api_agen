import { CarrentOnlineService } from "~/server/services/carrent_online/CarrentOnlineService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const service = new CarrentOnlineService();
  const rec = await service.delete(code as string);
  return { status: "success", data: rec };
});
