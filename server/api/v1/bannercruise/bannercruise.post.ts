import { BannerCruiseService } from "~/server/services/bannercruise/BannerCruiseService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const service = new BannerCruiseService();
  const rec = await service.create(body);
  return { status: "success", data: rec };
});
