import { ConfigsService } from "~/server/services/configs/ConfigsService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const service = new ConfigsService();
  const rec = await service.delete(Number(code));
  return { status: "success", data: rec };
});
