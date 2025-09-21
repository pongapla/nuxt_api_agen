import { BannerCruiseService } from "~/server/services/bannercruise/BannerCruiseService";

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  const body = await readBody(event);
  const service = new BannerCruiseService();
  const rec = await service.update(code as string, body);
  return { status: "success", data: rec };
});
