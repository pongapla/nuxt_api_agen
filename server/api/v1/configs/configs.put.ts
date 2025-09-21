import { ConfigsService } from "~/server/services/configs/ConfigsService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const body = await readBody(event);
  const service = new ConfigsService();
  const rec = await service.update(Number(code), body);
  return { status: "success", data: rec };
});
